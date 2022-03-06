import { BlueprintID } from "@/data/blueprints";
import { ScienceID } from "@/data/techtree";
import ItemAmount from "./ItemAmount";

type Blueprint = {
  id: BlueprintID;
  productionTime: number;
  requirements: {
    sciences: ScienceID[];
  };
  input?: ItemAmount[];
  output: ItemAmount[];
};

export default Blueprint;
