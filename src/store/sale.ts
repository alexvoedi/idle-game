import { ItemID } from "@/data/item";
import { Sale, SellingRuleType } from "@/interfaces/Sale";
import { useInventoryStore } from "./inventory";

export type SaleStore = {
  sales: Sale[];
};

export const useSaleStore = defineStore("sale", {
  state: (): SaleStore => ({
    sales: [],
  }),

  actions: {
    addSale(sale: Sale) {
      const existingSales = this.getSales(sale.itemID);

      const hasSaleType = existingSales.some(
        (existingSale) => existingSale.rule === sale.rule
      );

      if (hasSaleType) return;

      this.sales.push(sale);
    },

    sellItems() {
      const inventoryStore = useInventoryStore();

      this.sales.forEach((sale) => {
        if (sale.rule === SellingRuleType.SellUntil) {
          const inventoryItem = inventoryStore.inventory.find(
            (inventoryItem) => inventoryItem.id === sale.itemID
          );

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
