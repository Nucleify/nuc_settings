import type { SettingsGroupInterface } from 'atomic'

export function modulesGroups(
  withCategory: boolean = false
): SettingsGroupInterface[] {
  return [
    {
      name: 'nuc_activity',
      items: ['Activity'],
    },
    {
      name: 'nuc_entities',
      items: [withCategory && 'Entities', 'Article', 'Contact', 'Money'].filter(
        Boolean
      ) as string[],
    },
    {
      name: 'nuc_entities_structural',
      items: [withCategory && 'Structural', 'Question', 'Technology'].filter(
        Boolean
      ) as string[],
    },
    {
      name: 'nuc_files',
      items: ['File'],
    },
  ]
}
