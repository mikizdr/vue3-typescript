import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "@/pages/Dashboard.vue";
import Users from "@/pages/users/Users.vue";
import UserCreate from "@/pages/users/UserCreate.vue";
import UserUpdate from "@/pages/users/UserUpdate.vue";
import Register from "@/pages/Register.vue";
import Counter from "@/pages/Counter.vue";
import Wrapper from "@/pages/Wrapper.vue";
import Login from "@/pages/Login.vue";
import Profile from "@/pages/Profile.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
  },

  {
    path: "",
    component: Wrapper,
    children: [
      {
        path: "",
        component: Dashboard,
      },
      {
        path: "/users",
        component: Users,
      },
      {
        path: "/users/create",
        component: UserCreate,
      },
      {
        path: "/users/update/:id",
        component: UserUpdate,
      },
      {
        path: "/counter",
        component: Counter,
      },
      {
        path: "/profile",
        component: Profile,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
