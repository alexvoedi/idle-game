<script setup lang="ts">
import { useBaseStore } from "./store/base";

const baseStore = useBaseStore();

let timerId: ReturnType<typeof setInterval>;

onMounted(() => {
  let lastUpdate = Date.now();

  timerId = setInterval(() => {
    const now = Date.now();
    const delta = now - lastUpdate;

    baseStore.update(delta / 1000);

    lastUpdate = now;
  }, 50);
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
