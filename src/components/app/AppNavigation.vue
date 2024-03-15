<template>
  <q-drawer
    show-if-above
    v-model="leftDrawerOpen"
    side="left"
    bordered
    behavior="desktop"
    class="px-2"
  >
    <q-list class="mt-5">
      <template v-for="menuItem in menuList">
        <q-item clickable v-ripple :to="menuItem.to">
          <q-item-section avatar>
            <q-icon :name="menuItem.icon" />
          </q-item-section>

          <q-item-section>
            {{ t(menuItem.label) }}
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const leftDrawerOpen = ref(false)
const { t } = useI18n()

const menuList = computed(() => {
  const result = [
    {
      to: { name: 'Login' },
      label: 'Login',
      icon: 'mdi-search'
    }
  ]

  return result
})
</script>
