<template>
  <nuc-color-settings-card :heading="t('settings-colors')" />
  <hr class="settings-card-divider" />
  <nuc-chart-settings-card :heading="t('settings-charts')" />
  <hr class="settings-card-divider" />
  <nuc-dock-settings-card :heading="t('settings-dock-style')" />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
