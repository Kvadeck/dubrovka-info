import type { Ref, UnwrapRef } from 'vue'
import type { addressItem } from '@/config/constants'

export const filterByType = function (buildings: Ref<UnwrapRef<addressItem[]>>, type: string): addressItem[] {
  return buildings.value
    .map(building => ({
      ...building,
      items: building.items.filter(item => item.type === type),
    }))
    .filter(building => building.items.length > 0)
}

export const returnAllPrices = function (buildings: addressItem[]) {
  const result: number[] = []
  buildings.forEach((el) => {
    el.items.forEach((item) => {
      if (typeof item.price !== 'number') {
        // Replace spaces in the price and convert to a number
        item.price = Number.parseInt(item.price.replace(/ /g, ''), 10)
      }
      result.push(item.price)
    })
  })
  return result
}

export const formatDigitWithSpaces = function (digit: string) {
  return digit.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}
