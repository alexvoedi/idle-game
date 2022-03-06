import Science from "../interfaces/Science";
import { ItemID } from "./item";

export enum ScienceID {
  CopperProduction1,
  Magnetism1,
  StoneProbing1,
}

const techTree: Science[] = [
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
];

export default techTree;
