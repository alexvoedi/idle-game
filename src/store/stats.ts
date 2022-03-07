export type StatsStore = {
  stats: {
    soldItems: number;
    moneyEarned: number;
  };
};

export const useStatsStore = defineStore("stats", {
  state: (): StatsStore => ({
    stats: {
      soldItems: 0,
      moneyEarned: 0,
    },
  }),

  actions: {},

  getters: {},
});
