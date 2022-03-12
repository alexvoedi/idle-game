<script setup lang="ts">
import StorageSpace from "@/interfaces/effects/StorageSpace";

interface ComponentProps {
  effect: StorageSpace;
}

defineProps<ComponentProps>();
</script>

<template>
  <BaseCard class="p-4 flex justify-center items-center gap-4">
    <icon-mdi-warehouse class="text-4xl"></icon-mdi-warehouse>

    <div class="text-lg">Storage Space</div>

    <div class="text-lg">+{{ effect.value }}</div>
  </BaseCard>
</template>

<style></style>
