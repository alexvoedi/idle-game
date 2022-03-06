import { Effect, EffectID } from "@/data/effects";

export type EffectStore = {
  effects: Effect[];
};

const defaultState: EffectStore = {
  effects: [],
};

export const useEffectStore = defineStore("effect", {
  state: (): EffectStore => defaultState,

  actions: {
    addEffects(effects: Effect[]) {
      effects.forEach((effect) => this.addEffect(effect));
    },

    addEffect(effect: Effect) {
      if (this.hasEffect(effect.id)) return;

      this.effects.push(effect);
    },

    hasEffect(effectID: EffectID) {
      return this.effects.some((effect) => effect.id === effectID);
    },
  },

  getters: {},
});
