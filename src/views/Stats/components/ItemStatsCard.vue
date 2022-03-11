<script setup lang="ts">
import { useItem } from "@/composables/useItem";
import { useStatsStore } from "@/store/stats";

const statsStore = useStatsStore();
const { getItem } = useItem();

const columns = ref([
  { id: "name", text: "Item", field: "name", headClasses: "text-left" },
  {
    id: "produced",
    text: "Produced",
    field: "produced",
    classes: "text-right",
    bodyClasses: "font-mono",
  },
]);

const items = computed(() => {
  return statsStore.stats.items.map((item) => ({
    ...item,
    name: getItem(item.id).name,
  }));
});
</script>

<template>
  <BaseCard class="space-y-8 overflow-hidden">
    <div class="px-8 pt-6">
      <h2 class="text-2xl font-bold">Item Stats</h2>
    </div>

    <BaseTable :items="items" :columns="columns"></BaseTable>
  </BaseCard>
</template>

<style></style>
