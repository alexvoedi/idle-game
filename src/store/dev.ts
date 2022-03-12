export type DevStore = {
  gameSpeed: number;
};

export const useDevStore = defineStore("dev", {
  state: (): DevStore => ({
    gameSpeed: 1,
  }),

  actions: {},

  getters: {
    isDev: () => {
      return import.meta.env.DEV;
    },
  },
});
