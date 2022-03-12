import Effect from "@/interfaces/effects/Effect";
import EffectID from "@/data/effects/EffectID";
import EffectType from "@/data/effects/EffectType";
import ItemID from "@/data/items/ItemID";
import ScienceID from "@/data/sciences/ScienceID";

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
    id: EffectID.MagneticFieldDetection1,
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
  {
    id: EffectID.WaterProduction1,
    name: "Faster Production",
    type: EffectType.ProductionSpeed,
    requirements: {
      sciences: [ScienceID.WaterCollection1],
    },
    item: {
      id: ItemID.Water,
      value: 1.5,
    },
  },
  {
    id: EffectID.StorageSpace1,
    name: "Higher Storage Space",
    type: EffectType.StorageSpace,
    requirements: {
      sciences: [ScienceID.EfficientStorage1],
    },
    value: 1500,
  },
];

export default effects;
