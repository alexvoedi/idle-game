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

      const productionTime = generatorStore.calculateProductionTime(generator);

      return {
        generator,
        productionTime: productionTime.toFixed(2),
        progress: generator.timer / productionTime,
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
    id: "progress",
    text: "",
    field: "progress",
    classes: "w-10",
  },
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
    classes: "text-right",
    bodyClasses: "font-mono",
  },
  {
    id: "productionTime",
    text: "Production Time",
    field: "productionTime",
    classes: "text-right",
    bodyClasses: "font-mono",
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
  <BaseCard class="space-y-8 overflow-hidden">
    <div class="px-8 pt-6">
      <h2 class="text-2xl font-bold">Inactive Productions</h2>
    </div>

    <BaseTable :items="items" :columns="columns">
      <template #progress="{ item }">
        <FactoryProgressCircle
          :progress="item.progress"
        ></FactoryProgressCircle>
      </template>

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
