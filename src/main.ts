import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar, Loading, Notify, Dialog } from 'quasar'

import App from './App.vue'
import router from './router'
import './router/globalRouterHook'
import installAxios from './setup/axios-setup'
import i18n from '@/setup/i18n-setup'

import '@quasar/extras/mdi-v7/mdi-v7.css'
import 'quasar/src/css/index.sass' // Import Quasar css

import iconSet from 'quasar/icon-set/mdi-v7'
import langRu from 'quasar/lang/ru'

import './assets/scss/styles.scss'
// import 'uno.css'
// import '@/assets/styles.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
  plugins: { Loading, Notify, Dialog }, // import Quasar plugins and add here
  config: {
    notify: {
      position: 'top'
    }
  },
  iconSet: iconSet,
  lang: langRu
})
app.use(installAxios)
app.use(i18n)

app.mount('#app')
