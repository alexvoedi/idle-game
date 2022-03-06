import { BlueprintID } from "@/data/blueprints";
import { ScienceID } from "@/data/techtree";
import ItemAmount from "./ItemAmount";

type Blueprint = {
  id: BlueprintID;
  items: ItemAmount[];
  productionTime: number;
  requirements: {
    sciences: ScienceID[];
  };
  ingredients: ItemAmount[];
};

export default Blueprint;
