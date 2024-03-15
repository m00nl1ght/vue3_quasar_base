<template>
  <q-btn-toggle
    v-model="darkMode"
    @update:model-value="changeTheme"
    rounded
    dense
    unelevated
    no-caps
    toggle-color="primary"
    text-color="primary"
    toggle-text-color="white"
    class="my-custom-toggle"
    :options="[
      { value: false, slot: 'one' },
      { value: true, slot: 'two' }
    ]"
  >
    <template v-slot:one>
      <div class="row items-center no-wrap">
        <q-icon size="16px" left name="mdi-white-balance-sunny"></q-icon>
      </div>
    </template>

    <template v-slot:two>
      <div class="row items-center no-wrap">
        <q-icon size="16px" right name="mdi-weather-night"></q-icon>
      </div>
    </template>
  </q-btn-toggle>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const darkMode = ref(false)

function changeTheme(value: boolean) {
  localStorage.setItem('darkMode', String(value))
  $q.dark.set(value)
}

onMounted(() => {
  const isDark = localStorage.getItem('darkMode')
  if (isDark === 'true') {
    darkMode.value = true
    $q.dark.set(true)
  }
})
</script>

<style lang="scss" scoped>
.my-custom-toggle {
  border: 1px solid $primary;
}
</style>
