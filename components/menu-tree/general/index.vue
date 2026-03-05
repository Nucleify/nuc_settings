<template>
  <div class="general-menu-tree">
    <ad-heading :tag="4" :text="t('settings-general')" >
      <nuc-navigation-back-button 
        v-if="route.hash.includes('#module-')"
        ad-type="main"
      />
    </ad-heading>
    <ad-tree :value="nodes" :expanded-keys="expandedKeys" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

const nodes = computed(() => [
  {
    key: '0',
    label: t('settings-my-profile'),
    children: [
      {
        key: '0-0',
        label: t('settings-personal-info'),
        data: '#my-profile-personal-info',
        type: 'url',
      },
      {
        key: '0-1',
        label: t('settings-notifications-alerts'),
        data: '#my-profile-notifications-alerts',
        type: 'url',
      },
    ],
  },
  {
    key: '1',
    label: t('settings-preferences'),
    children: [
      {
        key: '1-0',
        label: t('settings-language-region'),
        data: '#preferences-language-region',
        type: 'url',
        class: 'disabled-item',
      },
      {
        key: '1-1',
        label: t('settings-entities'),
        data: '#preferences-entities',
        type: 'url',
        class: 'disabled-item',
      },
      {
        key: '1-2',
        label: t('settings-theme'),
        data: '#preferences-theme',
        type: 'url',
      },
    ],
  },
  {
    key: '2',
    label: t('settings-data-export'),
    children: [
      {
        key: '2-0',
        label: t('settings-data-import'),
        data: '#data-import',
        type: 'url',
        class: 'disabled-item',
      },
      {
        key: '2-1',
        label: t('settings-data-export-item'),
        data: '#data-export',
        type: 'url',
        class: 'disabled-item',
      },
      {
        key: '2-2',
        label: t('settings-convert-data'),
        data: '#convert-data',
        type: 'url',
        class: 'disabled-item',
      },
    ],
  },
])

const expandedKeys = ref({
  0: true,
  1: true,
  2: true,
})
</script>
