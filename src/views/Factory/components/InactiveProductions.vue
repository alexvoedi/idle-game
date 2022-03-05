<script setup lang="ts">
import Blueprint from "@/interfaces/Blueprint";
import { useGeneratorStore } from "@/store/generator";

const generatorStore = useGeneratorStore();

const inactiveGenerators = computed(() => {
  return generatorStore.generators
    .filter((generator) => !generator.active)
    .sort((a, b) => a.blueprint.item.localeCompare(b.blueprint.item));
});

const enableGenerator = (blueprint: Blueprint) => {
  const generator = generatorStore.generators.find(
    (generator) => generator.blueprint.item === blueprint.item
  );

  if (generator) {
    generator.active = true;
  }
};
</script>

<template>
  <BaseCard class="space-y-4 overflow-hidden">
    <h2 class="text-2xl font-bold px-6 pt-6 pb-2">Inactive Productions</h2>

    <table v-if="inactiveGenerators.length > 0" class="w-full">
      <thead>
        <tr>
          <th class="text-left">Blueprint</th>
          <th class="text-right w-min-32">Ingredients</th>
          <th class="text-right">
            <icon-mdi-clock></icon-mdi-clock>
          </th>
          <th>Start Production</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(generator, index) in inactiveGenerators" :key="index">
          <td>{{ generator.blueprint.item }}</td>
          <td class="font-mono text-right whitespace-nowrap">
            <div
              v-for="(ingredient, index) in generator.blueprint.ingredients"
              :key="index"
            >
              {{ ingredient.item }} × {{ ingredient.amount }}
            </div>
          </td>
          <td class="font-mono text-right">
            {{ generatorStore.calculateProductionTime(generator).toFixed(2) }}
          </td>
          <td class="text-center">
            <button @click="enableGenerator(generator.blueprint)">
              <icon-mdi-hammer></icon-mdi-hammer>
            </button>
          </td>
        </tr>
      </tbody></table
  ></BaseCard>
</template>

<style lang="postcss" scoped>
table thead tr {
  @apply bg-true-gray-900;
}

table thead tr th,
table tbody tr td {
  @apply px-4 py-2;
}

table tbody tr:nth-child(odd) {
  @apply bg-true-gray-700;
}
</style>
