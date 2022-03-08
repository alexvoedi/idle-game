import ItemID from "@/data/items/ItemID";

export default interface Item {
  id: ItemID;
  name: string;
  saleValue: number;
}
