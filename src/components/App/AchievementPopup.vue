<script setup lang="ts">
import { useAchievementStore } from "@/store/achievement";

const achievementStore = useAchievementStore();

const showAchievementCard = ref(false);

watch(
  () => achievementStore.achievements.length,
  (newValue, oldValue) => {
    if (newValue > oldValue) {
      showAchievementCard.value = true;

      setTimeout(() => {
        showAchievementCard.value = false;
      }, 10000);
    }
  }
);
</script>

<template>
  <div class="relative">
    <Transition name="slide" mode="out-in">
      <div
        v-if="showAchievementCard && achievementStore.latestAchievement"
        class="absolute left-0 right-0 bottom-5 z-100 flex justify-center items-center text-true-gray-200"
      >
        <BaseCard
          class="p-6 flex flex-col gap-4 bg-indigo-600 bg-opacity-60 backdrop-filter backdrop-blur-4 shadow relative"
        >
          <h1 class="text-3xl text-center font-bold">New Achievement</h1>

          <button
            @click="showAchievementCard = false"
            class="absolute top-3 right-3 text-xl text-true-gray-600 hover:text-true-gray-200"
          >
            <icon-mdi-close></icon-mdi-close>
          </button>

          <AchievementsAchievementCard
            :achievement="achievementStore.latestAchievement"
          ></AchievementsAchievementCard>
        </BaseCard>
      </div>
    </Transition>
  </div>
</template>

<style lang="postcss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(calc(100% + 5px));
}
</style>
