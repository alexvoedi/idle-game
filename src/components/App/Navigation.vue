<script setup lang="ts">
import InventoryIcon from "~icons/mdi/sitemap";
import FactoryIcon from "~icons/mdi/factory";
import ScienceIcon from "~icons/ic/round-science";
import ToolsIcon from "~icons/mdi/tools";
import EffectsIcon from "~icons/carbon/upgrade";
import StatsIcon from "~icons/ion/ios-stats";
import SaleIcon from "~icons/ic/baseline-attach-money";
import AchievementsIcon from "~icons/mdi/trophy";
import LibraryIcon from "~icons/ion/library";
import JobsIcon from "~icons/mdi/briefcase";
import { useDevStore } from "@/store/dev";

const devStore = useDevStore();

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
    to: "Tools",
    text: "Tools",
    icon: ToolsIcon,
  },
  {
    to: "Jobs",
    text: "Jobs",
    icon: JobsIcon,
  },

  {
    to: "Sale",
    text: "Selling",
    icon: SaleIcon,
  },
  {
    to: "Effects",
    text: "Effects",
    icon: EffectsIcon,
  },
  {
    to: "Achievements",
    text: "Achievements",
    icon: AchievementsIcon,
  },
  {
    to: "Stats",
    text: "Stats",
    icon: StatsIcon,
  },
  {
    to: "Library",
    text: "Library",
    icon: LibraryIcon,
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
        class="router-link"
      >
        <component :is="link.icon"></component>
        <span>{{ link.text }}</span>
      </router-link>
    </div>

    <div class="w-full py-4">
      <router-link
        :to="{ name: 'Dev' }"
        class="router-link"
        v-if="devStore.isDev"
      >
        <icon-mdi-bug></icon-mdi-bug>
        <span>Dev</span>
      </router-link>

      <router-link :to="{ name: 'Game' }" class="router-link">
        <icon-mdi-cog></icon-mdi-cog>
        <span>Game</span>
      </router-link>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
.router-link {
  @apply flex h-12 items-center gap-4 border-b border-transparent px-6 w-full transition font-semibold;
  @apply hover:bg-true-gray-700;
}

.router-link-active {
  @apply text-white bg-indigo-600 hover:bg-indigo-600;
}
</style>
