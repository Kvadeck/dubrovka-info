<script setup lang="ts">
import TheFlatsTable from '@/components/choose-flat/TheFlatsTable.vue'
import TheBuildingsSvg from '@/components/choose-flat/TheBuildingsSvg.vue'
import TheRoomSelect from '@/components/choose-flat/TheRoomSelect.vue'
import SectionTitle from '@/components/SectionTitle.vue'
</script>

<template>
  <SectionTitle class="mb-[20px] break-all text-[32px] color-[var(--secondary-color)] font-bold uppercase lg:mb-[59px] lg:text-[56px]">
    Выбери свою квартиру
  </SectionTitle>
  <div class="relative">
    <TheBuildingsSvg />
    <TheFlatsTable />
    <TheRoomSelect />
  </div>
</template>

<style scoped>

</style>
