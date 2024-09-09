<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Arrow from '@/assets/img/arrow.svg'
import 'vue3-carousel/dist/carousel.css'
import SlidePicture from '@/components/main/SlidePicture.vue'
import { slideImages } from '@/config/constants'

const emit = defineEmits<{
  getCurrentSlide: [slide: number]
}>()

function handleSlideEnd(data: { currentSlideIndex: number }) {
  emit('getCurrentSlide', data.currentSlideIndex)
}
</script>

<template>
  <div class="relative mx-auto my-0 max-w-[1486px]">
    <Carousel @slide-end="handleSlideEnd">
      <Slide v-for="(slide, index) in slideImages" :key="index">
        <SlidePicture :id="index" :large="slide.large" :medium="slide.medium" />
      </Slide>
      <template #addons>
        <Navigation>
          <template #next>
            <img class="next-arrow bg-color-custom h-[40px] w-[40px] rounded-full md:h-[70px] md:w-[70px] -rotate-180" :src="Arrow" alt="Arrow_next">
          </template>
          <template #prev>
            <img class="prev-arrow bg-color-custom h-[40px] w-[40px] rounded-full md:h-[70px] md:w-[70px]" :src="Arrow" alt="Arrow_prev">
          </template>
        </Navigation>
      </template>
    </Carousel>
  </div>
</template>

<style>
.carousel__prev, .carousel__next {
  margin: 0 20px;
}
.bg-color-custom {
  background-color: var(--primary-background-opacity);
}
</style>
