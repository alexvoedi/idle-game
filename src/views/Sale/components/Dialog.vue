<script setup lang="ts">
import { Item } from "@/data/item";
import { useSaleStore } from "@/store/sale";
import { SellingRuleType } from "@/interfaces/Sale";

interface ComponentProps {
  item: Item;
}

const props = defineProps<ComponentProps>();

const saleStore = useSaleStore();

const rules = computed(() => {
  saleStore.getSales(props.item.id);
});
</script>

<template>
  <BaseDialog>
    <template #activator="{ setIsOpen }">
      <button @click="setIsOpen(true)">sell</button>
    </template>

    <template #title>
      <h1 class="text-2xl">Selling</h1>
    </template>

    <template #description> Sell items from you inventory </template>

    <template #default="{ setIsOpen }">
      <div>
        <div>item</div>

        <div v-for="(rule, index) in rules" :key="index">
          {{ rule }}
        </div>

        <button
          @click="
            saleStore.addSale({
              itemID: item.id,
              rule: SellingRuleType.SellUntil,
              stock: 100,
            })
          "
        >
          add test rule
        </button>

        <BaseButton @click="setIsOpen(false)" primary>Close</BaseButton>
      </div>
    </template>
  </BaseDialog>
</template>

<style></style>
