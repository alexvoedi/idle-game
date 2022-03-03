import { useInventoryStore } from "./inventory";
import GeneratorItem from "@/interfaces/GeneratorItem";
import blueprints, { baseBlueprints } from "@/blueprints";

export type GeneratorStore = {
  generators: Array<GeneratorItem>;
};

const defaultGenerator: GeneratorStore = {
  generators: baseBlueprints.map((blueprint) => ({ blueprint, timer: 0 })),
};

export const useGeneratorStore = defineStore("generator", {
  state: (): GeneratorStore => defaultGenerator,

  actions: {
    generate(delta: number) {
      const inventoryStore = useInventoryStore();

      this.generators.forEach((generator) => {
        const blueprint = blueprints.find(
          (blueprint) => generator.blueprint.item === blueprint.item
        );

        if (blueprint) {
          const hasRequiredIngredients = blueprint.ingredients.every(
            (ingredient) => {
              const inventoryItem = inventoryStore.inventory.find(
                (item) => item.item === ingredient.item
              );

              if (inventoryItem) {
                return inventoryItem.amount >= ingredient.amount;
              } else {
                return false;
              }
            }
          );

          if (hasRequiredIngredients && generator.timer === 0) {
            generator.timer += delta;

            blueprint.ingredients.forEach((ingredient) => {
              const inventoryItem = inventoryStore.inventory.find(
                (item) => item.item === ingredient.item
              );

              if (inventoryItem) {
                inventoryItem.amount -= ingredient.amount;
              }
            });
          }

          if (generator.timer > 0) {
            generator.timer += delta;

            if (generator.timer >= generator.blueprint.productionTime) {
              generator.timer = 0;

              const inventoryItem = inventoryStore.inventory.find(
                (item) => item.item === generator.blueprint.item
              );

              if (inventoryItem) {
                inventoryItem.amount++;
              } else {
                inventoryStore.inventory.push({
                  item: generator.blueprint.item,
                  amount: 1,
                });
              }
            }
          }
        }
      });
    },
  },

  getters: {},
});
