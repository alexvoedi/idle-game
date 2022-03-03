import Item from "@/data/item";
import { ScienceName } from "@/data/science-tree";
import ItemAmount from "./ItemAmount";

type Blueprint = {
  item: Item;
  productionTime: number;
  requirements: {
    sciences: ScienceName[];
  };
  ingredients: ItemAmount[];
};

export default Blueprint;
