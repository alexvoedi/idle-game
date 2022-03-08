<script setup lang="ts">
import { useGeneratorStore } from "@/store/generator";
import { useInventoryStore } from "@/store/inventory";
import { useItem } from "@/composables/useItem";
import ItemID from "@/data/items/ItemID";

const inventoryStore = useInventoryStore();
const generatorStore = useGeneratorStore();
const { getItem } = useItem();

const getProductionRate = (itemID: ItemID) => {
  const generators = generatorStore.generators.filter(
    (generator) =>
      generator.active &&
      generator.blueprint.output.some(
        (blueprintItem) => blueprintItem.id === itemID
      )
  );

  if (generators.length > 0) {
    const productionTime = generators.reduce((totalTime, generator) => {
      return totalTime + generatorStore.calculateProductionTime(generator);
    }, 0);

    return 1 / productionTime;
  } else {
    return 0;
  }
};

const inventory = computed(() => {
  return inventoryStore.inventory
    .map((item) => {
      const { saleValue } = getItem(item.id);
      const totalSaleValue = item.amount * saleValue;
      const productionRate = getProductionRate(item.id);

      return {
        ...item,
        saleValue,
        totalSaleValue,
        productionRate,
      };
    })
    .sort((a: ItemID, b: ItemID) => a.id - b.id);
});

const columns = ref([
  { id: "item", text: "Item", field: "name", headClasses: "text-left" },
  {
    id: "amount",
    text: "Stock",
    field: "amount",
    classes: "text-right",
    bodyClasses: "font-mono",
  },
  {
    id: "sale-value",
    text: "Sale Value",
    field: "saleValue",
    classes: "text-right",
    bodyClasses: "font-mono",
  },
  {
    id: "production-rate",
    text: "Items per Second",
    field: "productionRate",
    classes: "text-right",
    bodyClasses: "font-mono",
  },
  {
    id: "actions",
    text: "",
    field: "actions",
    classes: "text-right",
    bodyClasses: "flex justify-end",
  },
]);
</script>

<template>
  <BaseTable :items="inventory" :columns="columns">
    <template #item="{ item }">
      {{ getItem(item.id).name }}
    </template>

    <template #production-rate="{ item }">
      {{ item.productionRate.toFixed(2) }}
    </template>

    <template #sale-value="{ item }">
      {{ item.saleValue.toFixed(2) }} |
      {{ item.totalSaleValue.toFixed(2) }}
    </template>

    <template #actions="{ item }">
      <BaseButton
        @click="inventoryStore.sellItem({ id: item.id, amount: 1 })"
        class=""
        hover="text-indigo-400"
      >
        <template #icon>
          <icon-healthicons:money-bag></icon-healthicons:money-bag>
        </template>
      </BaseButton>
    </template>
  </BaseTable>
</template>

<style></style>
