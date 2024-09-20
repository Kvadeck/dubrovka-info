<script setup lang="ts">
import GalleryTab from '@/components/gallery/GalleryTab.vue'
import { galleryTabItems } from '@/config/constants'

defineProps<{
  currentTab: number
}>()

const emit = defineEmits<{
  changeCurrentTab: [slide: number]
}>()
</script>

<template>
  <div class="grid grid-cols-[repeat(2,1fr)] gap-y-[28px] sm:grid-cols-[repeat(4,1fr)]">
    <GalleryTab v-for="(tabItem, index) in galleryTabItems" :id="index" :key="tabItem.title" :current-tab="currentTab" @change-current-tab="emit('changeCurrentTab', $event)">
      {{ tabItem.title }}
    </GalleryTab>
  </div>
</template>
