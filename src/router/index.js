import Vue from "vue";
import VueRouter from "vue-router";
import DefaultLayout from "@/layouts/default/Index";
import AuthLayout from "@/layouts/auth/Index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/myproject",
    name: "Home",
    component: DefaultLayout,
    children: [
      {
        path: "/myproject/home",
        name: "home",
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Home.vue"),
      },
      {
        path: "/myproject/helloworld",
        name: "helloworld",
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Helloworld.vue"),
      },
    ],
  },
  {
    path: "/myproject/auth",
    name: "Auth",
    component: AuthLayout,
    children: [
      {
        path: "/myproject/signup",
        name: "signup",
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/auth/Signup.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
