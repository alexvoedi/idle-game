<script setup lang="ts">
import Blueprint from "@/interfaces/Blueprint";
import { useGeneratorStore } from "@/store/generator";

const generatorStore = useGeneratorStore();

const activeBlueprints = computed(() => {
  return generatorStore.generators.map((generator) => generator.blueprint);
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
    <h3 class="text-2xl font-bold">Active Productions</h3>

    <table v-if="activeBlueprints.length > 0" class="w-full">
      <thead>
        <tr>
          <th class="text-left">Blueprint</th>
          <th class="text-right w-min-32">Ingredients</th>
          <th>Production Time</th>
          <th>Stop Production</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(blueprint, index) in activeBlueprints" :key="index">
          <td>{{ blueprint.item }}</td>
          <td class="font-mono text-right">
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
              stop
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </BaseCard>
</template>

<style></style>
