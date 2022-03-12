<script setup lang="ts">
import { useAchievementStore } from "@/store/achievement";

const achievementStore = useAchievementStore();
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold flex items-center gap-4">
      <icon-mdi-trophy></icon-mdi-trophy>
      <span>Achievements</span>
    </h1>

    <div class="flex flex-wrap gap-8">
      <div
        v-for="(achievement, index) in achievementStore.achievements"
        :key="index"
        class="flex-grow"
      >
        <BaseCard
          class="p-4 flex justify-center items-center gap-8 whitespace-nowrap"
        >
          <div class="text-6xl font-bold flex align-middle pb-3">
            {{ achievement.icon }}
          </div>

          <div class="flex flex-col justify-between text-center">
            <div class="text-2xl">{{ achievement.name }}</div>

            <div>{{ achievement.description }}</div>
          </div>

          <div class="flex flex-col justify-between text-center">
            <div>
              {{ achievement.date?.toLocaleDateString() }}
            </div>

            <div>
              {{ achievement.date?.toLocaleTimeString() }}
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<style></style>
