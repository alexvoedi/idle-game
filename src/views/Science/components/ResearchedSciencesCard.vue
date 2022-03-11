<script setup lang="ts">
import sciences from "@/data/sciences/sciences";
import { useScienceStore } from "@/store/science";

const scienceStore = useScienceStore();

const columns = ref([
  {
    id: "name",
    text: "Name",
    field: "name",
    headClasses: "text-left whitespace-nowrap",
  },
]);

const items = computed(() =>
  scienceStore.researched.map((researchedScienceID) => {
    return sciences.find((science) => science.id === researchedScienceID);
  })
);
</script>

<template>
  <BaseCard class="space-y-8 overflow-hidden">
    <div class="px-8 pt-6">
      <h2 class="text-2xl font-bold">Researched Sciences</h2>
    </div>

    <BaseTable :items="items" :columns="columns"> </BaseTable>
  </BaseCard>
</template>

<style></style>
