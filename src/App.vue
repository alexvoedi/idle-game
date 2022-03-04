<script setup lang="ts">
import { useBaseStore } from "./store/base";
import { StateTree } from "pinia";
import pinia from "@/plugins/pinia";
import localForage from "localforage";

const baseStore = useBaseStore();

const loadGame = async () => {
  const gameState = await localForage.getItem<Record<string, StateTree>>(
    "alexvoedi-idle-game"
  );

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
  await loadGame();

  runGame();

  console.log(pinia.state);

  watch(
    pinia.state,
    (state) => {
      console.log(toRaw(state));
      localForage.setItem("alexvoedi-idle-game", toRaw(state));
    },
    { deep: true }
  );
});

onUnmounted(() => {
  clearInterval(timerId);
});
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
