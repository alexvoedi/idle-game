<script setup lang="ts">
import { useBaseStore } from "./store/base";
import pinia from "@/plugins/pinia";
import store from "store2";

const baseStore = useBaseStore();

let timerId: ReturnType<typeof setInterval>;

const runGame = () => {
  if (!baseStore.running) return;

  let lastUpdate = Date.now();

  timerId = setInterval(() => {
    const now = Date.now();
    const delta = now - lastUpdate;

    baseStore.update(delta / 1000);

    lastUpdate = now;
  }, 20);
};

onMounted(() => {
  baseStore.loadGame();

  runGame();
});

watch(
  pinia.state,
  (state) => {
    store.set("alexvoedi-idle-game", state);
  },
  { deep: true }
);

onUnmounted(() => {
  clearInterval(timerId);
});
</script>

<template>
  <div class="text-true-gray-200 h-full flex flex-col">
    <AppBar></AppBar>

    <div class="flex flex-grow">
      <AppNavigation></AppNavigation>

      <div class="w-full max-w-screen-xl mx-auto p-8">
        <router-view></router-view>
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
</style>
