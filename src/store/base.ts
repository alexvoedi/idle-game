import { useEffectStore } from "./effect";
import { useGeneratorStore } from "./generator";
import { useInventoryStore } from "./inventory";
import { useScienceStore } from "./science";
import store from "store2";

export type BaseStore = {
  timerID: ReturnType<typeof setInterval> | null;
  timePassed: number;
  running: boolean;
};

export const useBaseStore = defineStore("base", {
  state: (): BaseStore => ({ timerID: null, timePassed: 0, running: true }),

  actions: {
    loadGame() {
      const gameState = store.get("save-game");

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

    unloadGame() {
      if (this.timerID) {
        clearInterval(this.timerID);
      }
    },

    runGame() {
      let lastUpdate = Date.now();

      this.timerID = setInterval(() => {
        if (!this.running) return;

        const now = Date.now();
        const delta = now - lastUpdate;

        this.update(delta / 1000);

        lastUpdate = now;
      }, 20);
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
