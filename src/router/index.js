import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Product from "@/views/Product.vue";
import Login from "@/views/Login.vue";
import User from "@/views/user/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/produto/:id",
    name: "product",
    component: Product,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/usuario",
    name: "user",
    component: User,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
