<script setup lang="ts">
import { useBaseStore } from "@/store/base";
import InventoryIcon from "~icons/mdi/factory";
import ScienceIcon from "~icons/mdi/factory";
import FactoryIcon from "~icons/mdi/factory";

const baseStore = useBaseStore();

const links = [
  {
    to: "Inventory",
    text: "Inventory",
    icon: InventoryIcon,
  },
  {
    to: "Factory",
    text: "Factory",
    icon: FactoryIcon,
  },
  {
    to: "Science",
    text: "Science",
    icon: ScienceIcon,
  },
];
</script>

<template>
  <nav class="h-16 flex justify-between items-center bg-true-gray-800 px-8">
    <div class="text-2xl">Factorior</div>

    <div class="space-x-12 flex justify-center items-center">
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="{ name: link.to }"
        class="flex justify-center items-center gap-2"
      >
        <component :is="link.icon"></component>
        <span>{{ link.text }}</span>
      </router-link>
    </div>

    <div>
      <button @click="baseStore.resetGame">clear</button>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
.router-link-active {
  @apply text-blue-400;
}
</style>
