<script setup lang="ts">
import GalleryPlate from '@/components/gallery/GalleryPlate.vue'
import { galleryPlateItems } from '@/config/constants'

defineProps<{
  currentTab: number
}>()
</script>

<template>
  <div class="grid mt-[40px] gap-[20px] lg:grid-cols-[repeat(3,1fr)] md:grid-cols-[repeat(2,1fr)] sm:grid-cols-[repeat(1,1fr)] lg:gap-[40px]">
    <GalleryPlate :key="currentTab" class="flex">
      <template #title>
        {{ galleryPlateItems[currentTab].first_title }}
      </template>
      <template #description>
        {{ galleryPlateItems[currentTab].first_description }}
      </template>
    </GalleryPlate>
    <div class="relative hidden bg-[url('@/assets/img/gallery/bike.jpg')] bg-cover bg-center md:block lg:min-h-[600px]" />
    <BreakpointBlock :is-equal="true" breakpoint="lg">
      <GalleryPlate :key="currentTab">
        <template #title>
          {{ galleryPlateItems[currentTab].second_title }}
        </template>
        <template #description>
          {{ galleryPlateItems[currentTab].second_description }}
        </template>
      </GalleryPlate>
    </BreakpointBlock>
  </div>
</template>

<style scoped>

</style>
