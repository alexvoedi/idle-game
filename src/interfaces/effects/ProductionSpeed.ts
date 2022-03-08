import BaseEffect from "./BaseEffect";
import ItemID from "../../data/items/ItemID";
import EffectType from "../../data/effects/EffectType";

export default interface ProductionSpeed extends BaseEffect {
  type: EffectType.ProductionSpeed;
  item: {
    id: ItemID;
    value: number;
  };
}
