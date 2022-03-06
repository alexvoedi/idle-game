import { ScienceID } from "@/data/techtree";
import ItemAmount from "./ItemAmount";

type Science = {
  id: ScienceID;
  name: string;
  researchTime: number;
  requirements: {
    items: ItemAmount[];
    sciences: ScienceID[];
  };
};

export default Science;
