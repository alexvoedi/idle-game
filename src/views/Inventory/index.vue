<script setup lang="ts">
import { ItemID } from "@/data/item";
import { useGeneratorStore } from "@/store/generator";
import { useInventoryStore } from "@/store/inventory";
import { useItem } from "@/composables/useItem";

const inventoryStore = useInventoryStore();
const generatorStore = useGeneratorStore();
const { getItemName } = useItem();

const inventory = computed(() => {
  return inventoryStore.inventory.map((item) => {
    return {
      ...item,
      amount: item.amount,
      productionRate: getProductionRate(item.id),
    };
  });
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
</script>

<template>
  <BaseCard class="space-y-4 overflow-hidden">
    <h2 class="text-2xl font-bold px-6 pt-6 pb-2">Inventory</h2>

    <div class="px-6">
      Storage Space: {{ inventoryStore.remainingInventorySpace }}
    </div>

    <table class="w-full">
      <thead>
        <tr>
          <th class="text-left whitespace-nowrap">Item</th>
          <th class="text-right">Amount</th>
          <th class="text-right">Items per Second</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(inventoryItem, index) in inventory" :key="index">
          <td>{{ getItemName(inventoryItem.id) }}</td>
          <td class="font-mono text-right">
            {{ inventoryItem.amount.toLocaleString() }}
          </td>
          <td
            class="font-mono text-right"
            :class="[
              inventoryItem.productionRate === 0
                ? 'text-red-500'
                : 'text-green-500',
            ]"
          >
            {{ inventoryItem.productionRate.toFixed(4).toLocaleString() }}
          </td>
        </tr>
      </tbody>
    </table>
  </BaseCard>
</template>

<style lang="postcss" scoped>
table thead tr {
  @apply bg-true-gray-900;
}

table thead tr th,
table tbody tr td {
  @apply px-8 py-2;
}

table tbody tr:nth-child(odd) {
  @apply bg-true-gray-700;
}
</style>
