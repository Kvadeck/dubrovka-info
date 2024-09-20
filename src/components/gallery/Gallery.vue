<script setup lang="ts">
import { ref } from 'vue'
import Title from '@/components/SectionTitle.vue'
import Leaf from '@/components/Leaf.vue'
import TheGalleryTabs from '@/components/gallery/TheGalleryTabs.vue'
import TheGalleryPlates from '@/components/gallery/TheGalleryPlates.vue'

const currentTab = ref(0)
</script>

<template>
  <div class="relative">
    <Leaf />
    <Title class="mb-[16px] block text-[32px] color-[var(--secondary-color)] font-bold uppercase lg:mb-[59px] lg:text-[56px]">
      Галерея
    </Title>
    <TheGalleryTabs :current-tab="currentTab" @change-current-tab="currentTab = $event" />
    <TheGalleryPlates :current-tab="currentTab" />
  </div>
</template>

<style scoped>

</style>
