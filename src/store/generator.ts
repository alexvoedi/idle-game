import { useInventoryStore } from "./inventory";
import { baseBlueprints } from "@/data/blueprints";
import { Effect, EffectType } from "@/data/effects";
import Generator from "@/interfaces/Generator";
import Blueprint from "@/interfaces/Blueprint";

export type GeneratorStore = {
  generators: Array<Generator>;
};

export const useGeneratorStore = defineStore("generator", {
  state: (): GeneratorStore => ({
    generators: baseBlueprints.map((blueprint) => ({
      blueprint,
      timer: 0,
      active: true,
      effects: [],
    })),
  }),

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
          if (generator.blueprint.input) {
            const hasInputItems = inventoryStore.hasItems(
              generator.blueprint.input
            );

            if (hasInputItems) {
              generator.timer += delta;

              inventoryStore.spendItems(generator.blueprint.input);
            }
          } else {
            generator.timer += delta;
          }
        } else {
          generator.timer += delta;

          const totalProductionTime = this.calculateProductionTime(generator);

          if (generator.timer >= totalProductionTime) {
            generator.timer = 0;

            inventoryStore.addItems(generator.blueprint.output);
          }
        }
      }
    },

    calculateProductionTime(generator: Generator) {
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
