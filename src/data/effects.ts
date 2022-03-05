import { ScienceName } from "@/data/science-tree";
import Blueprint from "@/interfaces/Blueprint";
import Item from "./item";

export enum EffectName {
  FastProduction = "Faster Production",
}

export enum EffectType {
  ProductionSpeed,
}

interface BaseEffect {
  name: EffectName;
  type: EffectType;
  requirements: {
    sciences: ScienceName[];
  };
}

export interface ProductionSpeed extends BaseEffect {
  item: {
    name: Item;
    value: number;
  };
}

export type Effect = ProductionSpeed;

const effects: Effect[] = [
  {
    name: EffectName.FastProduction,
    type: EffectType.ProductionSpeed,
    requirements: {
      sciences: [ScienceName.Alpha],
    },
    item: {
      name: Item.Copper,
      value: 1.25,
    },
  },
];

export default effects;
