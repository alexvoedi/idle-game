<script setup lang="ts">
import { useEffectStore } from "@/store/effect";
import EffectType from "@/data/effects/EffectType";

const effectStore = useEffectStore();
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold flex items-center gap-4">
      <icon-carbon-upgrade></icon-carbon-upgrade>
      <span>Effects</span>
    </h1>

    <div class="flex flex-wrap gap-8">
      <div
        v-for="(effect, index) in effectStore.effects"
        :key="index"
        class="flex-grow"
      >
        <EffectsMaxGeneratorsCountCard
          v-if="effect.type === EffectType.MaxGeneratorsCount"
          :effect="effect"
        ></EffectsMaxGeneratorsCountCard>

        <EffectsProductionSpeedCard
          v-else-if="effect.type === EffectType.ProductionSpeed"
          :effect="effect"
        ></EffectsProductionSpeedCard>

        <EffectsStorageSpaceCard
          v-else-if="effect.type === EffectType.StorageSpace"
          :effect="effect"
        ></EffectsStorageSpaceCard>
      </div>
    </div>
  </div>
</template>

<style></style>
