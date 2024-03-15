<template>
  <q-dialog :model-value="isOpen" @update:model-value="emit('onCancel')" persistent>
    <q-card :style="`width: ${width}; max-width:  ${width}`" class="q-px-sm">
      <q-card-section class="row items-center">
        <div class="text-h6">{{ title ?? t('confirmAction') }}</div>
        <q-space />
        <q-btn icon="mdi-close" flat round dense v-close-popup />
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <slot></slot>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat :label="cancelText ?? t('cancel')" color="primary" @click="emit('onCancel')" />
        <q-btn
          v-if="!hideSubmitButton"
          flat
          :label="submitText ?? t('save')"
          color="primary"
          @click="emit('onSubmit')"
          :loading="isLoading"
          :disable="isDisable"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Props {
  isOpen: boolean
  isLoading?: boolean
  isDisable?: boolean
  hideSubmitButton?: boolean
  title?: string
  cancelText?: string
  submitText?: string
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: '80vw'
})

// const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'onCancel'): void
  (e: 'onSubmit'): void
}>()

const { t } = useI18n()
</script>

<style scoped></style>
