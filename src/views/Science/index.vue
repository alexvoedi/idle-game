<script setup lang="ts">
import { useScienceStore } from "@/store/science";

const scienceStore = useScienceStore();

const tableData = computed(() => {
  return scienceStore.sciences.filter(
    (science) => !scienceStore.researched.includes(science.name)
  );
});
</script>

<template>
  <BaseCard class="max-w-screen-lg mx-auto space-y-4 overflow-hidden">
    <h2 class="text-2xl font-bold px-6 pt-6 pb-2">Science</h2>

    <div v-if="scienceStore.currentResearch">
      <h3>Current Research</h3>

      <div>
        {{ scienceStore.currentResearch.science.name }}
        {{
          (
            (100 * scienceStore.currentResearch.time) /
            scienceStore.currentResearch.science.researchTime
          ).toFixed(1)
        }}%
      </div>
    </div>

    <table class="w-full">
      <thead>
        <tr>
          <th class="text-left whitespace-nowrap">Name</th>
          <th class="text-right">Research Time</th>
          <th class="text-right">Requirements</th>
          <th class="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(science, index) in tableData" :key="index">
          <td>{{ science.name }}</td>
          <td class="text-right font-mono">{{ science.researchTime }}</td>
          <td class="text-right font-mono">
            <div
              v-for="(item, index) in science.requirements.items"
              :key="index"
            >
              {{ item.item }} * {{ item.amount }}
            </div>
          </td>
          <td class="text-center">
            <button @click="scienceStore.startResearch(science)">
              <icon-fontisto:laboratory></icon-fontisto:laboratory>
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
  @apply px-8 py-2;
}

table tbody tr:nth-child(odd) {
  @apply bg-true-gray-700;
}
</style>
