<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import { qualitySlideImages } from '@/config/constants'
import Arrow from '@/assets/img/arrow.svg'

</script>

<template>
  <Carousel id="quality-carousel" :mouse-drag="false">
    <Slide v-for="(slide, index) in qualitySlideImages" :key="index">
      <img class="h-auto max-w-full" :src="slide.large" :alt="`Slide_${index}`">
    </Slide>
    <template #addons>
      <Navigation>
        <template #next>
          <img class="h-[50px] w-[50px] -rotate-180" :src="Arrow" alt="Arrow_next">
        </template>
        <template #prev>
          <img class="h-[50px] w-[50px]" :src="Arrow" alt="Arrow_prev">
        </template>
      </Navigation>
    </template>
  </Carousel>
</template>

<style scoped>

</style>
