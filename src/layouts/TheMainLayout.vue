<template>
  <q-layout view="lhh Lpr lff">
    <app-header></app-header>

    <app-navigation></app-navigation>

    <q-page-container>
      <router-view />

      <AppLoadingIndicator />
      
      <AppNotification />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import AppHeader from '@/components/app/AppHeader.vue'
import AppNavigation from '@/components/app/AppNavigation.vue'
import AppLoadingIndicator from '@/components/app/AppLoadingIndicator.vue'
import AppNotification from '@/components/app/AppNotification.vue'
</script>
