<script setup lang="ts">
import Title from '@/components/SectionTitle.vue'
import Leaf from '@/components/Leaf.vue'
import TheGalleryTabs from '@/components/gallery/TheGalleryTabs.vue'
import TheGalleryPlates from '@/components/gallery/TheGalleryPlates.vue'
</script>

<template>
  <div class="relative">
    <Leaf />
    <Title class="mb-[16px] block text-[32px] color-[var(--secondary-color)] font-bold uppercase lg:mb-[59px] lg:text-[56px]">
      Галерея
    </Title>
    <TheGalleryTabs />
    <TheGalleryPlates />
  </div>
</template>

<style scoped>

</style>
