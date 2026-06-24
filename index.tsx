'use client'

import type { JSX } from 'react'

import { AdCard, NucMenuTree, NucSettingsCardContent, useRoute } from 'nucleify'

import './_index.scss'

export function NucSettingsPage(): JSX.Element {
  const route = useRoute()
  const cardId = route.hash.replace('#', '') || 'settings'

  return (
    <div className="panel-container">
      <AdCard className="settings-main-card" id={cardId}>
        <NucMenuTree />
        <div className="settings-main-card-content">
          <NucSettingsCardContent />
        </div>
      </AdCard>
    </div>
  )
}
