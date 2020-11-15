import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from "../views/Main.vue"
import Detail from "../views/Detail.vue"
import MyList from "../views/MyList.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/Main",
    name: "Main",
    component: Main
  },
  {
    path: "/Main/Detail/:id",
    name: "Detail",
    component: Detail
  },
  {
    path: "/MyList",
    name: "MyList",
    component: MyList
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
