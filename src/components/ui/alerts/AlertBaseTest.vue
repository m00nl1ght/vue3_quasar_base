<template>
  <div class="doc-note" :class="alertClass">
    <p v-if="title" class="doc-note__title">{{ title }}</p>

    <slot name="text"></slot>
  </div>
</template>

<script setup lang="ts">
// import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

type AlertType = 'danger' | 'success' | 'info'
interface Props {
  type: AlertType
  title?: string
}

const props = defineProps<Props>()
const alertClass = computed(() => {
  return `doc-note--${props.type}`
})
</script>

<style scoped lang="scss">
.doc-note {
  font-size: 16px;
  border-radius: 4px;
  margin: 16px 0;
  padding: 8px 16px;
  border-width: 1px;
  border-style: solid;
}

/*  SUCCESS */
body.body--dark .doc-note--success {
  border-color: #21ba45;
  background-color: #051c0a;
}

.doc-note--success {
  background-color: #daf8e1;
  border-color: #21ba45;
}

.doc-note--success .doc-note__title,
.doc-note--success .doc-link,
.doc-note--success .doc-token {
  color: #147029;
}

/*  DANGER */
body.body--dark .doc-note--danger {
  border-color: #c10015;
  background-color: #270004;
}

.doc-note--danger {
  background-color: #ffdfe3;
  border-color: #c10015;
}

.doc-note--danger .doc-note__title,
.doc-note--danger .doc-link,
.doc-note--danger .doc-token {
  color: #c10015;
}
</style>
