<script setup lang="ts">
import { useInventoryStore } from "@/store/inventory";

const inventoryStore = useInventoryStore();
</script>

<template>
  <BaseCard class="px-12 py-6">
    <div class="flex items-center justify-between gap-16">
      <div class="text-center">
        <div class="font-bold text-4xl font-mono">
          {{ inventoryStore.inventorySize }}
        </div>

        <div class="text-sm">Used</div>
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
            'text-red-500':
              inventoryStore.inventorySize === inventoryStore.storage,
            'text-orange-500':
              inventoryStore.inventorySize / inventoryStore.storage > 0.66,
            'text-yellow-500':
              inventoryStore.inventorySize / inventoryStore.storage > 0.33,
            'text-green-400':
              inventoryStore.inventorySize / inventoryStore.storage > 0,
          }"
        >
          {{ inventoryStore.remainingInventorySpace }}
        </div>

        <div class="text-sm">Remaining</div>
      </div>
    </div>
  </BaseCard>
</template>

<style></style>
