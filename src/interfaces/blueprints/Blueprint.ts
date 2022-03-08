import BlueprintID from "../../data/blueprints/BlueprintID";
import ItemAmount from "../items/ItemAmount";
import ScienceID from "../../data/sciences/ScienceID";

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
