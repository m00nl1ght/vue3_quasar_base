import i18n from '@/setup/i18n-setup'

export const MAX_FILE_SIZE = 10_485_760

const { t } = i18n.global

const UrlPattern = new RegExp(
  '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', // fragment locator
  'i'
)

export const required = <T>(v: T) => {
  if (typeof v === 'string' || typeof v === 'number')
    return (v !== undefined && v !== null && v !== '') || t('rule.required')
  else return (v !== undefined && v !== null && !!v) || t('rule.required')
}

export const max255 = (v: string) => v === undefined || v.length <= 255 || t('rule.max255')
export const max4000 = (v: string) => v === undefined || v.length <= 4000 || t('rule.max4000')
export const isUrl = (v: string) => !!UrlPattern.test(v) || t('rule.invalidUrl')
export const isEmail = (v: string) => /.+@.+\..+/.test(v) || t('rule.invalidEmail')
export const fileMaxSize = (v: File) => !v || v.size < MAX_FILE_SIZE || t('rule.fileMaxSizeRule')
