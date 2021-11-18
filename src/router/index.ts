import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () => import('@/views/Explore.vue'),
    children: [
      {
        path: '',
        name: 'Explore',
        component: () => import('@/views/Explore/Index.vue')
      },
      {
        path: ':id',
        name: 'Route',
        component: () => import('@/views/Explore/Route.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
