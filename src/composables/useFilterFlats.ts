import type { Ref } from 'vue'
import { ref } from 'vue'
import type { addressItem } from '@/config/constants'

export function useFilterFlats(flats: Ref<addressItem[]>) {
  const filterBy = ref<string[]>([])
  const filteredFlats = ref([...flats.value])

  function filterByType() {
    return flats.value.map(building => ({
      ...building,
      items: building.items.filter(item => !filterBy.value.length || filterBy.value.includes(item.type)),
    })).filter(building => building.items.length > 0)
  }

  function filterByPrice(min: number, max: number) {
    return flats.value.map(building => ({
      ...building,
      items: building.items.filter((flat) => {
        const itemPrice = Number(flat.price)
        return itemPrice >= min && itemPrice <= max
      }),
    })).filter(building => building.items.length > 0)
  }

  const updateFilter = (filter: string | { min: number, max: number }): void => {
    if (typeof filter === 'string') {
      if (filterBy.value.includes(filter)) {
        filterBy.value = filterBy.value.filter(c => c !== filter)
      }
      else {
        filterBy.value.push(filter)
      }
      filteredFlats.value = filterByType()
    }
    else {
      // Set filter when need filter by price range
      filteredFlats.value = filterByPrice(filter.min, filter.max)
    }
  }

  return {
    filteredFlats,
    updateFilter,
    filterBy,
  }
}
