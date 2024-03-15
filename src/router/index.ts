import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import TheMainLayout from '@/layouts/TheMainLayout.vue'

import * as paths from './paths/routePaths'
import * as names from './names/routeNames'

import authRoutes from '@/router/routes/authRoutes'
import TestPage from '@/views/TestPage.vue'

let routes: RouteRecordRaw[] = [
  ...authRoutes,

  {
    path: paths.routePathHome,
    component: TheMainLayout,
    children: [
      {
        path: '',
        name: names.routeNameHome,
        component: () => import('@/views/HomePage.vue')
      },
      // ...other,
    ]
  }
]

if (import.meta.env.DEV)
  routes.push({
    component: TheMainLayout,
    path: '/test',
    children: [
      {
        path: '',
        component: TestPage
      }
    ]
  })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
