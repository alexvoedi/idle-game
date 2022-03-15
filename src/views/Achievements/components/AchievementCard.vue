<script setup lang="ts">
import { useTime } from "@/composables/useTime";
import Achievement from "@/interfaces/achievements/Achievement";

interface ComponentProps {
  achievement: Achievement;
}

defineProps<ComponentProps>();

const { toDateString, toTimeString } = useTime();
</script>

<template>
  <div class="flex justify-center items-center gap-8 whitespace-nowrap">
    <div class="text-6xl font-bold flex align-middle pb-3">
      {{ achievement.icon }}
    </div>

    <div class="flex flex-col justify-between text-center">
      <div class="text-2xl">{{ achievement.name }}</div>

      <div>{{ achievement.description }}</div>
    </div>

    <div class="flex flex-col justify-between text-center">
      <div>
        {{ toDateString(achievement.date) }}
      </div>

      <div>
        {{ toTimeString(achievement.date) }}
      </div>
    </div>
  </div>
</template>

<style></style>
