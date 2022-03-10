<script setup lang="ts">
import { useBaseStore } from "@/store/base";
import { useInventoryStore } from "@/store/inventory";

const baseStore = useBaseStore();
const inventoryStore = useInventoryStore();
</script>

<template>
  <div
    class="h-16 bg-true-gray-800 flex justify-between items-center bg-true-gray-800 px-8 border-b border-b-true-gray-700"
  >
    <div class="relative">
      <span class="text-2xl">Factorior</span>
      <span class="text-xs absolute right-0 -bottom-2">
        v{{ baseStore.gameVersion }}
      </span>
    </div>

    <div class="flex gap-10">
      <div class="flex items-center justify-center gap-2 text-lg font-mono">
        <icon-ic:baseline-attach-money></icon-ic:baseline-attach-money>
        {{ inventoryStore.money.toFixed(2) }}
      </div>

      <div class="flex items-center justify-center gap-2 text-lg font-mono">
        <icon-mdi-sitemap></icon-mdi-sitemap>
        {{ inventoryStore.inventorySize }} / {{ inventoryStore.storage }}
      </div>
    </div>

    <div class="flex gap-8 text-lg">
      <button
        @click="baseStore.toggleRunning"
        class="flex justify-center items-center gap-2"
      >
        <template v-if="baseStore.running">
          <icon-mdi-pause class="text-green-600"></icon-mdi-pause>
        </template>
        <template v-else>
          <icon-mdi-play class="text-red-600"></icon-mdi-play>
        </template>
      </button>
    </div>
  </div>
</template>

<style></style>
