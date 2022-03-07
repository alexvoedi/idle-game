import blueprints from "@/data/blueprints";
import Science from "@/interfaces/Science";
import techTree, { ScienceID } from "@/data/techtree";
import { useInventoryStore } from "./inventory";
import effects, { EffectType } from "@/data/effects";
import { useEffectStore } from "./effect";
import { useGeneratorStore } from "./generator";

type CurrentResearch = {
  science: Science;
  time: number;
};

export type ScienceStore = {
  currentResearch: CurrentResearch | null;
  researched: ScienceID[];
};

export const useScienceStore = defineStore("science", {
  state: (): ScienceStore => ({ currentResearch: null, researched: [] }),

  actions: {
    startResearch(science: Science) {
      const inventoryStore = useInventoryStore();

      const hasRequiredItems = inventoryStore.hasItems(
        science.requirements.items
      );

      if (hasRequiredItems) {
        inventoryStore.spendItems(science.requirements.items);

        this.currentResearch = {
          science,
          time: 0,
        };
      }
    },

    research(delta: number) {
      if (this.currentResearch) {
        this.currentResearch.time += delta;

        if (
          this.currentResearch.time >= this.currentResearch.science.researchTime
        ) {
          this.finishResearch(this.currentResearch.science);
        }
      }
    },

    finishResearch(science: Science) {
      this.researched.push(science.id);

      this.loadNewGenerators(science);
      this.loadNewEffects(science);

      this.currentResearch = null;
    },

    loadNewGenerators(science: Science) {
      const generatorStore = useGeneratorStore();

      const newBlueprints = blueprints.filter((blueprint) =>
        blueprint.requirements.sciences.includes(science.id)
      );

      generatorStore.addGenerators(newBlueprints);
    },

    loadNewEffects(science: Science) {
      const generatorStore = useGeneratorStore();
      const effectStore = useEffectStore();

      const newEffects = effects.filter((effect) =>
        effect.requirements.sciences.includes(science.id)
      );

      effectStore.addEffects(newEffects);
      newEffects.forEach((effect) => {
        if (effect.type === EffectType.ProductionSpeed) {
          const generator = generatorStore.generators.find((generator) =>
            generator.blueprint.output.every(
              (outputItem) => outputItem.id === effect.item.id
            )
          );

          if (generator) {
            generator.effects.push(effect);
          }
        } else if (effect.type === EffectType.MaxGeneratorsCount) {
          generatorStore.maxActiveGenerators += effect.count;
        }
      });
    },
  },

  getters: {
    availableSciences: (store) => {
      return techTree.filter((science) => {
        const hasRequiredSciences = science.requirements.sciences.every(
          (science) => store.researched.includes(science)
        );

        const isCurrentlyResearching =
          store.currentResearch?.science.name === science.name;

        return hasRequiredSciences && !isCurrentlyResearching;
      });
    },
  },
});
