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
  {
    id: BlueprintID.Wheat,
    productionTime: 600,
    requirements: {
      sciences: [ScienceID.Agriculture1],
    },
    input: [
      {
        id: ItemID.Water,
        amount: 50,
      },
    ],
    output: [
      {
        id: ItemID.Wheat,
        amount: 500,
      },
    ],
  },
  {
    id: BlueprintID.Clay,
    productionTime: 4,
    requirements: {
      sciences: [ScienceID.ClayExtraction1],
    },
    input: [
      {
        id: ItemID.Water,
        amount: 1,
      },
      {
        id: ItemID.Stone,
        amount: 1,
      },
    ],
    output: [
      {
        id: ItemID.Clay,
        amount: 2,
      },
    ],
  },
  {
    id: BlueprintID.Coal,
    productionTime: 3,
    requirements: {
      sciences: [ScienceID.Mining1],
    },
    output: [
      {
        id: ItemID.Coal,
        amount: 1,
      },
    ],
  },
  {
    id: BlueprintID.Salt,
    productionTime: 10,
    requirements: {
      sciences: [ScienceID.SaltMining1],
    },
    input: [
      {
        id: ItemID.Water,
        amount: 10,
      },
    ],
    output: [
      {
        id: ItemID.Salt,
        amount: 3,
      },
    ],
  },
  {
    id: BlueprintID.Bread,
    productionTime: 45,
    requirements: {
      sciences: [ScienceID.Agriculture1, ScienceID.SaltMining1],
    },
    input: [
      {
        id: ItemID.Salt,
        amount: 3,
      },
      {
        id: ItemID.Wheat,
        amount: 40,
      },
      {
        id: ItemID.Water,
        amount: 30,
      },
    ],
    output: [
      {
        id: ItemID.Bread,
        amount: 1,
      },
    ],
  },
  {
    id: BlueprintID.Lime,
    productionTime: 3,
    requirements: {
      sciences: [ScienceID.LimeMining1],
    },
    output: [
      {
        id: ItemID.Lime,
        amount: 1,
      },
    ],
  },
  {
    id: BlueprintID.Quartz,
    productionTime: 3,
    requirements: {
      sciences: [ScienceID.LimeMining1],
    },
    input: [
      {
        id: ItemID.Sand,
        amount: 2,
      },
    ],
    output: [
      {
        id: ItemID.Quartz,
        amount: 1,
      },
    ],
  },
  {
    id: BlueprintID.Cement,
    productionTime: 15,
    requirements: {
      sciences: [],
    },
    input: [
      {
        id: ItemID.Clay,
        amount: 3,
      },
      {
        id: ItemID.Sand,
        amount: 3,
      },
    ],
    output: [
      {
        id: ItemID.Cement,
        amount: 1,
      },
    ],
  },
  {
    id: BlueprintID.ElectricCoil,
    productionTime: 8,
    requirements: {
      sciences: [ScienceID.BasicElectric1],
    },
    input: [
      {
        id: ItemID.Iron,
        amount: 1,
      },
      {
        id: ItemID.CopperWire,
        amount: 2,
      },
    ],
    output: [
      {
        id: ItemID.ElectricCoil,
        amount: 1,
      },
    ],
  },
  {
    id: BlueprintID.ElectricalConnector,
    productionTime: 3,
    requirements: {
      sciences: [ScienceID.BasicElectric1],
    },
    input: [
      {
        id: ItemID.CopperWire,
        amount: 5,
      },
      {
        id: ItemID.Plastic,
        amount: 1,
      },
    ],
    output: [
      {
        id: ItemID.ElectricalConnector,
        amount: 1,
      },
    ],
  },
  {
    id: BlueprintID.PetroleumRefining,
    productionTime: 8,
    requirements: {
      sciences: [ScienceID.BasicElectric1],
    },
    input: [
      {
        id: ItemID.Petroleum,
        amount: 10,
      },
      {
        id: ItemID.Water,
        amount: 5,
      },
    ],
    output: [
      {
        id: ItemID.HeavyOil,
        amount: 2,
      },
      {
        id: ItemID.LightOil,
        amount: 4,
      },
      {
        id: ItemID.Methane,
        amount: 7,
      },
      {
        id: ItemID.Coke,
        amount: 2,
      },
    ],
  },
];

export default researchedBlueprints;
