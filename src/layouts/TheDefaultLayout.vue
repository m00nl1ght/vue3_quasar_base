<template>
  <q-layout view="hHh Lpr lff">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    return {
      drawerLeft: ref(false),
      drawerRight: ref(false)
    }
  }
}
</script>
