<script setup lang="ts">
import { useGeneratorStore } from "@/store/generator";

const generatorStore = useGeneratorStore();

const percentage = computed(
  () => generatorStore.activeGeneratorCount / generatorStore.maxActiveGenerators
);
</script>

<template>
  <BaseCard class="overflow-hidden">
    <div class="px-12 py-6">
      <div class="flex items-center justify-between gap-16">
        <div class="text-center">
          <div class="font-bold text-4xl font-mono">
            {{ generatorStore.activeGeneratorCount }}
          </div>

          <div class="text-sm">Active Productions</div>
        </div>

        <div class="text-center">
          <div class="font-bold text-4xl font-mono">
            {{ generatorStore.maxActiveGenerators }}
          </div>

          <div class="text-sm">Maximum Production</div>
        </div>

        <div class="text-center">
          <div class="font-bold text-4xl font-mono">
            {{ (100 * percentage).toFixed(2) }}%
          </div>

          <div class="text-sm">Percent Active</div>
        </div>
      </div>
    </div>

    <BaseProgressBar :progress="percentage"></BaseProgressBar>
  </BaseCard>
</template>

<style></style>
