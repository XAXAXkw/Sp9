import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/beta',
    name: 'beta',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/BetaZone.vue')
  },
  {
    path: '/catalogue',
    name: 'catalogue',
    component: () => import('@/components/CatalogueFull.vue')
  },
  {
    path: '/card',
    name: 'card',
    component: () => import('@/components/CardComp.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('@/components/ToDo.vue')
  }
  ,
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/components/ShopComp.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
