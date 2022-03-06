import { Effect } from "@/data/effects";
import Blueprint from "./Blueprint";

export default interface Generator {
  blueprint: Blueprint;
  timer: number;
  active: boolean;
  effects: Effect[];
}
