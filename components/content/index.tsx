'use client'

import type { JSX } from 'react'

import {
  NucChartSettingsCard,
  NucColorSettingsCard,
  NucDocuments,
  NucModulesSettingsDetail,
  NucSettingsPreferencesTheme,
  NucSettingsStaffModules,
  NucUsersProfileNotificationsAlerts,
  NucUsersProfilePersonalInfo,
  t,
  useRoute,
} from 'nucleify'

const GRIDED_HASHES = [
  '#preferences-theme',
  '#my-profile-personal-info',
  '#my-profile-notifications-alerts',
  '#module-nuc_documents',
] as const

export function NucSettingsCardContent(): JSX.Element {
  const route = useRoute()
  const gridedContent = GRIDED_HASHES.includes(
    route.hash as (typeof GRIDED_HASHES)[number]
  )
  const isModuleDetail = route.hash.includes('#module-') && !gridedContent

  if (gridedContent) {
    return (
      <div className="grided-content">
        {route.hash === '#preferences-theme' ? (
          <NucSettingsPreferencesTheme />
        ) : null}
        {route.hash === '#my-profile-personal-info' ? (
          <NucUsersProfilePersonalInfo />
        ) : null}
        {route.hash === '#my-profile-notifications-alerts' ? (
          <NucUsersProfileNotificationsAlerts />
        ) : null}
        {route.hash === '#module-nuc_documents' ? <NucDocuments /> : null}
      </div>
    )
  }

  if (route.hash === '#modules') {
    return <NucSettingsStaffModules />
  }

  if (isModuleDetail) {
    return (
      <NucModulesSettingsDetail>
        {route.hash === '#module-nuc_colors' ? (
          <NucColorSettingsCard heading={t('settings-colors')} />
        ) : null}
        {route.hash === '#module-nuc_charts' ? (
          <NucChartSettingsCard heading={t('settings-charts')} />
        ) : null}
      </NucModulesSettingsDetail>
    )
  }

  return <></>
}
