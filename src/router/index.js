import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/data-lazy',
    name: 'dataLazy',
    component: () => import('../views/DataLazy.vue')
  },
  {
    path: '/img-lazy',
    name: 'imgLazy',
    component: () => import('../views/ImgLazy.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
