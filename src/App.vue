<script setup lang="ts">
import { useBaseStore } from "./store/base";
import pinia from "@/plugins/pinia";
import store from "store2";

const baseStore = useBaseStore();

const loadGame = () => {
  const gameState = store.get("alexvoedi-idle-game");

  if (gameState) {
    pinia.state.value = gameState;
  }
};

let timerId: ReturnType<typeof setInterval>;

const runGame = () => {
  let lastUpdate = Date.now();

  timerId = setInterval(() => {
    const now = Date.now();
    const delta = now - lastUpdate;

    baseStore.update(delta / 1000);

    lastUpdate = now;
  }, 50);
};

onMounted(async () => {
  loadGame();
  runGame();
});

watch(
  pinia.state,
  (state) => {
    store.set("alexvoedi-idle-game", toRaw(state));
  },
  { deep: true }
);

onUnmounted(() => {
  clearInterval(timerId);
});

console.log("test");
</script>

<template>
  <div class="text-true-gray-200">
    <AppNavigation></AppNavigation>

    <div class="gap-16 p-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="postcss">
html,
body,
#app {
  @apply bg-true-gray-900;
}
</style>
