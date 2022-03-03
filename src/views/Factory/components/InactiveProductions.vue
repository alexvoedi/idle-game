<script setup lang="ts">
import { useGeneratorStore } from "@/store/generator";
import { useScienceStore } from "@/store/science";

const scienceStore = useScienceStore();
const generatorStore = useGeneratorStore();

const activeBlueprints = computed(() => {
  return generatorStore.generators.map((generator) => generator.blueprint);
});

const inactiveBlueprints = computed(() => {
  return scienceStore.blueprints.filter(
    (blueprint) =>
      !activeBlueprints.value.some(
        (activeBlueprint) => activeBlueprint.item === blueprint.item
      )
  );
});

const toggleProduction = (blueprint: Blueprint) => {
  const generatorIndex = generatorStore.generators.findIndex(
    (generator) => generator.blueprint.item === blueprint.item
  );

  if (generatorIndex > -1) {
    generatorStore.generators.splice(generatorIndex, 1);
  } else {
    generatorStore.generators.push({
      blueprint,
      timer: 0,
    });
  }
};
</script>

<template>
  <BaseCard>
    <h3 class="text-2xl font-bold">Inactive Productions</h3>

    <table v-if="inactiveBlueprints.length > 0" class="w-full">
      <thead>
        <tr>
          <th class="text-left">Blueprint</th>
          <th class="text-right w-min-32">Ingredients</th>
          <th>Production Time</th>
          <th>Start Production</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(blueprint, index) in inactiveBlueprints" :key="index">
          <td>{{ blueprint.item }}</td>
          <td class="font-mono text-right whitespace-nowrap">
            <div
              v-for="(ingredient, index) in blueprint.ingredients"
              :key="index"
            >
              {{ ingredient.item }} * {{ ingredient.amount }}
            </div>
          </td>
          <td class="font-mono text-right">{{ blueprint.productionTime }}</td>
          <td class="text-center">
            <button
              @click="toggleProduction(blueprint)"
              class="border px-2 py-1 rounded-full"
            >
              start
            </button>
          </td>
        </tr>
      </tbody>
    </table></BaseCard
  >
</template>

<style></style>
