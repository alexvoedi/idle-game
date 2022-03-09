<script setup lang="ts">
import items from "@/data/items/items";

const sortedItems = computed(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
});

const columns = ref([
  { id: "name", text: "Item", field: "name", headClasses: "text-left" },
  {
    id: "saleValue",
    text: "Sale Value",
    field: "saleValue",
    classes: "text-right",
    bodyClasses: "font-mono",
  },
]);
</script>

<template>
  <BaseCard class="h-60vh overflow-hidden flex flex-col">
    <h2 class="px-8 py-4 text-2xl font-bold">Items</h2>

    <div class="flex-grow overflow-y-scroll">
      <BaseTable :columns="columns" :items="sortedItems">
        <template #saleValue="{ item }">
          {{ item.saleValue.toFixed(2) }}
        </template>
      </BaseTable>
    </div>
  </BaseCard>
</template>

<style></style>
