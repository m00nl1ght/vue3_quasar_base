<template>
  <div class="row items-center">
    <q-separator vertical inset class="q-mr-sm" />

    <div v-if="isAuth" class="row items-center">
      <q-avatar :color="avatarLoaded ? '' : 'primary'" size="48px">
        <q-icon
          v-if="!avatarLoaded"
          name="mdi-account-outline"
          color="white"
          class="default-image__icon"
        ></q-icon>

        <q-img src="#" @load="avatarLoaded = true"></q-img>
      </q-avatar>

      <span class="q-ml-sm">User_info</span>

      <q-separator vertical inset class="q-mx-sm" />
    </div>

    <router-link v-if="isAuth" :to="{ name: routeNameLogout }">
      <q-btn flat round color="primary" icon="mdi-logout" :title="t('exit')" />
    </router-link>

    <router-link v-else :to="{ name: routeNameLogin }">
      <q-btn flat round color="primary" icon="mdi-login" :title="t('enter')" />
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { routeNameLogin, routeNameLogout } from '@/router/names/routeNames'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const { t } = useI18n()

const authStore = useAuthStore()
const { isAuth } = storeToRefs(authStore)
const avatarLoaded = ref(false)
</script>

<style lang="scss" scoped>
.default-image__icon {
  position: absolute !important;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}
</style>
