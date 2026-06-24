'use client'

import type { JSX } from 'react'

import { NucGeneralMenuTree, NucStaffMenuTree } from 'nucleify'

import './_index.scss'

export function NucMenuTree(): JSX.Element {
  return (
    <div className="menu-tree-container">
      <NucGeneralMenuTree />
      <NucStaffMenuTree />
    </div>
  )
}
