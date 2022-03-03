<script setup lang="ts">
import { useGeneratorStore } from "@/store/generator";
import { useInventoryStore } from "@/store/inventory";

const inventoryStore = useInventoryStore();
const generatorStore = useGeneratorStore();

const tableData = computed(() => {
  return inventoryStore.inventory.map((item) => {
    const generator = generatorStore.generators.find(
      (generator) => generator.blueprint.item === item.item
    );

    return {
      ...item,
      amount: item.amount,
      productionRate: generator ? generator.blueprint.productionTime : 0,
    };
  });
});
</script>

<template>
  <BaseCard class="max-w-screen-lg mx-auto space-y-4 overflow-hidden">
    <h2 class="text-2xl font-bold px-6 pt-6 pb-2">Inventory</h2>

    <table class="w-full">
      <thead>
        <tr>
          <th class="text-left whitespace-nowrap">Item</th>
          <th class="text-right">Amount</th>
          <th class="text-right">Current Production Rate</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="({ item, amount, productionRate }, index) in tableData"
          :key="index"
        >
          <td>{{ item }}</td>
          <td class="font-mono text-right">{{ amount.toLocaleString() }}</td>
          <td class="font-mono text-right">
            {{ productionRate.toLocaleString() }}
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
