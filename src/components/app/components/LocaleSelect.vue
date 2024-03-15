<template>
  <q-select
    borderless
    v-model="defaultLocalization"
    :options="availableLocalization"
    @update:model-value="onChange"
    class="text-weight-bold text-uppercase"
  >
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section>
          <q-item-label class="text-uppercase">{{ scope.opt }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup lang="ts">
import { useLocalization } from '@/stores/localization'
// import i18n from '@/plugin/i18n/index'
// import { useQuasar } from 'quasar'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { setQuasarLocales, type AvailableLocales, setI18nLanguage } from '@/setup/i18n-setup'

// type AvailableLocales = (typeof i18n.global.availableLocales)[number]

// const $q = useQuasar()
const localization = useLocalization()
const { defaultLocalization, availableLocalization } = storeToRefs(localization)
// const locales: { [key: string]: string } = {
//   en: 'en-US',
//   ru: 'ru'
// }

// const setQuasarLocales = (lang: string) => {
//   import(`../../../../node_modules/quasar/lang/${locales[lang]}.mjs`).then((lng) => {
//     $q.lang.set(lng.default)
//   })
// }

const onChange = (lang: AvailableLocales) => {
  setI18nLanguage(lang)
  // i18n.global.locale.value = lang
  // setQuasarLocales(lang)
  // localization.setUserLocaleCookie(lang)
}

onMounted(() => {
  setQuasarLocales(defaultLocalization.value)
})
</script>
