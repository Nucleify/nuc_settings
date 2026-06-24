'use client'

import type { JSX, ReactNode } from 'react'

import type { NucSettingsCardInterface } from 'nucleify'
import { AdButton, AdCard, AdHeading } from 'nucleify'

import './_index.scss'

export function NucSettingsCard({
  heading,
  showButton,
  buttonIcon = 'prime:refresh',
  onButtonClick,
  children,
}: NucSettingsCardInterface & { children?: ReactNode }): JSX.Element {
  return (
    <AdCard
      className="settings-card settings-small-card"
      header={
        <div className="settings-card-header-container">
          <AdHeading tag={4} text={heading} />
          {showButton ? (
            <AdButton
              icon={buttonIcon}
              adType="main"
              className="refresh-button"
              rounded
              text
              type="button"
              onClick={onButtonClick}
            />
          ) : null}
        </div>
      }
    >
      {children}
    </AdCard>
  )
}
