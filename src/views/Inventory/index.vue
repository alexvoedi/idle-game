<script setup lang="ts">
import { useGeneratorStore } from "@/store/generator";
import { useInventoryStore } from "@/store/inventory";
import { useItem } from "@/composables/useItem";
import ItemID from "@/data/items/ItemID";

const inventoryStore = useInventoryStore();
const generatorStore = useGeneratorStore();
const { getItem } = useItem();

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
    .sort((a, b) => a.id - b.id);
});

const getProductionRate = (itemID: ItemID) => {
  const generators = generatorStore.generators.filter(
    (generator) =>
      generator.active &&
      generator.blueprint.output.some(
        (blueprintItem) => blueprintItem.id === itemID
      )
  );

  if (generators.length > 0) {
    const productionTime = generators.reduce((t, generator) => {
      return generatorStore.calculateProductionTime(generator);
    }, 0);

    return 1 / productionTime;
  } else {
    return 0;
  }
};

const totalSaleValue = computed(() => {
  return inventory.value.reduce((sum, item) => sum + item.totalSaleValue, 0);
});
</script>

<template>
  <BaseCard class="space-y-4 overflow-hidden">
    <h2 class="text-2xl font-bold px-6 pt-6 pb-2">Inventory</h2>

    <div class="px-6 space-y-4">
      <div>Storage Space: {{ inventoryStore.remainingInventorySpace }}</div>
      <div>Total Sale Value: {{ totalSaleValue.toFixed(2) }}</div>
    </div>

    <InventoryItemTable></InventoryItemTable>
  </BaseCard>
</template>

<style lang="postcss" scoped></style>
