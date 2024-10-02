import type { addressItem } from '@/config/constants'

export const filterByType = function (buildings: addressItem[], type: string): addressItem[] {
  return buildings
    .map(building => ({
      ...building,
      items: building.items.filter(item => item.type === type),
    }))
    .filter(building => building.items.length > 0)
}
