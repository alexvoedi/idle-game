<script setup lang="ts">
import { useBaseStore } from "./store/base";
import pinia from "@/plugins/pinia";
import store from "store2";

const baseStore = useBaseStore();

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
  const gameState = store.get("save-game");

  if (gameState) {
    baseStore.loadGame(gameState);
  }

  baseStore.runGame();
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
    <AppBar></AppBar>

    <div class="flex flex-grow">
      <AppNavigation></AppNavigation>

      <div class="w-full max-w-screen-xl mx-auto p-8">
        <router-view #default="{ Component }">
          <transition class="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
html,
body,
#app {
  @apply bg-true-gray-900 h-full;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
