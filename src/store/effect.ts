import { Effect, EffectName } from "@/data/effects";

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
      if (this.hasEffect(effect.name)) return;

      this.effects.push(effect);
    },

    hasEffect(effectName: EffectName) {
      return this.effects.some((effect) => effect.name === effectName);
    },
  },

  getters: {},
});
