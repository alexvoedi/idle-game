<script setup lang="ts">
interface ComponentProps {
  progress: number;
}

defineProps<ComponentProps>();
</script>

<template>
  <div class="h-1 bg-true-gray-200" sm="h-2">
    <div
      class="h-full transition-all bg-primary-600"
      :style="{
        width: `${progress * 100}%`,
      }"
    >
      <div class="sr-only">{{ `${progress * 100}%` }}</div>
    </div>
  </div>
</template>

<style></style>
