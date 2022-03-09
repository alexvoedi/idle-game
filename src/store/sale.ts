import ItemID from "@/data/items/ItemID";
import SaleRule from "@/data/sales/SaleRule";
import Sale from "@/interfaces/sales/Sale";
import { useInventoryStore } from "./inventory";

export type SaleStore = {
  sales: Sale[];
};

type SaleIdentifier = { itemID: number; rule: SaleRule };

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

    removeSale(sale: SaleIdentifier) {
      this.sales
        .reduce((indices, curr, index) => {
          if (curr.itemID === sale.itemID && curr.rule === sale.rule) {
            indices.push(index);
          }

          return indices;
        }, [] as number[])
        .forEach((index) => {
          this.sales.splice(index, 1);
        });
    },

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
