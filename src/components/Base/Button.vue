<script setup lang="ts">
interface ComponentProps {
  disabled?: boolean;
}

defineProps<ComponentProps>();
</script>

<template>
  <button
    :disabled="disabled"
    class="flex justify-center items-center gap-3 px-4 py-2 rounded-lg transition font-semibold disabled:opacity-30"
  >
    <slot name="icon"></slot>
    <slot name="default"></slot>
  </button>
</template>

<style></style>
