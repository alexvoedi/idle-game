import Blueprint from "@/interfaces/blueprints/Blueprint";
import BlueprintID from "@/data/blueprints/BlueprintID";
import ItemID from "@/data/items/ItemID";
import ScienceID from "@/data/sciences/ScienceID";

const researchedBlueprints: Blueprint[] = [
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

export default researchedBlueprints;
