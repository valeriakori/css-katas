import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Kata from "@/components/Kata.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/kata/:category/:id/:mode",
    name: "Kata",
    component: Kata,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
