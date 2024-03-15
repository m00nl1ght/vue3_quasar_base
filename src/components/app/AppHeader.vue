<template>
  <q-header bordered class="q-px-md header">
    <q-toolbar class="h-full">
      <!-- <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" /> -->
      <q-toolbar-title>title</q-toolbar-title>

      <LocaleSelect class="q-mr-md" />
      <DarkModeBtn class="q-mr-md" />

      <UserInfo />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import DarkModeBtn from './components/DarkModeBtn.vue'
import LocaleSelect from '@/components/app/components/LocaleSelect.vue'
import UserInfo from '@/components/app/components/UserInfo.vue'
</script>

<style scoped lang="scss">
.header {
  height: 64px;
  background-color: inherit;
  color: inherit;
}
</style>
