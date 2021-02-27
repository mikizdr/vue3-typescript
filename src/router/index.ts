import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "@/pages/Dashboard.vue";
import Users from "@/pages/Users.vue";
import Register from "@/pages/Register.vue";
import Counter from "@/pages/Counter.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/users",
    component: Users,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/counter",
    component: Counter,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
