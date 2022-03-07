<script setup lang="ts">
import { useGeneratorStore } from "@/store/generator";
import Generator from "@/interfaces/Generator";
import { useItem } from "@/composables/useItem";

const generatorStore = useGeneratorStore();
const { getItem } = useItem();

const activeGenerators = computed(() => {
  return generatorStore.generators.filter((generator) => generator.active);
});
</script>

<template>
  <BaseCard class="space-y-4 overflow-hidden">
    <div class="px-6 py-6">
      <h2 class="text-2xl font-bold">Active Productions</h2>

      <div
        :class="[
          generatorStore.activeGeneratorCount <
          generatorStore.maxActiveGenerators
            ? 'text-green-400'
            : 'text-red-400',
        ]"
      >
        Active Generators:
        <span>
          {{ generatorStore.activeGeneratorCount }} |
          {{ generatorStore.maxActiveGenerators }}
        </span>
      </div>
    </div>

    <table v-if="activeGenerators.length > 0" class="w-full">
      <thead>
        <tr>
          <th class="text-left">Output</th>
          <th class="text-right w-min-32">Input</th>
          <th class="text-right">
            <icon-mdi-clock></icon-mdi-clock>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(generator, index) in activeGenerators" :key="index">
          <td>
            <div
              v-for="(item, index) in generator.blueprint.output"
              :key="index"
            >
              {{ getItem(item.id).name }}
            </div>
          </td>
          <td class="font-mono text-right whitespace-nowrap">
            <div
              v-for="(item, index) in generator.blueprint.input"
              :key="index"
            >
              {{ getItem(item.id).name }} × {{ item.amount }}
            </div>
          </td>
          <td class="font-mono text-right">
            {{ generatorStore.calculateProductionTime(generator).toFixed(2) }}
          </td>
          <td class="text-center">
            <button
              @click="generatorStore.setGeneratorActive(generator, false)"
            >
              <icon-mdi-close></icon-mdi-close>
            </button>
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
  @apply px-4 py-2;
}

table tbody tr:nth-child(odd) {
  @apply bg-true-gray-700;
}
</style>
