<script setup lang="ts">
import { useScienceStore } from "@/store/science";

const scienceStore = useScienceStore();

const percentage = computed(() => {
  if (scienceStore.currentResearch) {
    return (
      scienceStore.currentResearch.time /
      scienceStore.currentResearch.science.researchTime
    );
  } else {
    return 0;
  }
});

const remainingTime = computed(() => {
  if (scienceStore.currentResearch) {
    return (
      scienceStore.currentResearch.science.researchTime -
      scienceStore.currentResearch.time
    );
  } else {
    return 0;
  }
});
</script>

<template>
  <BaseCard class="overflow-hidden">
    <div class="px-12 py-6">
      <div class="flex items-center justify-between gap-16">
        <div class="text-center">
          <div class="font-bold text-4xl">
            {{ scienceStore.currentResearch?.science.name }}
          </div>

          <div class="text-sm">Current Research</div>
        </div>

        <div class="text-center">
          <div class="font-bold text-4xl font-mono">
            {{ remainingTime.toFixed(1) }}s
          </div>

          <div class="text-sm">Time Remaining</div>
        </div>

        <div class="text-center">
          <div class="font-bold text-4xl font-mono">
            {{ (100 * percentage).toFixed(1) }}%
          </div>

          <div class="text-sm">Progress</div>
        </div>
      </div>
    </div>

    <BaseProgressBar :progress="percentage"></BaseProgressBar>
  </BaseCard>
</template>

<style></style>
