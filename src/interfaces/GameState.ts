import { AchievementStore } from "@/store/achievement";
import { BaseStore } from "@/store/base";
import { DevStore } from "@/store/dev";
import { EffectStore } from "@/store/effect";
import { GeneratorStore } from "@/store/generator";
import { InventoryStore } from "@/store/inventory";
import { SaleStore } from "@/store/sale";
import { ScienceStore } from "@/store/science";
import { StatsStore } from "@/store/stats";

export default interface GameState {
  base: BaseStore;
  dev: DevStore;
  effect: EffectStore;
  generator: GeneratorStore;
  inventory: InventoryStore;
  sale: SaleStore;
  science: ScienceStore;
  stats: StatsStore;
  achievement: AchievementStore;
}
