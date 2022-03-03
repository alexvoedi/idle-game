import Item from "@/item";
import { ScienceName } from "@/science-tree";
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
