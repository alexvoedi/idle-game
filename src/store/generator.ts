import { useInventoryStore } from "./inventory";
import { baseBlueprints } from "@/data/blueprints";
import { useEffectStore } from "./effect";
import { Effect, EffectType } from "@/data/effects";
import GeneratorItem from "@/interfaces/GeneratorItem";
import Item from "@/data/item";
import Blueprint from "@/interfaces/Blueprint";

export type GeneratorStore = {
  generators: Array<GeneratorItem>;
};

const defaultState: GeneratorStore = {
  generators: baseBlueprints.map((blueprint) => ({
    blueprint,
    timer: 0,
    active: true,
    effects: [],
  })),
};

export const useGeneratorStore = defineStore("generator", {
  state: (): GeneratorStore => defaultState,

  actions: {
    addGenerators(blueprints: Blueprint[], effects: Effect[] = []) {
      blueprints.forEach((blueprint) => {
        this.generators.push({
          blueprint,
          timer: 0,
          active: false,
          effects,
        });
      });
    },

    generate(delta: number) {
      const inventoryStore = useInventoryStore();

      const activeGenerators = this.generators.filter(
        (generator) => generator.active
      );

      for (const generator of activeGenerators) {
        if (inventoryStore.remainingInventorySpace < 1) continue;

        if (generator.timer === 0) {
          const hasBlueprintIngredients = inventoryStore.hasItems(
            generator.blueprint.ingredients
          );

          if (hasBlueprintIngredients) {
            generator.timer += delta;

            inventoryStore.spendItems(generator.blueprint.ingredients);
          }
        } else {
          generator.timer += delta;

          const totalProductionTime = this.calculateProductionTime(generator);

          if (generator.timer >= totalProductionTime) {
            generator.timer = 0;

            inventoryStore.addItem(generator.blueprint.item);
          }
        }
      }
    },

    calculateProductionTime(generator: GeneratorItem) {
      return generator.effects.reduce((productionTime, effect) => {
        if (effect.type === EffectType.ProductionSpeed) {
          return productionTime / effect.item.value;
        }

        return productionTime;
      }, generator.blueprint.productionTime);
    },
  },

  getters: {},
});
