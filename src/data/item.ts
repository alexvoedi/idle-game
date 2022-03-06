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
}

const items: Item[] = [
  {
    id: ItemID.Copper,
    name: "Copper",
  },
  {
    id: ItemID.CopperWire,
    name: "Copper Wire",
  },
  {
    id: ItemID.Iron,
    name: "Iron",
  },
  {
    id: ItemID.Magnet,
    name: "Magnet",
  },
  {
    id: ItemID.Magnetit,
    name: "Magnetit",
  },
  {
    id: ItemID.Plastic,
    name: "Plastic",
  },
  {
    id: ItemID.Sand,
    name: "Sand",
  },
  {
    id: ItemID.Stone,
    name: "Stone",
  },
  {
    id: ItemID.Water,
    name: "Water",
  },
  {
    id: ItemID.Wood,
    name: "Wood",
  },
];

export default items;
