import { ScienceID } from "@/data/techtree";
import { ItemID } from "./item";

export enum EffectID {
  FastProduction,
}

export enum EffectType {
  ProductionSpeed,
}

interface BaseEffect {
  id: EffectID;
  name: string;
  type: EffectType;
  requirements: {
    sciences: ScienceID[];
  };
}

export interface ProductionSpeed extends BaseEffect {
  item: {
    name: ItemID;
    value: number;
  };
}

export type Effect = ProductionSpeed;

const effects: Effect[] = [
  {
    id: EffectID.FastProduction,
    name: "Faster Production",
    type: EffectType.ProductionSpeed,
    requirements: {
      sciences: [ScienceID.CopperProduction1],
    },
    item: {
      name: ItemID.Copper,
      value: 1.25,
    },
  },
];

export default effects;
