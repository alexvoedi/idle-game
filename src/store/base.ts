import { useEffectStore } from "./effect";
import { useGeneratorStore } from "./generator";
import { useInventoryStore } from "./inventory";
import { useScienceStore } from "./science";
import store from "store2";

export type BaseStore = {
  timePassed: number;
  running: boolean;
};

export const useBaseStore = defineStore("base", {
  state: (): BaseStore => ({ timePassed: 0, running: true }),

  actions: {
    loadGame() {
      const gameState = store.get("alexvoedi-idle-game");

      if (!gameState) return;

      const generatorStore = useGeneratorStore();
      const inventoryStore = useInventoryStore();
      const scienceStore = useScienceStore();
      const effectStore = useEffectStore();

      this.$state = gameState.base;
      generatorStore.$state = gameState.generator;
      inventoryStore.$state = gameState.inventory;
      scienceStore.$state = gameState.science;
      effectStore.$state = gameState.effect;
    },

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

    toggleRunning() {
      this.running = !this.running;
    },
  },

  getters: {},
});
