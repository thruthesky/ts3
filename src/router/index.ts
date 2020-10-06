import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/", // 이 경로가 루트 페이지(홈페이지)라는 뜻이다.
    name: "Home",
    component: Home
  },
  { // 서브 페이지
    path: "/about",
    name: "About",
    // import() 를 사용하면, about.[hash].js 와 같은 js 파일을 따로 만들고,
    // 이 페이지를 방문을 하면, about.[hash].js 를 lazy loading 한다.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact/:foo/:bar?", // 마지막에 ? 는 파라메타가 생략 가능하다라는 뜻이다.
    name: "Contact",
    component: () => import("../views/Contact.vue"), // code splitting & lazy loading.
    props: true, // 파라메타를 컴포넌트 props 로 전환하라고 한다.
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
