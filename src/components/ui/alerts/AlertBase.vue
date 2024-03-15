<template>
  <q-card flat bordered>
    <q-toolbar class="q-pl-none" flat>
      <div class="card-title" :class="alertClass">{{ title ?? t(`alarmTitle_${type}`) }}</div>
    </q-toolbar>

    <q-separator inset />
    <q-card-section>
      <slot name="text"></slot>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

type AlertType = 'danger' | 'success' | 'info'
interface Props {
  type: AlertType
  title?: string
}

const props = defineProps<Props>()
const { t } = useI18n()

const alertClass = computed(() => {
  return `card-title__label_${props.type}`
})
</script>

<style lang="scss" scoped>
.card-title {
  margin-left: -12px;
  padding: 4px 8px 4px 28px;
  position: relative;
  border-radius: 3px 5px 5px 0;
  // background: #d8e1e5;
  // color: #757575;
  font-size: 18px;
  letter-spacing: 0.7px;
}
.card-title:after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 0;
  border: 0 solid transparent;
  border-width: 9px 0 0 11px;
  border-top-color: #b0c2ca;
}

.card-title__label {
  &_danger {
    background: var(--q-negative);
    color: var(--vt-c-white);
  }

  &_success {
    background: var(--q-positive);
    color: var(--vt-c-white);
  }

  &_info {
    background: var(--q-info);
    color: var(--vt-c-black);
  }
}
</style>
