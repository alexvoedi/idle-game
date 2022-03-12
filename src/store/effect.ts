import EffectID from "@/data/effects/EffectID";
import Effect from "@/interfaces/effects/Effect";

export type EffectStore = {
  effects: Effect[];
};

export const useEffectStore = defineStore("effect", {
  state: (): EffectStore => ({
    effects: [],
  }),

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
