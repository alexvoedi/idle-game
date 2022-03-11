import { useItem } from "@/composables/useItem";
import { useStatsStore } from "./stats";
import ItemAmount from "@/interfaces/items/ItemAmount";
import ItemID from "@/data/items/ItemID";

export type InventoryStore = {
  inventory: ItemAmount[];
  storage: number;
  money: number;
};

export const useInventoryStore = defineStore("inventory", {
  state: (): InventoryStore => ({ inventory: [], storage: 2500, money: 0 }),

  actions: {
    addItems(items: ItemAmount[]) {
      items.forEach((item) => this.addItem(item));
    },

    addItem(item: ItemAmount) {
      if (!this.hasInventorySpace) return;

      const inventoryItem = this.inventory.find(
        (inventoryItem) => inventoryItem.id === item.id
      );

      if (inventoryItem) {
        inventoryItem.amount += item.amount;
      } else {
        this.inventory.push({ ...item });
      }
    },

    getItem(itemID: ItemID) {
      return this.inventory.find((item) => item.id === itemID);
    },

    spendItems(items: ItemAmount[]) {
      items.forEach((item) => this.spendItem(item));
    },

    spendItem(item: ItemAmount) {
      const inventoryItem = this.inventory.find(
        (inventoryItem) => inventoryItem.id === item.id
      );

      if (inventoryItem) {
        inventoryItem.amount -= item.amount;
      }
    },

    hasItems(items: ItemAmount[]) {
      return items.every((item) => this.hasItem(item));
    },

    hasItem(item: ItemAmount) {
      const inventoryItem = this.inventory.find(
        (inventoryItem) => inventoryItem.id === item.id
      );

      if (inventoryItem) {
        return inventoryItem.amount >= item.amount;
      } else {
        return false;
      }
    },

    sellItem(item: ItemAmount) {
      const hasEnoughItem = this.hasItem(item);

      if (hasEnoughItem) {
        const { getItem } = useItem();
        const statsStore = useStatsStore();

        this.spendItem(item);

        const income = getItem(item.id).saleValue * item.amount;

        statsStore.sellItem(item);

        statsStore.stats.moneyEarned += income;

        this.money += income;
      }
    },
  },

  getters: {
    inventorySize: (state): number => {
      return state.inventory.reduce((sum, item) => sum + item.amount, 0);
    },

    remainingInventorySpace(): number {
      return this.storage - this.inventorySize;
    },

    hasInventorySpace(): boolean {
      return this.remainingInventorySpace > 0;
    },
  },
});
