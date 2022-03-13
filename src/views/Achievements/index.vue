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
      <BaseCard
        v-for="(achievement, index) in achievementStore.achievements"
        :key="index"
        class="flex-grow p-4"
      >
        <AchievementsAchievementCard
          :achievement="achievement"
        ></AchievementsAchievementCard>
      </BaseCard>
    </div>
  </div>
</template>

<style></style>
