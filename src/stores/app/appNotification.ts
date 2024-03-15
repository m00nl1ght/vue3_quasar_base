import { createErrorMessage } from '@/composable/requestHelpers/requestHelpers'
import { defineStore } from 'pinia'

interface MessageType {
  message: string
  type: 'positive' | 'negative' | 'info'
  timeout?: number
}

interface State {
  messages: MessageType[]
}

export const useAppNotificationStore = defineStore('appNotificationStore', {
  state: (): State => {
    return {
      messages: []
    }
  },

  getters: {},

  actions: {
    notifySuccess(message: string, props: Partial<MessageType> = {}) {
      this.messages.push({
        ...props,
        message,
        type: 'positive'
      })
    },

    notifyError(err: unknown, props: Partial<MessageType> = {}) {
      const message = createErrorMessage(err)

      this.messages.push({
        ...props,
        message,
        type: 'negative'
      })
    },

    notifyInfo(message: string, props: Partial<MessageType> = {}) {
      this.messages.push({
        ...props,
        message,
        type: 'info'
      })
    }
  }
})
