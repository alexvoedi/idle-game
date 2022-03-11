<script setup lang="ts">
import MaxGeneratorsCount from "@/interfaces/effects/MaxGeneratorsCount";

interface ComponentProps {
  effect: MaxGeneratorsCount;
}

defineProps<ComponentProps>();
</script>

<template>
  <BaseCard class="p-4 flex justify-center items-center gap-4">
    <icon-mdi-factory class="text-4xl"></icon-mdi-factory>

    <div class="text-lg">Available Generators</div>

    <div class="text-lg">+{{ effect.count }}</div>
  </BaseCard>
</template>

<style></style>
