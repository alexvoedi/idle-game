<script setup lang="ts">
import { useDevStore } from "@/store/dev";

const devStore = useDevStore();

const increaseGameSpeed = () => {
  devStore.gameSpeed = Math.min(4096, 2 * devStore.gameSpeed);
};

const reduceGameSpeed = () => {
  devStore.gameSpeed = Math.max(0.25, 0.5 * devStore.gameSpeed);
};
</script>

<template>
  <BaseCard class="overflow-hidden">
    <div class="px-12 py-6">
      <div class="flex items-center justify-between gap-16">
        <div class="text-center">
          <div class="font-bold text-4xl font-mono">
            <BaseButton @click="reduceGameSpeed">
              <icon-mdi-rewind></icon-mdi-rewind>
            </BaseButton>
          </div>

          <div class="text-sm">Reduce Speed</div>
        </div>

        <div class="text-center">
          <div class="font-bold text-4xl font-mono">
            {{ devStore.gameSpeed }}
          </div>

          <div class="text-sm">Game Speed</div>
        </div>

        <div class="text-center">
          <div class="font-bold text-4xl font-mono">
            <BaseButton @click="increaseGameSpeed">
              <icon-mdi-fast-forward></icon-mdi-fast-forward>
            </BaseButton>
          </div>

          <div class="text-sm">Increase Speed</div>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<style></style>
