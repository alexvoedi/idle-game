<script setup lang="ts">
import { useItem } from "@/composables/useItem";
import { useInventoryStore } from "@/store/inventory";
import { useScienceStore } from "@/store/science";
import ProgressBar from "@/components/Base/ProgressBar.vue";

const scienceStore = useScienceStore();
const inventoryStore = useInventoryStore();
const { getItem } = useItem();

const tableData = computed(() => {
  return scienceStore.availableSciences.filter(
    (science) => !scienceStore.researched.includes(science.id)
  );
});
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold flex items-center gap-4">
      <icon-ic:round-science></icon-ic:round-science>
      <span>Science</span>
    </h1>

    <ScienceCurrentResearchCard
      v-if="scienceStore.currentResearch"
    ></ScienceCurrentResearchCard>

    <BaseCard class="overflow-hidden">
      <table class="w-full">
        <thead>
          <tr>
            <th class="text-left whitespace-nowrap">Name</th>
            <th class="text-right">Research Time</th>
            <th class="text-right">Requirements</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(science, index) in tableData" :key="index">
            <td>{{ science.name }}</td>
            <td class="text-right font-mono">{{ science.researchTime }}</td>
            <td class="text-right font-mono">
              <div
                v-for="(item, index) in science.requirements.items"
                :key="index"
              >
                {{ getItem(item.id).name }} * {{ item.amount }}
              </div>
            </td>
            <td class="text-center">
              <BaseButton
                @click="scienceStore.startResearch(science)"
                :disabled="!inventoryStore.hasItems(science.requirements.items)"
              >
                <icon-fontisto:laboratory></icon-fontisto:laboratory>
              </BaseButton>
            </td>
          </tr>
        </tbody>
      </table>
    </BaseCard>
  </div>
</template>

<style lang="postcss" scoped>
table thead tr {
  @apply bg-true-gray-900;
}

table thead tr th,
table tbody tr td {
  @apply px-8 py-2;
}

table tbody tr:nth-child(odd) {
  @apply bg-true-gray-700;
}
</style>
