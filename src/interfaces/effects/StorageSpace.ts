import EffectType from "@/data/effects/EffectType";
import BaseEffect from "./BaseEffect";

export default interface StorageSpace extends BaseEffect {
  type: EffectType.StorageSpace;
  value: number;
}
