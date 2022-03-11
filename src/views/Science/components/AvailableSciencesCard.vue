<script setup lang="ts">
import { useItem } from "@/composables/useItem";
import ScienceID from "@/data/sciences/ScienceID";
import ItemAmount from "@/interfaces/items/ItemAmount";
import { useInventoryStore } from "@/store/inventory";
import { useScienceStore } from "@/store/science";

const scienceStore = useScienceStore();
const inventoryStore = useInventoryStore();
const { getItem } = useItem();

const columns = ref([
  {
    id: "name",
    text: "Name",
    field: "name",
    headClasses: "text-left whitespace-nowrap",
  },
  {
    id: "researchTime",
    text: "ResearchTime",
    field: "researchTime",
    classes: "text-right",
    bodyClasses: "font-mono",
  },
  {
    id: "requirements",
    text: "Requirements",
    field: "requirements",
    classes: "text-right",
    bodyClasses: "font-mono",
  },
  {
    id: "actions",
    text: "",
    field: "actions",
    classes: "text-right",
    bodyClasses: "font-mono",
  },
]);

const items = computed(() => {
  return scienceStore.availableSciences.filter(
    (science) => !scienceStore.researched.includes(science.id)
  );
});

const researchStarted = (scienceID: ScienceID) => {
  return scienceStore.pausedResearches.some(
    (pausedResearch) => pausedResearch.science.id === scienceID
  );
};

const getItemAmount = (requiredItem: ItemAmount) => {
  const item = inventoryStore.getItem(requiredItem.id);

  if (item) {
    return item.amount;
  } else {
    return 0;
  }
};
</script>

<template>
  <BaseCard class="space-y-8 overflow-hidden">
    <div class="px-8 pt-6">
      <h2 class="text-2xl font-bold">Available Sciences</h2>
    </div>

    <BaseTable :items="items" :columns="columns">
      <template #requirements="{ item }">
        <div
          v-if="item.requirements.items.length > 0 && !researchStarted(item.id)"
        >
          <div
            v-for="(requiredItem, index) in item.requirements.items"
            :key="index"
          >
            <span
              :class="[
                inventoryStore.hasItem(requiredItem)
                  ? 'text-green-500'
                  : 'text-red-500',
              ]"
            >
              {{ getItem(requiredItem.id).name }} * {{ requiredItem.amount }}
            </span>

            <span
              v-if="
                getItemAmount(requiredItem) < requiredItem.amount &&
                !researchStarted(item.id)
              "
            >
              ({{ getItemAmount(requiredItem) }})</span
            >
          </div>
        </div>
        <div v-else>-</div>
      </template>

      <template #actions="{ item }">
        <div class="flex justify-end">
          <button
            @click="scienceStore.startResearch(item)"
            :disabled="
              !researchStarted(item.id) &&
              !inventoryStore.hasItems(item.requirements.items)
            "
            class="flex items-center disabled:opacity-30"
          >
            <icon-mdi-play v-if="researchStarted(item.id)"></icon-mdi-play>
            <icon-fontisto:laboratory v-else></icon-fontisto:laboratory>
          </button>
        </div>
      </template>
    </BaseTable>
  </BaseCard>
</template>

<style></style>
