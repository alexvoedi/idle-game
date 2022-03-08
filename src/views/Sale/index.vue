<script setup lang="ts">
import { useItem } from "@/composables/useItem";
import { useInventoryStore } from "@/store/inventory";
import { useSaleStore } from "@/store/sale";

const { getItem } = useItem();
const inventoryStore = useInventoryStore();
const saleStore = useSaleStore();

const items = computed(() =>
  inventoryStore.inventory.map((inventoryItem) => ({
    ...inventoryItem,
    ...getItem(inventoryItem.id),
  }))
);

const columns = ref([
  { id: "item", text: "Item", field: "name", headClasses: "text-left" },
  {
    id: "amount",
    text: "Stock",
    field: "amount",
    headClasses: "text-right",
    bodyClasses: "font-mono text-right",
  },
  {
    id: "rules",
    text: "Selling Rules",
    field: "rules",
    classes: "text-center",
  },
  {
    id: "actions",
    text: "Actions",
    field: "actions",
    classes: "text-center",
  },
]);
</script>

<template>
  <div>
    <h1>Selling</h1>

    <BaseCard class="overflow-hidden">
      <BaseTable :items="items" :columns="columns">
        <template #rules="{ item }">
          <template v-if="saleStore.getSales(item.id).length > 0">
            <div
              v-for="(rule, index) in saleStore.getSales(item.id)"
              :key="index"
            >
              {{ rule }}
            </div>
          </template>

          <template v-else> - </template>
        </template>

        <template #actions="{ item }">
          <SaleDialog :item="item"></SaleDialog>
        </template>
      </BaseTable>
    </BaseCard>
  </div>
</template>

<style></style>
