import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import type { addressItem } from '@/config/constants'
import { MAX_COST_PRICE, MIN_COST_PRICE } from '@/config/constants'
import { findPriceInterval } from '@/utils/main'

export function useFilterFlats(flats: Ref<addressItem[]>) {
  interface FilterPrice { min: string, max: string }
  type Filter = string | { min: string, max: string }

  const filterByType = ref<string[]>([])
  const filterByPrice = ref<FilterPrice>({ min: MIN_COST_PRICE, max: MAX_COST_PRICE })

  const filteredFlats = computed(() => {
    const filteredByType = flats.value.map((address) => {
      return {
        ...address,
        items: address.items.filter((flat) => {
          return !filterByType.value.length || filterByType.value.includes(flat.type)
        }),
      }
    })
    const filteredByPrice = filteredByType.map((address) => {
      return {
        ...address,
        items: address.items.filter((flat) => {
          return findPriceInterval(flat.price, filterByPrice.value)
        }),
      }
    })
    return filteredByPrice.filter(building => building.items.length > 0)
  })

  const updateFilter = (filter: Filter): void => {
    if (typeof filter === 'string') {
      const index = filterByType.value.indexOf(filter)
      if (index !== -1) {
        filterByType.value.splice(index, 1)
      }
      else {
        filterByType.value.push(filter)
      }
    }
    else {
      filterByPrice.value = filter
    }
  }

  return {
    filteredFlats,
    updateFilter,
    filterByType,
    filterByPrice,
  }
}
