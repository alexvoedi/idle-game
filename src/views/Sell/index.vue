<script setup lang="ts">
import { useItem } from "@/composables/useItem";
import { useInventoryStore } from "@/store/inventory";

const { getItem } = useItem();
const inventoryStore = useInventoryStore();

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
    text: "Amount",
    field: "amount",
    headClasses: "text-right",
    bodyClasses: "font-mono text-right",
  },
  {
    id: "actions",
    text: "Actions",
    field: "actions",
  },
]);
</script>

<template>
  <div>
    <h1>Selling</h1>

    <BaseCard class="overflow-hidden">
      <BaseTable :items="items" :columns="columns">
        <template #actions="{ item }">
          <BaseDialog>
            <template #activator="{ setIsOpen }">
              <button @click="setIsOpen(true)">sell</button>
            </template>

            <template #title> Selling </template>

            <template #description> Sell items from you inventory </template>

            <template #default="{ setIsOpen }">
              {{ item }}

              <button @click="setIsOpen(false)">close</button>
            </template>
          </BaseDialog>
        </template>
      </BaseTable>
    </BaseCard>
  </div>
</template>

<style></style>
