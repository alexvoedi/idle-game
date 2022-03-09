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
    path: "/sale",
    name: "Sale",
    component: () => import("@/views/Sale/index.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("@/views/Game/index.vue"),
  },
  {
    path: "/achievements",
    name: "Achievements",
    component: () => import("@/views/Achievements/index.vue"),
  },
  {
    path: "/library",
    name: "Library",
    component: () => import("@/views/Library/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory("/idle-game/"),
  routes,
});

export default router;
