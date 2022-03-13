<script setup lang="ts">
import { useBaseStore } from "./store/base";
import pinia from "@/plugins/pinia";
import store from "store2";

const baseStore = useBaseStore();

const gameLoaded = ref(false);

useHead({
  title: "Factorior",
  meta: [
    {
      name: "description",
      content: "An idle game made by Alexander Vödisch",
    },
  ],
});

onMounted(() => {
  gameLoaded.value = false;

  const gameState = store.get("save-game");

  if (gameState) {
    baseStore.loadGame(gameState);
  }

  baseStore.runGame();

  gameLoaded.value = true;
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

  <AppAchievementPopup v-if="gameLoaded"></AppAchievementPopup>
</template>

<style lang="postcss">
html,
body,
#app {
  @apply bg-true-gray-900 h-full overflow-hidden;
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
