import ItemID from "@/data/items/ItemID";
import SaleRule from "@/data/sales/SaleRule";

export default interface BaseSale {
  itemID: ItemID;
  rule: SaleRule;
  active: boolean;
}
