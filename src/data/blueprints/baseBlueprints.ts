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
];

export default baseBlueprints;
