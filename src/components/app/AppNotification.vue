<template></template>

<script setup lang="ts">
import { watch } from 'vue'
import { useQuasar } from 'quasar'
import { useAppNotificationStore } from '@/stores/app/appNotification'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

const $q = useQuasar()
const appNotificationStore = useAppNotificationStore()
const { messages } = storeToRefs(appNotificationStore)
const { te, t } = useI18n()

watch(messages.value, (value) => {
  if (value) {
    const item = messages.value.shift()
    if (item) {
      const { message, type, timeout } = item
      $q.notify({
        message: te(message) ? t(message) : message,
        type,
        timeout,
        actions: [
          {
            icon: 'mdi-close',
            color: 'white',
            round: true,
            handler: () => {
              /* ... */
            }
          }
        ]
      })
    }
  }
})
</script>
