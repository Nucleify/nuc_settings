<template>
  <div class="grided-content" v-if="gridedContent">
    <nuc-settings-preferences-theme v-if="route.hash === '#preferences-theme'" />
    <nuc-users-profile-personal-info v-if="route.hash === '#my-profile-personal-info'" />
    <nuc-users-profile-notifications-alerts v-if="route.hash === '#my-profile-notifications-alerts'" />
  </div> 
  <nuc-settings-staff-modules v-if="route.hash === '#modules'"/>
  <nuc-modules-settings-detail v-if="route.hash.includes('#module-') && !gridedContent">
    <nuc-color-settings-card v-if="route.hash === '#module-nuc_colors'"/>
    <nuc-chart-settings-card v-if="route.hash === '#module-nuc_charts'"/>
  </nuc-modules-settings-detail>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app'
import { computed } from 'vue'

import {
  NucUsersProfileNotificationsAlerts,
  NucUsersProfilePersonalInfo,
} from 'nucleify'

import { NucSettingsPreferencesTheme, NucSettingsStaffModules } from '.'

const route = useRoute()

const gridedHashes = [
  '#preferences-theme',
  '#my-profile-personal-info',
  '#my-profile-notifications-alerts',
]

const gridedContent = computed(() => {
  return gridedHashes.includes(route.hash)
})
</script>