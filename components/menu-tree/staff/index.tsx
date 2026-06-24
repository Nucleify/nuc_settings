'use client'

import type { TreeExpandedKeysType } from 'primereact/tree'
import type { TreeNode } from 'primereact/treenode'
import type { JSX } from 'react'
import { useEffect, useMemo, useState } from 'react'

import {
  AdHeading,
  AdTree,
  checkIsStaff,
  sessionStorageGetItem,
  t,
} from 'nucleify'

export function NucStaffMenuTree(): JSX.Element {
  const [isStaff, setIsStaff] = useState(false)

  useEffect(() => {
    const role = sessionStorageGetItem('user_role') ?? ''
    setIsStaff(checkIsStaff(role))
  }, [])

  const nodes = useMemo<TreeNode[]>(
    () => [
      {
        key: '0',
        label: t('settings-security'),
        children: [
          {
            key: '0-0',
            label: t('settings-users-access'),
            data: '#users',
            type: 'url',
            className: 'disabled-item',
          },
          {
            key: '0-1',
            label: t('settings-roles-permissions'),
            data: '#roles-permissions',
            type: 'url',
            className: 'disabled-item',
          },
        ],
      },
      {
        key: '1',
        label: t('settings-modules'),
        type: 'url',
        data: '#modules',
      },
    ],
    []
  )

  const [expandedKeys] = useState<TreeExpandedKeysType>({
    '0': true,
    '1': true,
  })

  if (!isStaff) return <></>

  return (
    <div className="staff-menu-tree">
      <AdHeading tag={4} text={t('settings-staff')} />
      <AdTree
        className="menu-tree-prime"
        value={nodes}
        expandedKeys={expandedKeys}
      />
    </div>
  )
}
