import achievements from "@/data/achievements/achievements";
import Achievement from "@/interfaces/achievements/Achievement";
import GameState from "@/interfaces/GameState";
import pinia from "@/plugins/pinia";

export type AchievementStore = {
  achievements: Achievement[];
};

export const useAchievementStore = defineStore("achievement", {
  state: (): AchievementStore => ({
    achievements: [],
  }),

  actions: {
    updateAchievements() {
      const gameState = pinia.state.value as unknown as GameState;

      this.ungainedAchievements.forEach((achievement) => {
        const conditionsMet = achievement.checkCondition(gameState);

        if (conditionsMet) {
          this.achievements.push({
            ...achievement,
            date: new Date(),
          });
        }
      });
    },
  },

  getters: {
    ungainedAchievements: (state) => {
      return achievements.filter(
        (gainedAchievements) =>
          !state.achievements.some(
            (achievement) => gainedAchievements.id === achievement.id
          )
      );
    },
  },
});
