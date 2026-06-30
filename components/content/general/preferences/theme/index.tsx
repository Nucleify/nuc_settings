'use client'

import type { JSX } from 'react'

import {
  NucChartSettingsCard,
  NucColorSettingsCard,
  NucDockSettingsCard,
  t,
} from 'nucleify'

export function NucSettingsPreferencesTheme(): JSX.Element {
  return (
    <>
      <NucColorSettingsCard heading={t('settings-colors')} />
      <hr className="settings-card-divider" />
      <NucChartSettingsCard heading={t('settings-charts')} />
      <hr className="settings-card-divider" />
      <NucDockSettingsCard heading={t('settings-dock-style')} />
    </>
  )
}
