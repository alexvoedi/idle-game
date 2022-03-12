import AchievementID from "@/data/achievements/AchievementID";
import GameState from "../GameState";

export default interface Achievement {
  id: AchievementID;
  name: string;
  description: string;
  icon: string;
  checkCondition: (gameState: GameState) => boolean;
  date?: Date;
}
