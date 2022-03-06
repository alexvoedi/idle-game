import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/factory",
    name: "Factory",
    component: () => import("@/views/Factory/index.vue"),
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: () => import("@/views/Inventory/index.vue"),
  },
  {
    path: "/science",
    name: "Science",
    component: () => import("@/views/Science/index.vue"),
  },
  {
    path: "/effects",
    name: "Effects",
    component: () => import("@/views/Effects/index.vue"),
  },
  {
    path: "/stats",
    name: "Stats",
    component: () => import("@/views/Stats/index.vue"),
  },
  {
    path: "/sell",
    name: "Sell",
    component: () => import("@/views/Sell/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory("/idle-game/"),
  routes,
});

export default router;
