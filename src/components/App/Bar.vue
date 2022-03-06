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
    <div class="text-2xl">Factorior</div>

    <div class="grid grid-cols-2 items-center justify-center font-mono">
      <icon-healthicons:money-bag></icon-healthicons:money-bag>
      {{ inventoryStore.money.toFixed(2) }}
    </div>

    <div>
      <button
        @click="baseStore.toggleRunning"
        class="flex justify-center items-center gap-2"
      >
        <icon-mdi-delete></icon-mdi-delete>
        <span>Pause Game</span>
      </button>

      <button
        @click="baseStore.resetGame"
        class="flex justify-center items-center gap-2"
      >
        <icon-mdi-delete></icon-mdi-delete>
        <span>Reset Game</span>
      </button>
    </div>
  </div>
</template>

<style></style>
