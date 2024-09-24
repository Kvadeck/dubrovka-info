<script setup lang="ts">
import { provide, ref } from 'vue'
import Title from '@/components/SectionTitle.vue'
import Leaf from '@/components/Leaf.vue'
import Tabs from '@/components/ui/Tabs.vue'
import { galleryTabItems } from '@/config/constants'
import TheGalleryPlates from '@/components/gallery/TheGalleryPlates.vue'

const currentTab = ref(0)

function updateTab(id: number) {
  currentTab.value = id
}

provide('currentTab', currentTab)
</script>

<template>
  <div class="relative">
    <Leaf />
    <Title class="mb-[16px] block text-[32px] color-[var(--secondary-color)] font-bold uppercase lg:mb-[59px] lg:text-[56px]">
      Галерея
    </Title>
    <Tabs class="grid-cols-[repeat(2,1fr)] sm:grid-cols-[repeat(4,1fr)]" :current-tab="currentTab" :items="galleryTabItems" :change-event="updateTab" />
    <TheGalleryPlates />
  </div>
</template>
