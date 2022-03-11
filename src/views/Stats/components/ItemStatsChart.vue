<script setup lang="ts">
import ItemID from "@/data/items/ItemID";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { useStatsStore } from "@/store/stats";

interface ComponentProps {
  itemID: ItemID;
}

const props = defineProps<ComponentProps>();

Chart.register(...registerables);

const statsStore = useStatsStore();

const chartData = computed(() => {
  const item = statsStore.stats.items.find((item) => item.id === props.itemID);

  if (item) {
    return {
      labels: item.history.map((history) => history[0]),
      datasets: [
        {
          label: item.id,
          data: item.history.map((history) => history[1]),
          tension: 0.4,
        },
      ],
    };
  }
});

const chartOptions = reactive({
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        color: "",
        borderColor: "#a3a3a3",
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "",
        borderColor: "#a3a3a3",
      },
    },
  },
  animation: false,
  color: "#a3a3a3",
  backgroundColor: "#a3a3a3",
  borderColor: ["#a3a3a3"],
  elements: {
    point: {
      radius: 0,
    },
  },
  plugins: {
    decimation: {
      enabled: true,
      algorithm: "lttb",
    },
    legend: { display: false },
  },
});
</script>

<template>
  <BaseCard class="space-y-8 overflow-hidden">
    <div class="px-8 pt-6">
      <h2 class="text-2xl font-bold">Item Stats</h2>
    </div>

    <div v-if="chartData" class="p-4">
      <LineChart :chart-data="chartData" :options="chartOptions"></LineChart>
    </div>
  </BaseCard>
</template>

<style></style>
