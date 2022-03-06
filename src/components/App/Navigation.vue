<script setup lang="ts">
import InventoryIcon from "~icons/mdi/sitemap";
import FactoryIcon from "~icons/mdi/factory";
import ScienceIcon from "~icons/ic/round-science";
import EffectsIcon from "~icons/carbon/upgrade";
import StatsIcon from "~icons/ion/ios-stats";
import SellIcon from "~icons/ion/ios-stats";

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
  {
    to: "Effects",
    text: "Effects",
    icon: EffectsIcon,
  },
  {
    to: "Stats",
    text: "Stats",
    icon: StatsIcon,
  },
  {
    to: "Sell",
    text: "Sell",
    icon: SellIcon,
  },
];
</script>

<template>
  <nav class="w-200px flex flex-col items-start bg-true-gray-800">
    <router-link
      v-for="link in links"
      :key="link.to"
      :to="{ name: link.to }"
      class="flex h-12 items-center gap-2 border-b border-transparent px-8 w-full"
      hover="bg-true-gray-700"
    >
      <component :is="link.icon"></component>
      <span>{{ link.text }}</span>
    </router-link>
  </nav>
</template>

<style lang="postcss" scoped>
.router-link-active {
  @apply text-blue-400;
}
</style>
