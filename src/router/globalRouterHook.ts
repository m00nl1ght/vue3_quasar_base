// import { useI18n } from 'vue-i18n'
import router from './index'
import type { RouteMeta } from 'vue-router'
import i18n from '@/setup/i18n-setup'

const {
  global: { t, te }
} = i18n

function getRouteTitle(routeMeta: RouteMeta): string {
  const title =
    routeMeta && routeMeta.title && typeof routeMeta.title === 'string'
      ? te(`pageTitle.${routeMeta.title}`)
        ? t(`pageTitle.${routeMeta.title}`)
        : routeMeta.title
      : ''
  return title
}

router.beforeEach((to, from, next) => {
  document.title = getRouteTitle(to.meta)
  next()
})
