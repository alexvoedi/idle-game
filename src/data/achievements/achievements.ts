import Achievement from "@/interfaces/achievements/Achievement";
import GameState from "@/interfaces/GameState";
import AchievementID from "./AchievementID";

const achievements: Achievement[] = [
  {
    id: AchievementID.Item1,
    name: "I found something!",
    description: "Produce an item",
    icon: "✨",
    checkCondition: (gameState: GameState) => {
      return gameState.stats.stats.items.length > 0;
    },
  },
  {
    id: AchievementID.Item2,
    name: "I made this.",
    description: "Produce 1,000 items.",
    icon: "✨",
    checkCondition: (gameState: GameState) => {
      return gameState.stats.stats.items.length >= 1_000;
    },
  },
  {
    id: AchievementID.Item3,
    name: "Persistance",
    description: "Produce 1,000,000 items.",
    icon: "✨",
    checkCondition: (gameState: GameState) => {
      return gameState.stats.stats.items.length >= 1_000_000;
    },
  },
  {
    id: AchievementID.Item4,
    name: "These machines won't get old.",
    description: "Produce 1,000,000,000 items.",
    icon: "✨",
    checkCondition: (gameState: GameState) => {
      return gameState.stats.stats.items.length >= 1_000_000_000;
    },
  },
  {
    id: AchievementID.Science1,
    name: "I am a scientist now!",
    description: "Finish researching a science.",
    icon: "🥼",
    checkCondition: (gameState: GameState) => {
      return gameState.science.researched.length > 0;
    },
  },
  {
    id: AchievementID.Selling1,
    name: "My first dollar.",
    description: "Sell your first item.",
    icon: "💸",
    checkCondition: (gameState: GameState) => {
      return gameState.stats.stats.items.some((item) => item.sold > 0);
    },
  },
];

export default achievements;
