import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import type { addressItem } from '@/config/constants'
import { findPriceInterval } from '@/utils/main'

export function useFilterFlats(flats: Ref<addressItem[]>) {
  type Filter = string | { min: number, max: number }

  const filterBy = ref<Filter[]>([])

  const filteredFlats = computed(() => {
    return flats.value.map((address) => {
      return {
        ...address,
        items: address.items.filter((flat) => {
          return !filterBy.value.length
            || filterBy.value.includes(flat.type)
            || findPriceInterval(flat.price, (filterBy.value.find(item => typeof item === 'object')) as { min: number, max: number } | undefined)
        }),
      }
    }).filter(building => building.items.length > 0)
  })

  const updateFilter = (filter: Filter): void => {
    if (typeof filter === 'string') {
      const index = filterBy.value.indexOf(filter)
      if (index !== -1) {
        filterBy.value.splice(index, 1)
      }
      else {
        filterBy.value.push(filter)
      }
    }
    else {
      const objectIndex = filterBy.value.findIndex(item =>
        typeof item === 'object' && item !== null,
      )
      if (objectIndex === -1) {
        filterBy.value.push(filter)
      }
      else {
        filterBy.value[objectIndex] = filter
      }
    }
  }

  return {
    filteredFlats,
    updateFilter,
    filterBy,
  }
}
