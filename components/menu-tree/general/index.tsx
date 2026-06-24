'use client'

import type { TreeExpandedKeysType } from 'primereact/tree'
import type { TreeNode } from 'primereact/treenode'
import type { JSX } from 'react'
import { useMemo, useState } from 'react'

import {
  AdHeading,
  AdTree,
  NucNavigationBackButton,
  t,
  useRoute,
} from 'nucleify'

export function NucGeneralMenuTree(): JSX.Element {
  const route = useRoute()
  const showBackButton = route.hash.includes('#module-')

  const nodes = useMemo<TreeNode[]>(
    () => [
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
            className: 'disabled-item',
          },
          {
            key: '1-1',
            label: t('settings-entities'),
            data: '#preferences-entities',
            type: 'url',
            className: 'disabled-item',
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
            className: 'disabled-item',
          },
          {
            key: '2-1',
            label: t('settings-data-export-item'),
            data: '#data-export',
            type: 'url',
            className: 'disabled-item',
          },
          {
            key: '2-2',
            label: t('settings-convert-data'),
            data: '#module-nuc_documents',
            type: 'url',
          },
        ],
      },
    ],
    []
  )

  const [expandedKeys] = useState<TreeExpandedKeysType>({
    '0': true,
    '1': true,
    '2': true,
  })

  return (
    <div className="general-menu-tree">
      <AdHeading tag={4} text={t('settings-general')}>
        {showBackButton ? <NucNavigationBackButton /> : null}
      </AdHeading>
      <AdTree
        className="menu-tree-prime"
        value={nodes}
        expandedKeys={expandedKeys}
      />
    </div>
  )
}
