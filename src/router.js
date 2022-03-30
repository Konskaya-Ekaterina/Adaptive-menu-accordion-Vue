import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/PageMain"),
    meta: {
      title: "Main Page"
    }
  },
  {
    path: "/:name",
    component: () => import("@/components/PageGeneral"),
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes
});

export default router;