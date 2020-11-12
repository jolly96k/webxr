import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "App",
    redirect: "/information"
  },
  {
    path: "/information",
    name: "Information",
    component: function() {
      return import("../views/Information.vue");
    }
  },
  {
    path: "/contents",
    name: "Contents",
    component: function() {
      return import("../views/Contents.vue");
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
});

export default router;