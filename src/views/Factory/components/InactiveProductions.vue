<script setup lang="ts">
import { useItem } from "@/composables/useItem";
import { useGeneratorStore } from "@/store/generator";

const generatorStore = useGeneratorStore();
const { getItem } = useItem();

const items = computed(() => {
  return generatorStore.generators
    .filter((generator) => !generator.active)
    .map((generator) => {
      const { output, input } = generator.blueprint;

      const productionTime = generatorStore
        .calculateProductionTime(generator)
        .toFixed(2);

      return {
        generator,
        productionTime,
        output: output.map((item) => ({
          name: getItem(item.id).name,
          amount: item.amount,
        })),
        input: input?.map((item) => ({
          name: getItem(item.id).name,
          amount: item.amount,
        })),
      };
    });
});

const columns = ref([
  {
    id: "output",
    text: "Output",
    field: "output",
    classes: "text-left font-mono",
  },
  {
    id: "input",
    text: "Input",
    field: "input",
    bodyClasses: "text-right font-mono",
  },
  {
    id: "productionTime",
    text: "",
    field: "productionTime",
    bodyClasses: "text-right font-mono",
  },
  {
    id: "actions",
    text: "",
    field: "actions",
    bodyClasses: "text-right",
  },
]);
</script>

<template>
  <BaseCard class="space-y-4 overflow-hidden">
    <h2 class="text-2xl font-bold px-6 pt-6 pb-2">Inactive Productions</h2>

    <BaseTable :items="items" :columns="columns">
      <template #output="{ item }">
        <div v-for="(output, index) in item.output" :key="index" class="">
          <span>{{ output.name }}</span
          ><span v-if="output.amount > 1"> * {{ output.amount }}</span>
        </div>
      </template>

      <template #input="{ item }">
        <div v-for="(input, index) in item.input" :key="index">
          {{ input.name }} * {{ input.amount }}
        </div>
      </template>

      <template #actions="{ item }">
        <div class="flex justify-end">
          <button
            @click="generatorStore.setGeneratorActive(item.generator, true)"
            class="flex items-center"
          >
            <icon-mdi-hammer></icon-mdi-hammer>
          </button>
        </div>
      </template>
    </BaseTable>
  </BaseCard>
</template>

<style lang="postcss" scoped>
table thead tr {
  @apply bg-true-gray-900;
}

table thead tr th,
table tbody tr td {
  @apply px-4 py-2;
}

table tbody tr:nth-child(odd) {
  @apply bg-true-gray-700;
}
</style>
