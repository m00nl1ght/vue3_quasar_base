import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import { useAppNotificationStore } from '@/stores/app/appNotification'

export const AUTHORIZATION = 'Authorization'
export const SESSION_ID_HEADER = 'Session-Id'

export default {
  install: (app: any) => {
    const BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT
      ? `:${import.meta.env.VITE_BACKEND_PORT}`
      : ''
    const VITE_HOST =
      import.meta.env.VITE_BACKEND_SCHEME && import.meta.env.VITE_BACKEND_CLEAR_URL
        ? `${import.meta.env.VITE_BACKEND_SCHEME}://${
            import.meta.env.VITE_BACKEND_CLEAR_URL
          }${BACKEND_PORT}`
        : ''

    app.config.globalProperties.$baseURL = VITE_HOST

    axios.defaults.baseURL = VITE_HOST
    axios.defaults.withCredentials = true

    axios.interceptors.response.use(
      function (response) {
        return response // Any status code that lie within the range of 2xx cause this function to trigger. Do something with response data
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger. Do something with response error
        if (error?.response?.status === 401) {
          const appNotificationStore = useAppNotificationStore()
          appNotificationStore.notifyInfo('TOKEN_EXILE_MESSAGE', { timeout: 0 })
        } else if (error?.response?.status === 403) return Promise.reject('ACCESS_DENIED')
        else return Promise.reject(error)
      }
    )

    axios.interceptors.request.use((config) => {
      const { token, sessionId } = useAuthStore()
      if (token) config.headers[AUTHORIZATION] = `Bearer ${token}`
      if (sessionId) config.headers[SESSION_ID_HEADER] = sessionId
      return config
    })
  }
}
