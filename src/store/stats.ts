import ItemID from "@/data/items/ItemID";
import ItemAmount from "@/interfaces/items/ItemAmount";

type HistoryEntry = [number, number];

export interface ItemStats {
  id: ItemID;
  produced: number;
  sold: number;
  history: HistoryEntry[];
}

export type StatsStore = {
  stats: {
    items: ItemStats[];
    moneyEarned: number;
  };
};

export const useStatsStore = defineStore("stats", {
  state: (): StatsStore => ({
    stats: {
      items: [],
      moneyEarned: 0,
    },
  }),

  actions: {
    getStatsItem(id: ItemID) {
      const item = this.stats.items.find((item) => item.id === id);

      if (item) {
        return item;
      } else {
        const item = {
          id,
          produced: 0,
          sold: 0,
          history: [],
        };

        this.stats.items.push(item);

        return item;
      }
    },

    produceItem({ id, amount }: ItemAmount) {
      const item = this.getStatsItem(id);

      item.produced += amount;

      const now = Date.now();
      const lastEntry = item.history.at(-1);

      const addHistoryEntry = () => item.history.push([now, item.produced]);

      if (lastEntry) {
        const timeDifference = now - lastEntry[0];

        if (timeDifference > 1000) {
          for (let i = 0; i < timeDifference; i += 1000) {
            item.history.push([lastEntry[0] + i, lastEntry[1]]);
          }
        }

        addHistoryEntry();
      } else {
        addHistoryEntry();
      }
    },

    sellItem({ id, amount }: ItemAmount) {
      const item = this.getStatsItem(id);

      item.sold += amount;
    },
  },

  getters: {},
});
