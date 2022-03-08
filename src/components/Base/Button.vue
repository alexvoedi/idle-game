<script setup lang="ts">
interface ComponentProps {
  outlined?: boolean;
  primary?: boolean;
  filled?: boolean;
  warning?: boolean;
  error?: boolean;
  disabled?: boolean;
}

defineProps<ComponentProps>();
</script>

<template>
  <button
    :disabled="disabled"
    class="flex justify-center items-center gap-3 px-4 py-2 rounded-lg transition font-semibold"
    :class="{
      'border-2': outlined,

      'hover:bg-opacity-50': outlined && !disabled,

      'bg-indigo-600 text-white': filled && primary,
      'hover:bg-indigo-700': filled && primary && !disabled,

      'bg-orange-600 text-white': filled && warning,
      'hover:bg-orange-700': filled && warning && !disabled,

      'bg-red-700 text-white': filled && error,
      'hover:bg-red-800': filled && error && !disabled,

      'text-indigo-400 border-indigo-400': primary,
      'hover:bg-indigo-900': primary && !disabled,

      'text-orange-400 border-orange-400': warning,
      'hover:bg-orange-900': warning && !disabled,

      'text-red-500 border-red-500': error,
      'hover:bg-red-900': error && !disabled,

      'opacity-30 cursor-not-allowed': disabled,
    }"
  >
    <slot name="icon"></slot>
    <slot name="default"></slot>
  </button>
</template>

<style></style>
