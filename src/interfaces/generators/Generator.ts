import Blueprint from "../blueprints/Blueprint";
import Effect from "../effects/Effect";

export default interface Generator {
  blueprint: Blueprint;
  timer: number;
  active: boolean;
  effects: Effect[];
}
