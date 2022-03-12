import { version } from "../../package.json";
import { useEffectStore } from "./effect";
import { useGeneratorStore } from "./generator";
import { useInventoryStore } from "./inventory";
import { useScienceStore } from "./science";
import { useSaleStore } from "./sale";
import { useStatsStore } from "./stats";
import { useDevStore } from "./dev";
import GameState from "@/interfaces/GameState";
import { useAchievementStore } from "./achievement";

export type BaseStore = {
  gameVersion: string;
  timerID: ReturnType<typeof setInterval> | null;
  timePassed: number;
  running: boolean;
};

export const useBaseStore = defineStore("base", {
  state: (): BaseStore => ({
    gameVersion: version,
    timerID: null,
    timePassed: 0,
    running: true,
  }),

  actions: {
    loadGame(gameState: GameState) {
      const generatorStore = useGeneratorStore();
      const inventoryStore = useInventoryStore();
      const scienceStore = useScienceStore();
      const effectStore = useEffectStore();
      const statsStore = useStatsStore();
      const saleStore = useSaleStore();
      const devStore = useDevStore();
      const achievementStore = useAchievementStore();

      this.$state = gameState.base;
      generatorStore.$state = gameState.generator;
      inventoryStore.$state = gameState.inventory;
      scienceStore.$state = gameState.science;
      effectStore.$state = gameState.effect;
      statsStore.$state = gameState.stats;
      saleStore.$state = gameState.sale;
      achievementStore.$state = gameState.achievement;

      if (devStore.isDev) {
        devStore.$state = gameState.dev;
      }
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

        const devStore = useDevStore();

        const now = Date.now();

        let delta = now - lastUpdate;

        if (devStore.isDev) {
          delta *= devStore.gameSpeed;
        }

        this.update(delta / 1000);

        lastUpdate = now;
      }, 20);
    },

    update(delta: number) {
      const generatorStore = useGeneratorStore();
      const scienceStore = useScienceStore();
      const saleStore = useSaleStore();
      const achievementStore = useAchievementStore();

      generatorStore.generate(delta);
      scienceStore.research(delta);
      saleStore.sellItems();
      achievementStore.updateAchievements();

      this.timePassed += delta;
    },

    resetGame() {
      this.$reset();

      const generatorStore = useGeneratorStore();
      const inventoryStore = useInventoryStore();
      const scienceStore = useScienceStore();
      const effectStore = useEffectStore();
      const statsStore = useStatsStore();
      const saleStore = useSaleStore();
      const devStore = useDevStore();
      const achievementStore = useAchievementStore();

      generatorStore.$reset();
      inventoryStore.$reset();
      scienceStore.$reset();
      effectStore.$reset();
      statsStore.$reset();
      saleStore.$reset();
      achievementStore.$reset();

      if (devStore.isDev) {
        devStore.$reset();
      }
    },

    toggleRunning() {
      this.running = !this.running;
    },
  },

  getters: {},
});
