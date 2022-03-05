import { useEffectStore } from "./effect";
import { useGeneratorStore } from "./generator";
import { useInventoryStore } from "./inventory";
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

      this.timePassed += delta;
    },

    resetGame() {
      this.$reset();

      const generatorStore = useGeneratorStore();
      const inventoryStore = useInventoryStore();
      const scienceStore = useScienceStore();
      const effectStore = useEffectStore();

      generatorStore.$reset();
      inventoryStore.$reset();
      scienceStore.$reset();
      effectStore.$reset();
    },
  },

  getters: {},
});
