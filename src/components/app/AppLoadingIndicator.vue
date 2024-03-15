<template></template>

<script setup lang="ts">
import { watch } from 'vue'
import { useQuasar } from 'quasar'
import { useAppProgressBanner } from '@/stores/app/appProgressBanner'
import { storeToRefs } from 'pinia'

const $q = useQuasar()
const appProgressBanner = useAppProgressBanner()
const { showBanner } = storeToRefs(appProgressBanner)

watch(showBanner, (value) => {
  if (value) $q.loading.show()
  else $q.loading.hide()
})
</script>
