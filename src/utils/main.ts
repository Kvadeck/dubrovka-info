import type { Ref, UnwrapRef } from 'vue'
import type { addressItem } from '@/config/constants'
import { COST_STEP } from '@/config/constants'

export const filterByType = function (buildings: Ref<UnwrapRef<addressItem[]>>, type: string): addressItem[] {
  return buildings.value
    .map(building => ({
      ...building,
      items: building.items.filter(item => item.type === type),
    }))
    .filter(building => building.items.length > 0)
}

export const returnAllPrices = function (buildings: addressItem[]) {
  const result: string[] = []
  buildings.forEach((el) => {
    el.items.forEach((item) => {
      result.push(item.price)
    })
  })
  return result
}

export const formatDigitWithSpaces = function (digit: string) {
  return digit.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}

export const resetMarkers = function (markers: Record<string, boolean>) {
  for (const key in markers) {
    if (Object.prototype.hasOwnProperty.call(markers, key)) {
      markers[key] = false
    }
  }
  return markers
}

export const formatFlatPrice = function (num: number | string) {
  let result

  result = (typeof num === 'string') ? Number.parseInt(num) : num

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

export const debounce = function <T extends (...args: any[]) => any>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

interface FilterPrice { min: string, max: string }

export const findPriceInterval = function (
  price: string,
  range: UnwrapRef<FilterPrice>,
): boolean {
  const itemPrice = Number(price)
  return range !== undefined && itemPrice >= Number(range.min) && itemPrice <= Number(range.max) + COST_STEP
}
