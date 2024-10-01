<script setup lang="ts">
import { ref } from 'vue'
import TheFlatsTable from '@/components/choose-flat/TheFlatsTable.vue'
import TheBuildingsSvg from '@/components/choose-flat/TheBuildingsSvg.vue'
import TheRoomSelect from '@/components/choose-flat/TheRoomSelect.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import TheCostRange from '@/components/choose-flat/TheCostRange.vue'
import { buildings } from '@/config/constants'

const buildingItems = ref(buildings)
</script>

<template>
  <SectionTitle class="mb-[20px] break-all text-[32px] color-[var(--secondary-color)] font-bold uppercase lg:mb-[59px] lg:text-[56px]">
    Выбери свою квартиру
  </SectionTitle>
  <div class="relative">
    <TheBuildingsSvg />
    <div class="bottom-[10%] grid items-end gap-[30px] md:absolute lg:bottom-[10%] md:grid-cols-[repeat(3,1fr)] md:gap-[40px] lg:px-[60px] md:px-[30px]">
      <TheCostRange />
      <TheRoomSelect />
      <TheFlatsTable :buildings="buildingItems" />
    </div>
  </div>
</template>

<style scoped>

</style>
