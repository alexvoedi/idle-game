import { ScienceName } from "@/data/science-tree";
import ItemAmount from "./ItemAmount";

type Science = {
  name: ScienceName;
  researchTime: number;
  requirements: {
    items: ItemAmount[];
    sciences: ScienceName[];
  };
};

export default Science;
