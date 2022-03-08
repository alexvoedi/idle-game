<script setup lang="ts">
import InventoryIcon from "~icons/mdi/sitemap";
import FactoryIcon from "~icons/mdi/factory";
import ScienceIcon from "~icons/ic/round-science";
import EffectsIcon from "~icons/carbon/upgrade";
import StatsIcon from "~icons/ion/ios-stats";
import SaleIcon from "~icons/ion/ios-stats";

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
    to: "Sale",
    text: "Sale",
    icon: SaleIcon,
  },
];
</script>

<template>
  <nav
    class="w-240px flex flex-col items-start justify-between bg-true-gray-800"
  >
    <div class="w-full py-4">
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="{ name: link.to }"
        class="flex h-12 items-center gap-4 border-b border-transparent px-6 w-full"
        hover="bg-true-gray-700"
      >
        <component :is="link.icon"></component>
        <span>{{ link.text }}</span>
      </router-link>
    </div>

    <div class="w-full py-4">
      <router-link
        :to="{ name: 'Game' }"
        class="flex h-12 items-center gap-4 border-b border-transparent px-6 w-full"
        hover="bg-true-gray-700"
      >
        <icon-mdi-cog></icon-mdi-cog>
        <span>Game</span>
      </router-link>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
.router-link-active {
  @apply text-blue-400;
}
</style>
