import Blueprint from "../interfaces/Blueprint";
import { ItemID } from "./item";
import { ScienceID } from "./techtree";

export enum BlueprintID {
  Copper,
  Iron,
  Water,
  Sand,
  Stone,
  Magnetit,
  Magnet,
  CopperWire,
  StoneProbing,
}

export const baseBlueprints: Blueprint[] = [
  {
    id: BlueprintID.Copper,
    items: [
      {
        id: ItemID.Copper,
        amount: 1,
      },
    ],
    productionTime: 4,
    requirements: {
      sciences: [],
    },
    ingredients: [],
  },
  {
    id: BlueprintID.Iron,
    items: [
      {
        id: ItemID.Iron,
        amount: 1,
      },
    ],
    productionTime: 6,
    requirements: {
      sciences: [],
    },
    ingredients: [],
  },
  {
    id: BlueprintID.Water,
    items: [
      {
        id: ItemID.Water,
        amount: 1,
      },
    ],
    productionTime: 1,
    requirements: {
      sciences: [],
    },
    ingredients: [],
  },
  {
    id: BlueprintID.Sand,
    items: [
      {
        id: ItemID.Sand,
        amount: 1,
      },
    ],
    productionTime: 1,
    requirements: {
      sciences: [],
    },
    ingredients: [],
  },
  {
    id: BlueprintID.Stone,
    items: [
      {
        id: ItemID.Stone,
        amount: 1,
      },
    ],
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
    id: BlueprintID.Magnetit,
    items: [
      {
        id: ItemID.Magnetit,
        amount: 1,
      },
    ],
    productionTime: 600,
    requirements: {
      sciences: [ScienceID.Magnetism1],
    },
    ingredients: [],
  },
  {
    id: BlueprintID.Magnet,
    items: [
      {
        id: ItemID.Magnet,
        amount: 1,
      },
    ],
    productionTime: 30,
    requirements: {
      sciences: [ScienceID.Magnetism1],
    },
    ingredients: [
      {
        id: ItemID.Iron,
        amount: 5,
      },
      {
        id: ItemID.Magnetit,
        amount: 3,
      },
    ],
  },
  {
    id: BlueprintID.CopperWire,
    items: [
      {
        id: ItemID.CopperWire,
        amount: 1,
      },
    ],
    productionTime: 4,
    requirements: {
      sciences: [],
    },
    ingredients: [
      {
        id: ItemID.Copper,
        amount: 3,
      },
    ],
  },
  {
    id: BlueprintID.StoneProbing,
    items: [
      {
        id: ItemID.Copper,
        amount: 1,
      },
      {
        id: ItemID.Iron,
        amount: 1,
      },
    ],
    productionTime: 10,
    requirements: {
      sciences: [],
    },
    ingredients: [
      {
        id: ItemID.Stone,
        amount: 10,
      },
    ],
  },
];

export default blueprints;
