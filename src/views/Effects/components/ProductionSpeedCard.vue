<script setup lang="ts">
import { useItem } from "@/composables/useItem";
import ProductionSpeed from "@/interfaces/effects/ProductionSpeed";

interface ComponentProps {
  effect: ProductionSpeed;
}

const { getItem } = useItem();

defineProps<ComponentProps>();
</script>

<template>
  <BaseCard class="p-4 flex justify-center items-center gap-4">
    <icon-mdi-clock class="text-4xl"></icon-mdi-clock>

    <div class="text-center">
      <div text="text-xs">Production Speed</div>
      <div class="text-xl">{{ getItem(effect.item.id).name }}</div>
    </div>

    <div class="text-lg">+{{ 100 * (effect.item.value - 1) }}%</div>
  </BaseCard>
</template>

<style></style>
