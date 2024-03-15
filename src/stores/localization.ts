// import { SystemControllerService } from '@/api'
import { defineStore } from 'pinia'
import { setCookie, deleteCookie, getCookie } from '@/composable/helpers/cookeeLocalstorageHelper'

export const USER_LOCALE = 'user_locale'

function getAvalibleLocales(): string[] {
  return import.meta.env.VITE_APP_ALLOWED_LANGS
    ? import.meta.env.VITE_APP_ALLOWED_LANGS.split(',')
    : ['en', 'ru']
}

export function getDefaultLocale(): string {
  const cookieLocale = getCookie(USER_LOCALE)
  const avalible = getAvalibleLocales()

  if (cookieLocale && avalible.includes(cookieLocale)) return cookieLocale
  else deleteCookie(USER_LOCALE)

  return import.meta.env.VITE_APP_DEFAULT_LANG ? import.meta.env.VITE_APP_DEFAULT_LANG : 'ru'
}

interface State {
  defaultLocalization: string
  availableLocalization: string[]
}

export const useLocalization = defineStore('localization', {
  state: (): State => {
    return {
      defaultLocalization: getDefaultLocale(),
      availableLocalization: getAvalibleLocales()
    }
  },

  getters: {},

  actions: {
    async getLocalization() {
      // const data = await SystemControllerService.getLocalization()
      // if (data.defaultLocalization) this.defaultLocalization = data.defaultLocalization
      // if (data.availableLocalization) this.availableLocalization = data.availableLocalization
    },

    setUserLocaleCookie(locale: string) {
      setCookie(USER_LOCALE, locale)
    }
  }
})
