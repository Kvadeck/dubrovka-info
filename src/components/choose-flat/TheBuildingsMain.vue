<script setup lang="ts">
import { ref } from 'vue'
import TheFlatsTable from '@/components/choose-flat/TheFlatsTable.vue'
import TheBuildingsImage from '@/components/choose-flat/TheBuildingsImage.vue'
import TheRoomSelect from '@/components/choose-flat/TheRoomSelect.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import TheCostRange from '@/components/choose-flat/TheCostRange.vue'
import { buildings } from '@/config/constants'
import { useFilterFlats } from '@/composables/useFilterFlats'

const buildingItems = ref(buildings)

const { filteredFlats, updateFilter, filterByType } = useFilterFlats(buildingItems)
</script>

<template>
  <SectionTitle class="mb-[20px] break-all text-[32px] color-[var(--secondary-color)] font-bold uppercase lg:mb-[59px] lg:text-[56px]">
    Выбери свою квартиру
  </SectionTitle>
  <div class="relative">
    <TheBuildingsImage :active-filters="filterByType" :buildings="filteredFlats" />
    <div class="bottom-[10%] grid items-end gap-[30px] md:absolute lg:bottom-[10%] md:grid-cols-[repeat(3,1fr)] md:gap-[40px] lg:px-[60px] md:px-[30px]">
      <TheCostRange @change-price="updateFilter({ min: $event.min.toString(), max: $event.max.toString() })" />
      <TheRoomSelect @change-room="updateFilter(`${$event}к`)" />
      <TheFlatsTable :buildings="filteredFlats" />
    </div>
  </div>
</template>
