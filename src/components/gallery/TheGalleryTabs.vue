<script setup lang="ts">
import { ref } from 'vue'
import GalleryTab from '@/components/gallery/GalleryTab.vue'
import { galleryTabItems } from '@/config/constants'

const currentTab = ref(0)
</script>

<template>
  <div class="grid grid-cols-[repeat(2,1fr)] gap-y-[28px] sm:grid-cols-[repeat(4,1fr)]">
    <GalleryTab v-for="(tabItem, index) in galleryTabItems" :id="index" :key="tabItem.title" :current-tab="currentTab" @change-current-tab="currentTab = $event">
      {{ tabItem.title }}
    </GalleryTab>
  </div>
</template>
