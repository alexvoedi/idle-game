import Blueprint from "@/interfaces/blueprints/Blueprint";
import BlueprintID from "@/data/blueprints/BlueprintID";
import ItemID from "@/data/items/ItemID";

const baseBlueprints: Blueprint[] = [
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
    id: BlueprintID.Pipe,
    productionTime: 5,
    requirements: {
      sciences: [],
    },
    input: [
      {
        id: ItemID.Copper,
        amount: 5,
      },
    ],
    output: [
      {
        id: ItemID.Pipe,
        amount: 3,
      },
    ],
  },
];

export default baseBlueprints;
