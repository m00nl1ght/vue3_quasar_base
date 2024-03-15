import moment from 'moment'
import i18n from '@/setup/i18n-setup'

export type LocaleType = 'en' | 'ru' | string
export const DATE_FORMAT_BY_LOCALE: { [key: string]: string } = {
  en: 'YYYY/MM/DD',
  ru: 'DD.MM.YYYY'
}
export const DATE_MASK_FORMAT_BY_LOCALE: { [key: string]: string } = {
  en: '####/##/##',
  ru: '##.##.####'
}
export const DATETIME_FORMAT_BY_LOCALE: { [key: string]: string } = {
  en: 'YYYY/MM/DD LT',
  ru: 'DD.MM.YYYY HH:mm'
}

export const formatDateByLocale = (
  dateString: string,
  withTime = false,
  locale?: LocaleType | undefined
): string => {
  if (!dateString) return ''
  const localeValue = locale ?? i18n.global.locale.value
  if (localeValue && localeValue in DATE_FORMAT_BY_LOCALE) {
    const dateFormat = withTime
      ? DATETIME_FORMAT_BY_LOCALE[localeValue]
      : DATE_FORMAT_BY_LOCALE[localeValue]

    const result = moment(new Date(dateString)).format(dateFormat)
    return result
  }

  return dateString
}
