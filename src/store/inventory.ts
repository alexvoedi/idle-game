import ItemAmount from "@/interfaces/ItemAmount";
import Item from "@/item";

export type InventoryStore = {
  inventory: Array<ItemAmount>;
};

const defaultInventory: InventoryStore = {
  inventory: [],
};

export const useInventoryStore = defineStore("inventory", {
  state: (): InventoryStore => defaultInventory,

  actions: {},

  getters: {},
});
