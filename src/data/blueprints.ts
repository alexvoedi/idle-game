import Blueprint from "../interfaces/Blueprint";
import Item from "./item";
import { ScienceName } from "./science-tree";

export const baseBlueprints = [
  {
    item: Item.Copper,
    productionTime: 2,
    requirements: {
      sciences: [],
    },
    ingredients: [],
  },
  {
    item: Item.Iron,
    productionTime: 1,
    requirements: {
      sciences: [],
    },
    ingredients: [],
  },
  {
    item: Item.Water,
    productionTime: 1,
    requirements: {
      sciences: [],
    },
    ingredients: [],
  },
];

const blueprints: Blueprint[] = [
  ...baseBlueprints,
  {
    item: Item.CopperWire,
    productionTime: 4,
    requirements: {
      sciences: [],
    },
    ingredients: [
      {
        item: Item.Copper,
        amount: 3,
      },
    ],
  },
  {
    item: Item.Plastic,
    productionTime: 2,
    requirements: {
      sciences: [],
    },
    ingredients: [],
  },
  {
    item: Item.InsulatedWire,
    productionTime: 6,
    requirements: {
      sciences: [ScienceName.Alpha],
    },
    ingredients: [
      {
        item: Item.CopperWire,
        amount: 1,
      },
      {
        item: Item.Plastic,
        amount: 2,
      },
    ],
  },
];

export default blueprints;
