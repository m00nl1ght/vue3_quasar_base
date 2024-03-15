import { defineStore } from 'pinia'
// import { AuthorizationControllerService } from '@/api'
import { setCookie, deleteCookie, getCookie } from '@/composable/helpers/cookeeLocalstorageHelper'

const TOKEN = 'access_token'
const SESSION_ID = 'session_id'

interface State {
  sessionId: string
  token: string
}

export const useAuthStore = defineStore('authStore', {
  state: (): State => {
    return {
      sessionId: getCookie(SESSION_ID) || '',
      token: getCookie(TOKEN) || ''
    }
  },

  getters: {
    isAuth(): boolean {
      return !!this.token
    }
  },

  actions: {
    async getSessionId(sessionId?: string) {
      // this.sessionId = await AuthorizationControllerService.getSessionId(sessionId)
      // setCookie(SESSION_ID, this.sessionId)
    },

    async logout() {
      // try {
      //   await AuthorizationControllerService.logout(this.sessionId)
      // } finally {
      //   deleteCookie(TOKEN)
      //   deleteCookie(SESSION_ID)
      // }
    },

    async getTokenData() {
      // const data = await AuthorizationControllerService.getTokenData(this.sessionId)
      // this.token = data.access_token
      // setCookie(TOKEN, this.token)
    }
  }
})
