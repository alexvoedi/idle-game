import blueprints from "@/blueprints";
import Blueprint from "@/interfaces/Blueprint";
import Science from "@/interfaces/Science";
import scienceTree, { ScienceName } from "@/science-tree";
import { useInventoryStore } from "./inventory";

type CurrentResearch = {
  science: Science;
  time: number;
};

export type ScienceStore = {
  currentResearch: CurrentResearch | null;
  researched: ScienceName[];
};

const defaultScience: ScienceStore = {
  currentResearch: null,
  researched: [],
};

export const useScienceStore = defineStore("science", {
  state: (): ScienceStore => defaultScience,

  actions: {
    startResearch(science: Science) {
      const inventoryStore = useInventoryStore();

      const hasRequiredItems = science.requirements.items.every(
        (researchItem) => {
          const inventoryItem = inventoryStore.inventory.find(
            (inventoryItem) => inventoryItem.item === researchItem.item
          );

          if (inventoryItem) {
            return inventoryItem.amount >= researchItem.amount;
          }
        }
      );

      if (hasRequiredItems) {
        science.requirements.items.forEach((researchItem) => {
          const inventoryItem = inventoryStore.inventory.find(
            (inventoryItem) => inventoryItem.item === researchItem.item
          );

          if (inventoryItem) {
            inventoryItem.amount -= researchItem.amount;
          }
        });

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
          this.researched.push(this.currentResearch.science.name);

          this.currentResearch = null;
        }
      }
    },
  },

  getters: {
    blueprints: (store) => {
      return blueprints.filter((blueprint) =>
        blueprint.requirements.sciences.every((science) =>
          store.researched.includes(science)
        )
      );
    },

    sciences: (store) => {
      return scienceTree.filter((science) => {
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
