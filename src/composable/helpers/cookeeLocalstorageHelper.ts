const VUE_APP_BACKEND_CLEAR_URL = 'damnation.bobdaytech.ru'
//TODO - rebase in ENV

export function getCookie(name: string) {
  let matches = undefined
  try {
    // eslint-disable-next-line
    matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    )
  } catch (error) {
    console.info(error)
  }
  return matches ? decodeURIComponent(matches[1]) : undefined
}

export function setCookie(name: string, value: string) {
  value = encodeURIComponent(value)
  if (import.meta.env.DEV) document.cookie = `${name}=${value}; path=/; ${window.location.host};`
  document.cookie = `${name}=${value}; path=/; domain=${VUE_APP_BACKEND_CLEAR_URL};`
}

export function deleteCookie(name: string) {
  // document.cookie = `${name}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"`
  if (import.meta.env.DEV)
    document.cookie = `${name}=; path=/; ${window.location.host}; expires = Thu, 01 Jan 1970 00:00:00 GMT;`
  document.cookie = `${name}=; path=/; domain=${VUE_APP_BACKEND_CLEAR_URL}; expires = Thu, 01 Jan 1970 00:00:00 GMT;`
}

export function objectKeysToCamelCase(obj: any) {
  return Object.entries(obj).reduce((carry: any, [key, value]) => {
    carry[
      key.replace(/([-_][a-z])/gi, ($1) => {
        return $1.toUpperCase().replace('-', '').replace('_', '')
      })
    ] = value

    return carry
  }, {})
}
