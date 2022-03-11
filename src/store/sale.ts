import ItemID from "@/data/items/ItemID";
import SaleRule from "@/data/sales/SaleRule";
import Sale from "@/interfaces/sales/Sale";
import { useInventoryStore } from "./inventory";

export type SaleStore = {
  sales: Sale[];
};

export const useSaleStore = defineStore("sale", {
  state: (): SaleStore => ({
    sales: [],
  }),

  actions: {
    sellItems() {
      const inventoryStore = useInventoryStore();

      this.sales
        .filter((sale) => sale.active)
        .forEach((sale) => {
          if (sale.rule === SaleRule.SellUntil) {
            const inventoryItem = inventoryStore.getItem(sale.itemID);

            if (inventoryItem) {
              const difference = inventoryItem.amount - sale.stock;

              if (difference > 0) {
                inventoryStore.sellItem({
                  id: sale.itemID,
                  amount: difference,
                });
              }
            }
          }
        });
    },

    getSales(itemID: ItemID) {
      return this.sales.filter((sale) => sale.itemID === itemID);
    },
  },

  getters: {},
});
