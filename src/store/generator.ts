import { useInventoryStore } from "./inventory";
import Generator from "@/interfaces/generators/Generator";
import Blueprint from "@/interfaces/blueprints/Blueprint";
import baseBlueprints from "@/data/blueprints/baseBlueprints";
import Effect from "@/interfaces/effects/Effect";
import EffectType from "@/data/effects/EffectType";
import { useStatsStore } from "./stats";

export type GeneratorStore = {
  generators: Array<Generator>;
  maxActiveGenerators: number;
  effects: Effect[];
};

export const useGeneratorStore = defineStore("generator", {
  state: (): GeneratorStore => ({
    generators: baseBlueprints.map((blueprint) => ({
      blueprint,
      timer: 0,
      active: false,
      effects: [],
    })),
    maxActiveGenerators: 4,
    effects: [],
  }),

  actions: {
    setGeneratorActive(generator: Generator, isActive: boolean) {
      if (isActive) {
        if (this.activeGeneratorCount < this.maxActiveGenerators) {
          generator.active = isActive;
        }
      } else {
        generator.active = isActive;
      }
    },

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

            const statsStore = useStatsStore();
            generator.blueprint.output.forEach((output) =>
              statsStore.produceItem(output)
            );
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

  getters: {
    activeGeneratorCount: (state) => {
      return state.generators.filter((generator) => generator.active).length;
    },
  },
});
