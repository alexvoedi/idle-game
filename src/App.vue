<script setup lang="ts">
import { useBaseStore } from "./store/base";
import pinia from "@/plugins/pinia";
import store from "store2";
import { useAchievementStore } from "./store/achievement";

const baseStore = useBaseStore();
const achievementStore = useAchievementStore();

useHead({
  title: "Factorior",
  meta: [
    {
      name: "description",
      content: "An idle game made by Alexander Vödisch",
    },
  ],
});

const showAchievementCard = ref(false);

onMounted(() => {
  const gameState = store.get("save-game");

  if (gameState) {
    baseStore.loadGame(gameState);
  }

  baseStore.runGame();

  watch(
    () => achievementStore.latestAchievement,
    () => {
      showAchievementCard.value = true;

      setTimeout(() => {
        showAchievementCard.value = false;
      }, 5000);
    }
  );
});

setInterval(() => {
  store.set("save-game", toRaw(pinia.state.value));
}, 500);

onUnmounted(() => {
  baseStore.unloadGame();
});
</script>

<template>
  <div class="text-true-gray-200 h-full flex flex-col">
    <AppBar class="flex-shrink-0"></AppBar>

    <div class="flex flex-grow overflow-hidden">
      <AppNavigation></AppNavigation>

      <div class="w-full flex-grow overflow-y-auto p-8">
        <div class="flex flex-col max-w-screen-xl mx-auto">
          <router-view #default="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component"></component>
            </transition>
          </router-view>
        </div>
      </div>
    </div>
  </div>

  <Transition name="fade" mode="out-in">
    <div
      v-if="showAchievementCard && achievementStore.latestAchievement"
      class="absolute left-0 right-0 bottom-10 z-100 flex justify-center items-center text-true-gray-200"
    >
      <BaseCard
        class="p-6 flex flex-col gap-4 bg-opacity-60 backdrop-filter backdrop-blur-4 shadow"
      >
        <h1 class="text-3xl text-center font-bold">New Achievement</h1>

        <AchievementsAchievementCard
          :achievement="achievementStore.latestAchievement"
        ></AchievementsAchievementCard>
      </BaseCard>
    </div>
  </Transition>
</template>

<style lang="postcss">
html,
body,
#app {
  @apply bg-true-gray-900 h-full;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
