import Science from "@/interfaces/sciences/Science";
import { useInventoryStore } from "./inventory";
import { useEffectStore } from "./effect";
import { useGeneratorStore } from "./generator";
import ScienceID from "@/data/sciences/ScienceID";
import blueprints from "@/data/blueprints/blueprints";
import effects from "@/data/effects/effects";
import EffectType from "@/data/effects/EffectType";
import sciences from "@/data/sciences/sciences";

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
      return sciences.filter((science) => {
        const generatorStore = useGeneratorStore();

        const hasRequiredSciences = science.requirements.sciences.every(
          (science) => store.researched.includes(science)
        );

        const newBlueprints = blueprints.filter((blueprint) =>
          blueprint.requirements.sciences.includes(science.id)
        );

        const hasRequiredItems = newBlueprints.some((newBlueprint) =>
          generatorStore.generators.every(
            (generator) => generator.blueprint.id !== newBlueprint.id
          )
        );

        const isCurrentlyResearching =
          store.currentResearch?.science.name === science.name;

        return (
          hasRequiredSciences && !isCurrentlyResearching && hasRequiredItems
        );
      });
    },
  },
});
