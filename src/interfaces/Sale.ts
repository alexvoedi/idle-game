import { ItemID } from "@/data/item";

export enum SellingRuleType {
  SellUntil,
}

export interface BaseSale {
  itemID: ItemID;
  rule: SellingRuleType;
}

export interface SellUntilRule extends BaseSale {
  rule: SellingRuleType.SellUntil;
  stock: number;
}

export type Sale = SellUntilRule;
