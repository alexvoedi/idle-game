import EffectType from "@/data/effects/EffectType";
import BaseEffect from "./BaseEffect";

export default interface MaxGeneratorsCount extends BaseEffect {
  type: EffectType.MaxGeneratorsCount;
  count: number;
}
