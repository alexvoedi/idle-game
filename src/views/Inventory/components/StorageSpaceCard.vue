<script setup lang="ts">
import { useInventoryStore } from "@/store/inventory";

const inventoryStore = useInventoryStore();

const percentage = computed(
  () => inventoryStore.inventorySize / inventoryStore.storage
);
</script>

<template>
  <BaseCard class="overflow-hidden">
    <div class="px-12 py-6">
      <div class="flex items-center justify-between gap-16">
        <div class="text-center">
          <div class="font-bold text-4xl font-mono">
            {{ inventoryStore.inventorySize }}
          </div>

          <div class="text-sm">In Use</div>
        </div>

        <div class="text-center">
          <div class="font-bold text-4xl font-mono">
            {{ inventoryStore.storage }}
          </div>

          <div class="text-sm">Total</div>
        </div>

        <div class="text-center">
          <div
            class="font-bold text-4xl font-mono"
            :class="{
              'text-green-400': percentage < 0.33,
              'text-yellow-500': percentage >= 0.33 && percentage < 0.66,
              'text-orange-500': percentage >= 0.66 && percentage < 1,
              'text-red-500': percentage === 1,
            }"
          >
            {{ inventoryStore.remainingInventorySpace }}
          </div>

          <div class="text-sm">Remaining</div>
        </div>
      </div>
    </div>

    <BaseProgressBar :progress="percentage"></BaseProgressBar>
  </BaseCard>
</template>

<style></style>
