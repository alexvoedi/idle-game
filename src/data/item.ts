export enum ItemID {
  Capacitor,
  Cog,
  Copper,
  CopperWire,
  ElectricCoil,
  ElectricGenerator,
  ElectricRelay,
  ElectricResistor,
  ElectricSwitch,
  Glass,
  InsulatedWire,
  Iron,
  Magnet,
  Magnetit,
  Methan,
  Petroleum,
  Plastic,
  Sand,
  Screw,
  Stone,
  Water,
  Wood,
  WoodenChair,
  WoodenPlank,
}

export interface Item {
  id: ItemID;
  name: string;
  saleValue: number;
}

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
