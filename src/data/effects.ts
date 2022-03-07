import { ScienceID } from "@/data/techtree";
import { ItemID } from "./item";

export enum EffectID {
  CopperProduction1,
  Automation1,
  MagneticFieldDetection,
}

export enum EffectType {
  ProductionSpeed,
  MaxGeneratorsCount,
}

interface BaseEffect {
  id: EffectID;
  name: string;
  requirements: {
    sciences: ScienceID[];
  };
}

export interface ProductionSpeed extends BaseEffect {
  type: EffectType.ProductionSpeed;
  item: {
    id: ItemID;
    value: number;
  };
}

export interface MaxGeneratorsCount extends BaseEffect {
  type: EffectType.MaxGeneratorsCount;
  count: number;
}

export type Effect = ProductionSpeed | MaxGeneratorsCount;

const effects: Effect[] = [
  {
    id: EffectID.CopperProduction1,
    name: "Faster Production",
    type: EffectType.ProductionSpeed,
    requirements: {
      sciences: [ScienceID.CopperProduction1],
    },
    item: {
      id: ItemID.Copper,
      value: 1.25,
    },
  },
  {
    id: EffectID.Automation1,
    name: "More Active Generators",
    type: EffectType.MaxGeneratorsCount,
    requirements: {
      sciences: [ScienceID.Automation1],
    },
    count: 2,
  },
  {
    id: EffectID.MagneticFieldDetection,
    name: "More Active Generators",
    type: EffectType.ProductionSpeed,
    requirements: {
      sciences: [ScienceID.Magnetism1],
    },
    item: {
      id: ItemID.Magnetit,
      value: 4,
    },
  },
];

export default effects;
