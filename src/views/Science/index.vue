<script setup lang="ts">
import { useScienceStore } from "@/store/science";

const scienceStore = useScienceStore();
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold flex items-center gap-4">
      <icon-ic:round-science></icon-ic:round-science>
      <span>Science</span>
    </h1>

    <ScienceCurrentResearchCard
      v-if="scienceStore.currentResearch"
    ></ScienceCurrentResearchCard>

    <ScienceAvailableSciencesCard></ScienceAvailableSciencesCard>
    <ScienceResearchedSciencesCard></ScienceResearchedSciencesCard>
  </div>
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
