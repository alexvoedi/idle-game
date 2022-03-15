import GameState from "../GameState";

export default interface Job {
  id: number;
  name: string;
  description: string;
  checkConditition: (gameState: GameState) => boolean;
}
