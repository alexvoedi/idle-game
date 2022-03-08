import SaleRule from "@/data/sales/SaleRule";
import BaseSale from "./BaseSale";

export interface SellUntilRule extends BaseSale {
  rule: SaleRule.SellUntil;
  stock: number;
}
