<script setup lang="ts">
import ItemID from "@/data/items/ItemID";

const selectedItem = ref<ItemID>();

const selectItem = (itemID: ItemID) => (selectedItem.value = itemID);
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold flex items-center gap-4">
      <icon-ion:ios-stats></icon-ion:ios-stats>
      <span>Statistic</span>
    </h1>

    <div class="grid grid-cols-2 gap-8 min-h-40vh">
      <StatsItemStatsCard @select-item="selectItem"></StatsItemStatsCard>
      <StatsItemStatsChart :itemID="selectedItem"></StatsItemStatsChart>
    </div>
  </div>
</template>

<style></style>
