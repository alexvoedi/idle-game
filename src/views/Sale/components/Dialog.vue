<script setup lang="ts">
import Item from "@/interfaces/items/Item";
import SaleRule from "@/data/sales/SaleRule";
import { useSaleStore } from "@/store/sale";
import { useItem } from "@/composables/useItem";

interface ComponentProps {
  item: Item;
}

const props = defineProps<ComponentProps>();

const saleStore = useSaleStore();
const { getItem } = useItem();

const rules = computed(() => saleStore.getSales(props.item.id));
</script>

<template>
  <BaseDialog>
    <template #activator="{ setIsOpen }">
      <BaseButton @click="setIsOpen(true)" class="hover:text-indigo-400">
        <template #icon>
          <icon-mdi-cog></icon-mdi-cog>
        </template>
      </BaseButton>
    </template>

    <template #title>
      <h1 class="text-2xl">{{ getItem(item.id).name }} Selling</h1>
    </template>

    <template #description></template>

    <template #default="{ setIsOpen }">
      <div class="space-y-4">
        <div
          v-for="(rule, index) in rules"
          :key="index"
          class="flex items-center gap-4"
        >
          Maximum Inventory Items: <input type="number" v-model="rule.stock" />

          <input type="checkbox" v-model="rule.active" />

          <BaseButton
            @click="
              saleStore.removeSale({
                itemID: rule.itemID,
                rule: rule.rule,
              })
            "
          >
            <icon-mdi-trash-can></icon-mdi-trash-can>
          </BaseButton>
        </div>

        <button
          @click="
            saleStore.addSale({
              itemID: item.id,
              rule: SaleRule.SellUntil,
              stock: 100,
              active: true,
            })
          "
        >
          add test rule
        </button>

        <div class="flex justify-between">
          <BaseButton
            @click="setIsOpen(false)"
            class="text-indigo-600"
            hover="bg-indigo-100"
          >
            Close
          </BaseButton>

          <BaseButton class="text-white bg-indigo-600" hover="bg-indigo-500">
            Save
          </BaseButton>
        </div>
      </div>
    </template>
  </BaseDialog>
</template>

<style></style>
