import ItemAmount from "@/interfaces/ItemAmount";

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

    addItem({ id, amount }: ItemAmount) {
      if (!this.hasInventorySpace) return;

      const inventoryItem = this.inventory.find(
        (inventoryItem) => inventoryItem.id === id
      );

      if (inventoryItem) {
        inventoryItem.amount += amount;
      } else {
        this.inventory.push({ id, amount });
      }
    },

    spendItems(items: ItemAmount[]) {
      const inventoryStore = useInventoryStore();

      items.forEach((item) => {
        const inventoryItem = inventoryStore.inventory.find(
          (inventoryItem) => inventoryItem.id === item.id
        );

        if (inventoryItem) {
          inventoryItem.amount -= item.amount;
        }
      });
    },

    hasItems(items: ItemAmount[]) {
      return items.every((item) => {
        const inventoryItem = this.inventory.find(
          (inventoryItem) => inventoryItem.id === item.id
        );

        if (inventoryItem) {
          return inventoryItem.amount >= item.amount;
        } else {
          return false;
        }
      });
    },
  },

  getters: {
    remainingInventorySpace: (state) => {
      const inventoryItemsAmount = state.inventory.reduce(
        (sum, item) => sum + item.amount,
        0
      );

      return state.storage - inventoryItemsAmount;
    },

    hasInventorySpace(): boolean {
      return this.remainingInventorySpace > 0;
    },
  },
});
