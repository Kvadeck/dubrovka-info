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

export const resetMarkers = function (markers: { [key: string]: boolean }) {
  for (const key in markers) {
    if (Object.prototype.hasOwnProperty.call(markers, key)) {
      markers[key] = false
    }
  }
  return markers
}

export const formatFlatPrice = function (num: number | string) {
  let result

  if (typeof num === 'string') {
    result = Number.parseInt(num)
  }
  else {
    result = num
    if (result >= 1_000_000_000) {
      result = `${(result / 1_000_000_000).toFixed(1)} млрд`
    }
    else if (result >= 1_000_000) {
      result = `${(result / 1_000_000).toFixed(1)} млн`
    }
    else if (result >= 1_000) {
      result = `${(result / 1_000).toFixed(1)} тыс`
    }
    return result.toString().replace('.', ',')
  }
}
