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
  },
  {
    path: '/station',
    name: 'Station',
    component: () => import('@/views/Station.vue'),
    children: [
      {
        path: '',
        name: 'Station',
        component: () => import('@/views/Station/Index.vue')
      },
      {
        path: 'map',
        name: 'Map',
        component: () => import('@/views/Station/Map.vue')
      }
    ]
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/News.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'News') return next()

  window.scrollTo(0, 0)
  next()
})

export default router
