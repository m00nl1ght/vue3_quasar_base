import { createI18n } from 'vue-i18n'
import { getDefaultLocale, useLocalization } from '@/stores/localization'
import { messages } from '@/lang/index'
import { Quasar } from 'quasar'
import axios from 'axios'

const locale = getDefaultLocale()

const i18n = createI18n({
  locale,
  messages,
  legacy: false,
  fallbackLocale: {
    'ru-RU': ['ru'],
    'ru-ru': ['ru'],
    'en-US': ['en'],
    'en-us': ['en'],
    'en-GB': ['en'],
    'en-gb': ['en'],
    default: [locale]
  }
})

export default i18n
export type AvailableLocales = (typeof i18n.global.availableLocales)[number]
export type LocaleType = { [k: string]: string | LocaleType }

export async function setQuasarLocales(lang: string) {
  const quasarLocales: { [key: string]: string } = {
    en: 'en-US',
    ru: 'ru'
  }

  import(`../../node_modules/quasar/lang/${quasarLocales[lang]}.mjs`).then((lng) => {
    Quasar.lang.set(lng.default)
  })
}

export function setI18nLanguage(lang: AvailableLocales) {
  i18n.global.locale.value = lang
  axios.defaults.headers.common['Accept-Language'] = lang
  setQuasarLocales(lang)

  const doc = document.querySelector('html')
  if (doc) doc.setAttribute('lang', lang)

  const localization = useLocalization()
  localization.setUserLocaleCookie(lang)
  return lang
}

export function mergeI18nMessages(messages: { [key: string]: LocaleType }) {
  if (messages) {
    for (const langMessagesKey in messages) {
      if (i18n.global.availableLocales.includes(langMessagesKey as AvailableLocales)) {
        i18n.global.mergeLocaleMessage(langMessagesKey, messages[langMessagesKey])
      }
    }
  }
}
