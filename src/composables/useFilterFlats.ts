import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import type { addressItem } from '@/config/constants'

export function useFilterFlats(flats: Ref<addressItem[]>) {
  const filterBy = ref<string[]>([])

  const filteredFlats = computed(() => {
    return flats.value.map(building => ({
      ...building,
      items: building.items.filter((flat) => { return !filterBy.value.length || filterBy.value.includes(flat.type) }),
    }))
      .filter(building => building.items.length > 0)
  })

  const updateFilter = (filter: string): void => {
    if (filterBy.value.includes(filter)) {
      filterBy.value = filterBy.value.filter(c => c !== filter)
    }
    else {
      filterBy.value.push(filter)
    }
  }

  return {
    filteredFlats,
    updateFilter,
  }
}
