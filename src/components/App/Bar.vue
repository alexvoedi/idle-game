<script setup lang="ts">
import { useBaseStore } from "@/store/base";

const baseStore = useBaseStore();
</script>

<template>
  <div
    class="h-16 bg-true-gray-800 flex justify-between items-center bg-true-gray-800 px-8 border-b border-b-true-gray-700"
  >
    <div class="text-2xl">Factorior</div>

    <div>
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
