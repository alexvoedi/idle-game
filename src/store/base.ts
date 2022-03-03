import { useGeneratorStore } from "./generator";
import { useScienceStore } from "./science";

export type BaseStore = {
  timePassed: number;
};

const defaultBase = {
  timePassed: 0,
};

export const useBaseStore = defineStore("base", {
  state: (): BaseStore => defaultBase,

  actions: {
    update(delta: number) {
      const generatorStore = useGeneratorStore();
      const scienceStore = useScienceStore();

      generatorStore.generate(delta);
      scienceStore.research(delta);
    },
  },

  getters: {},
});
