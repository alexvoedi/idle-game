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
    researchTime: 5,
    requirements: {
      items: [
        {
          id: ItemID.Magnet,
          amount: 5,
        },
        {
          id: ItemID.CopperWire,
          amount: 10,
        },
      ],
      sciences: [ScienceID.Magnetism1],
    },
  },
];

export default sciences;
