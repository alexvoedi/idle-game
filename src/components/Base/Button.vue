<script setup lang="ts">
interface ComponentProps {
  disabled?: boolean;
}

defineProps<ComponentProps>();
</script>

<template>
  <button
    :disabled="disabled"
    class="px-4 py-2 rounded-lg transition font-semibold disabled:opacity-30 disabled:hover:cursor-not-allowed"
  >
    <slot name="icon"></slot>
    <slot name="default"></slot>
  </button>
</template>

<style></style>
