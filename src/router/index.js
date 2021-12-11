import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'CreateCard',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateCard.vue')
  },
  {
    path: '/display-cards',
    name: 'DisplayCards',
    component: () => import(/* webpackChunkName: "about" */ '../views/DisplayCards.vue')
  },
    {
        path: '/single-card',
        name: 'SingleCards',
        component: () => import(/* webpackChunkName: "about" */ '../views/SingleCard.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
