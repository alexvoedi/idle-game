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
    productionTime: 4,
    requirements: {
      sciences: [],
    },
    output: [
      {
        id: ItemID.Copper,
        amount: 1,
      },
    ],
  },
  {
    id: BlueprintID.Iron,
    productionTime: 6,
    requirements: {
      sciences: [],
    },
    output: [
      {
        id: ItemID.Iron,
        amount: 1,
      },
    ],
  },
  {
    id: BlueprintID.Water,
    productionTime: 1,
    requirements: {
      sciences: [],
    },
    output: [
      {
        id: ItemID.Water,
        amount: 1,
      },
    ],
  },
  {
    id: BlueprintID.Sand,
    productionTime: 1,
    requirements: {
      sciences: [],
    },
    output: [
      {
        id: ItemID.Sand,
        amount: 1,
      },
    ],
  },
  {
    id: BlueprintID.Stone,
    productionTime: 1,
    requirements: {
      sciences: [],
    },
    output: [
      {
        id: ItemID.Stone,
        amount: 1,
      },
    ],
  },
];

const blueprints: Blueprint[] = [
  ...baseBlueprints,
  {
    id: BlueprintID.Magnetit,
    productionTime: 600,
    requirements: {
      sciences: [ScienceID.Magnetism1],
    },
    output: [
      {
        id: ItemID.Magnetit,
        amount: 1,
      },
    ],
  },
  {
    id: BlueprintID.Magnet,
    productionTime: 30,
    requirements: {
      sciences: [ScienceID.Magnetism1],
    },
    input: [
      {
        id: ItemID.Iron,
        amount: 5,
      },
      {
        id: ItemID.Magnetit,
        amount: 3,
      },
    ],
    output: [
      {
        id: ItemID.Magnet,
        amount: 1,
      },
    ],
  },
  {
    id: BlueprintID.CopperWire,
    productionTime: 4,
    requirements: {
      sciences: [],
    },
    input: [
      {
        id: ItemID.Copper,
        amount: 3,
      },
    ],
    output: [
      {
        id: ItemID.CopperWire,
        amount: 1,
      },
    ],
  },
  {
    id: BlueprintID.StoneProbing,
    productionTime: 10,
    requirements: {
      sciences: [ScienceID.StoneProbing1],
    },
    input: [
      {
        id: ItemID.Stone,
        amount: 15,
      },
    ],
    output: [
      {
        id: ItemID.Copper,
        amount: 1,
      },
      {
        id: ItemID.Iron,
        amount: 1,
      },
    ],
  },
];

export default blueprints;
