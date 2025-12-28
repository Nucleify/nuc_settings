<template>
  <div class="grided-content" v-if="gridedContent">
    <nuc-settings-preferences-theme v-if="route.hash === '#preferences-theme'" />
  </div> 
  <nuc-settings-staff-modules v-if="route.hash === '#modules'"/>
  <nuc-modules-settings-detail v-if="route.hash.includes('#module-') && !gridedContent">
    <nuc-color-settings-card v-if="route.hash === '#module-nuc_colors'"/>
    <nuc-chart-settings-card v-if="route.hash === '#module-nuc_charts'"/>
  </nuc-modules-settings-detail>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app'

import { NucSettingsPreferencesTheme, NucSettingsStaffModules } from '.'

const route = useRoute()

const gridedHashes = ['#preferences-theme']

const gridedContent = computed(() => {
  return gridedHashes.includes(route.hash)
})
</script>