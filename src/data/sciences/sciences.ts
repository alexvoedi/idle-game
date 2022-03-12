import ItemID from "@/data/items/ItemID";
import ScienceID from "@/data/sciences/ScienceID";
import Science from "../../interfaces/sciences/Science";

const sciences: Science[] = [
  {
    id: ScienceID.CopperProduction1,
    name: "Copper Production 1",
    researchTime: 60,
    requirements: {
      items: [
        {
          id: ItemID.Copper,
          amount: 50,
        },
        {
          id: ItemID.Stone,
          amount: 100,
        },
      ],
      sciences: [],
    },
  },
  {
    id: ScienceID.Magnetism1,
    name: "Magnetism 1",
    researchTime: 300,
    requirements: {
      items: [
        {
          id: ItemID.Iron,
          amount: 100,
        },
        {
          id: ItemID.Copper,
          amount: 50,
        },
      ],
      sciences: [],
    },
  },
  {
    id: ScienceID.StoneProbing1,
    name: "Stone Probing 1",
    researchTime: 180,
    requirements: {
      items: [
        {
          id: ItemID.Iron,
          amount: 20,
        },
        {
          id: ItemID.Copper,
          amount: 20,
        },
      ],
      sciences: [],
    },
  },
  {
    id: ScienceID.Automation1,
    name: "Automation 1",
    researchTime: 300,
    requirements: {
      items: [
        {
          id: ItemID.CopperWire,
          amount: 20,
        },
      ],
      sciences: [],
    },
  },
  {
    id: ScienceID.Agriculture1,
    name: "Agriculture 1",
    researchTime: 60,
    requirements: {
      items: [
        {
          id: ItemID.Water,
          amount: 250,
        },
      ],
      sciences: [],
    },
  },
  {
    id: ScienceID.ClayExtraction1,
    name: "Clay Extraction 1",
    researchTime: 75,
    requirements: {
      items: [
        {
          id: ItemID.Water,
          amount: 50,
        },
        {
          id: ItemID.Stone,
          amount: 75,
        },
        {
          id: ItemID.Iron,
          amount: 20,
        },
      ],
      sciences: [],
    },
  },
  {
    id: ScienceID.Mining1,
    name: "Mining",
    researchTime: 120,
    requirements: {
      items: [
        {
          id: ItemID.Stone,
          amount: 100,
        },
        {
          id: ItemID.Iron,
          amount: 60,
        },
        {
          id: ItemID.Copper,
          amount: 25,
        },
      ],
      sciences: [],
    },
  },
  {
    id: ScienceID.SaltMining1,
    name: "Salt Mining 1",
    researchTime: 120,
    requirements: {
      items: [],
      sciences: [ScienceID.Mining1],
    },
  },
  {
    id: ScienceID.LimeMining1,
    name: "Lime Mining 1",
    researchTime: 60,
    requirements: {
      items: [],
      sciences: [ScienceID.Mining1],
    },
  },
  {
    id: ScienceID.SandMining1,
    name: "Sand Mining 1",
    researchTime: 60,
    requirements: {
      items: [],
      sciences: [ScienceID.Mining1],
    },
  },
  {
    id: ScienceID.Smelting1,
    name: "Smelting 1",
    researchTime: 180,
    requirements: {
      items: [
        {
          id: ItemID.Coal,
          amount: 120,
        },
      ],
      sciences: [ScienceID.Mining1],
    },
  },
  {
    id: ScienceID.Pottery1,
    name: "Pottery 1",
    researchTime: 180,
    requirements: {
      items: [
        {
          id: ItemID.Water,
          amount: 500,
        },
        {
          id: ItemID.Clay,
          amount: 100,
        },
      ],
      sciences: [ScienceID.ClayExtraction1],
    },
  },
  {
    id: ScienceID.WaterCollection1,
    name: "Water Collection 1",
    researchTime: 300,
    requirements: {
      items: [
        {
          id: ItemID.Water,
          amount: 500,
        },
        {
          id: ItemID.Stone,
          amount: 200,
        },
      ],
      sciences: [ScienceID.Automation1],
    },
  },
  {
    id: ScienceID.EfficientStorage1,
    name: "Higher Storage Space",
    researchTime: 240,
    requirements: {
      items: [],
      sciences: [],
    },
  },
];

export default sciences;
