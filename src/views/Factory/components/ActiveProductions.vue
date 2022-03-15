<script setup lang="ts">
import { useGeneratorStore } from "@/store/generator";
import { useItem } from "@/composables/useItem";
import { useInventoryStore } from "@/store/inventory";
import ItemID from "@/data/items/ItemID";

const generatorStore = useGeneratorStore();
const inventoryStore = useInventoryStore();
const { getItem } = useItem();

const items = computed(() => {
  return generatorStore.generators
    .filter((generator) => generator.active)
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
        input: input?.map((item) => {
          const inventoryItem = inventoryStore.getItem(item.id);

          if (inventoryItem) {
            console.log(
              output,
              item.amount,
              inventoryItem.amount,
              inventoryItem.amount >= item.amount
            );
          }

          return {
            name: getItem(item.id).name,
            amount: item.amount,
            hasEnough: inventoryItem
              ? inventoryItem.amount >= item.amount
              : false,
          };
        }),
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
    classes: "text-right font-mono",
  },
  {
    id: "input",
    text: "Input",
    field: "input",
    classes: "text-right",
    headerClasses: "text-center",
    bodyClasses: "font-mono",
  },
  {
    id: "productionTime",
    text: "",
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
      <h2 class="text-2xl font-bold">Active Productions</h2>
    </div>

    <BaseTable :items="items" :columns="columns">
      <template #productionTime-header>
        <icon-mdi-clock class="ml-auto"></icon-mdi-clock>
      </template>

      <template #progress="{ item }">
        <FactoryProgressCircle
          :progress="item.progress"
        ></FactoryProgressCircle>
      </template>

      <template #output="{ item }">
        <div
          v-for="(output, index) in item.output"
          :key="index"
          class="grid grid-cols-[4fr,1fr] gap-4"
        >
          <div class="text-right">
            {{ output.name }}
          </div>

          <div class="text-right">
            {{ output.amount }}
          </div>
        </div>
      </template>

      <template #input="{ item }">
        <div v-for="(input, index) in item.input" :key="index">
          <div
            :class="[input.hasEnough ? 'text-green-500' : 'text-red-500']"
            class="grid grid-cols-[4fr,1fr] gap-4"
          >
            <div class="text-right">
              {{ input.name }}
            </div>

            <div class="text-right">
              {{ input.amount }}
            </div>
          </div>
        </div>
      </template>

      <template #actions="{ item }">
        <div class="flex justify-end">
          <button
            @click="generatorStore.setGeneratorActive(item.generator, false)"
            class="flex items-center"
          >
            <icon-mdi-close></icon-mdi-close>
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
