import Science from "./interfaces/Science";
import Item from "./item";

export enum ScienceName {
  Alpha = "Test 1",
  Beta = "Test 2",
}

const scienceTree: Science[] = [
  {
    name: ScienceName.Alpha,
    researchTime: 10,
    requirements: {
      items: [
        {
          item: Item.Water,
          amount: 5,
        },
        {
          item: Item.CopperWire,
          amount: 1,
        },
      ],
      sciences: [],
    },
  },
  {
    name: ScienceName.Beta,
    researchTime: 5,
    requirements: {
      items: [
        {
          item: Item.Water,
          amount: 5,
        },
        {
          item: Item.CopperWire,
          amount: 1,
        },
      ],
      sciences: [ScienceName.Alpha],
    },
  },
];

export default scienceTree;
