import ItemID from "@/data/items/ItemID";
import Item from "@/interfaces/items/Item";

const items: Item[] = [
  {
    id: ItemID.Copper,
    name: "Copper",
    saleValue: 0.05,
  },
  {
    id: ItemID.CopperWire,
    name: "Copper Wire",
    saleValue: 0.1,
  },
  {
    id: ItemID.Iron,
    name: "Iron",
    saleValue: 0.03,
  },
  {
    id: ItemID.Magnet,
    name: "Magnet",
    saleValue: 0.3,
  },
  {
    id: ItemID.Magnetit,
    name: "Magnetit",
    saleValue: 0.1,
  },
  {
    id: ItemID.Plastic,
    name: "Plastic",
    saleValue: 0.05,
  },
  {
    id: ItemID.Sand,
    name: "Sand",
    saleValue: 0.01,
  },
  {
    id: ItemID.Stone,
    name: "Stone",
    saleValue: 0.01,
  },
  {
    id: ItemID.Water,
    name: "Water",
    saleValue: 0.01,
  },
  {
    id: ItemID.Wood,
    name: "Wood",
    saleValue: 0.01,
  },
];

export default items;
