import * as paths from '@/router/paths/routePaths'
import * as names from '@/router/names/routeNames'

const routes = [
  {
    path: paths.routePathLogin,
    name: names.routeNameLogin,
    component: () => import('@/views/auth/LoginPage.vue')
  },
  {
    path: paths.routePathLogout,
    name: names.routeNameLogout,
    component: () => import('@/views/auth/LogoutPage.vue')
  },
]

export default routes
