import { useEffectStore } from "./effect";
import { useGeneratorStore } from "./generator";
import { useInventoryStore } from "./inventory";
import { useScienceStore } from "./science";
import store from "store2";
import { useStatsStore } from "./stats";
import { useSaleStore } from "./sale";

export type BaseStore = {
  timerID: ReturnType<typeof setInterval> | null;
  timePassed: number;
  running: boolean;
};

export const useBaseStore = defineStore("base", {
  state: (): BaseStore => ({ timerID: null, timePassed: 0, running: true }),

  actions: {
    loadGame(gameState: any) {
      const generatorStore = useGeneratorStore();
      const inventoryStore = useInventoryStore();
      const scienceStore = useScienceStore();
      const effectStore = useEffectStore();
      const statsStore = useStatsStore();

      this.$state = gameState.base;
      generatorStore.$state = gameState.generator;
      inventoryStore.$state = gameState.inventory;
      scienceStore.$state = gameState.science;
      effectStore.$state = gameState.effect;
      statsStore.$state = gameState.stats;
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
      const saleStore = useSaleStore();

      generatorStore.generate(delta);
      scienceStore.research(delta);
      saleStore.sellItems();

      this.timePassed += delta;
    },

    resetGame() {
      this.$reset();

      const generatorStore = useGeneratorStore();
      const inventoryStore = useInventoryStore();
      const scienceStore = useScienceStore();
      const effectStore = useEffectStore();
      const statsStore = useStatsStore();

      generatorStore.$reset();
      inventoryStore.$reset();
      scienceStore.$reset();
      effectStore.$reset();
      statsStore.$reset();
    },

    toggleRunning() {
      this.running = !this.running;
    },
  },

  getters: {},
});
