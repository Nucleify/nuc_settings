<template>
  <div class="staff-menu-tree">
    <ad-heading :tag="4" :text="t('settings-staff')" />
    <ad-tree :value="nodes" :expanded-keys="expandedKeys" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const nodes = computed(() => [
  {
    key: '0',
    label: t('settings-security'),
    children: [
      {
        key: '0-0',
        label: t('settings-users-access'),
        data: '#users',
        type: 'url',
        class: 'disabled-item',
      },
      {
        key: '0-1',
        label: t('settings-roles-permissions'),
        data: '#roles-permissions',
        type: 'url',
        class: 'disabled-item',
      },
    ],
  },
  {
    key: '1',
    label: t('settings-modules'),
    type: 'url',
    data: '#modules',
  },
])

const expandedKeys = ref({
  0: true,
  1: true,
})
</script>
