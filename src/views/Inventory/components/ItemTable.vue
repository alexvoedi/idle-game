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

const items = computed(() => {
  return inventoryStore.inventory
    .map((item) => {
      const { saleValue } = getItem(item.id);
      const name = getItem(item.id).name;
      const totalSaleValue = item.amount * saleValue;
      const productionRate = getProductionRate(item.id);

      return {
        ...item,
        name,
        saleValue,
        totalSaleValue,
        productionRate,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
});

const columns = ref([
  { id: "item", text: "Item", field: "name", headClasses: "text-left" },
  {
    id: "amount",
    text: "Amount",
    field: "amount",
    classes: "text-right",
    bodyClasses: "font-mono",
  },
  {
    id: "production-rate",
    text: "Production Rate",
    field: "productionRate",
    classes: "text-right",
    bodyClasses: "font-mono",
  },
]);
</script>

<template>
  <BaseCard class="overflow-hidden">
    <BaseTable :items="items" :columns="columns">
      <template #production-rate="{ item }">
        {{ item.productionRate.toFixed(2) }}
      </template>
    </BaseTable>
  </BaseCard>
</template>

<style></style>
