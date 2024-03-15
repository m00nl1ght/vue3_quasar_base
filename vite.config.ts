import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
// import UnoCSS from 'unocss/vite'

const env = loadEnv('all', process.cwd())

const devScheme = env.VITE_BACKEND_SCHEME
const devClearUrl = env.VITE_BACKEND_CLEAR_URL
const devBackendPort = env.VITE_BACKEND_PORT
const devBackendUrl = `${devScheme}://${devClearUrl}:${devBackendPort}/`

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    })
    // UnoCSS()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api/v1': {
        target: devBackendUrl,
        changeOrigin: true,
        secure: false
      },
      '/session-id': {
        target: devBackendUrl,
        changeOrigin: true,
        secure: false
      },
      '/logout-user': {
        target: devBackendUrl,
        changeOrigin: true,
        secure: false
      },
      '/get-token': {
        target: devBackendUrl,
        changeOrigin: true,
        secure: false
      },
      '/get-sso-url': {
        target: devBackendUrl,
        changeOrigin: true,
        secure: false
      }
    },
    hmr: {
      overlay: false
    }
  }
})
