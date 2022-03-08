import ScienceID from "@/data/sciences/ScienceID";
import ItemAmount from "../items/ItemAmount";

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
