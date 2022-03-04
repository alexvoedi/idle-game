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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
