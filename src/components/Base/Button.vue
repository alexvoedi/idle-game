<script setup lang="ts">
interface ComponentProps {
  disabled?: boolean;
  type?: "button" | "submit";
}

defineProps<ComponentProps>();
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="px-4 py-2 rounded-lg transition font-semibold disabled:opacity-30 disabled:hover:cursor-not-allowed"
  >
    <slot name="icon"></slot>
    <slot name="default"></slot>
  </button>
</template>

<style></style>
