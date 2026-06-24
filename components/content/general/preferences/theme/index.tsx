'use client'

import type { JSX } from 'react'

import { NucColorSettingsCard, t } from 'nucleify'

export function NucSettingsPreferencesTheme(): JSX.Element {
  return (
    <>
      <NucColorSettingsCard heading={t('settings-colors')} />
      <hr className="settings-card-divider" />
    </>
  )
}
