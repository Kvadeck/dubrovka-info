<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Arrow from '@/assets/img/arrow.svg'
import SlidePicture from '@/components/ui/PictureImg.vue'
import { slideImages } from '@/config/constants'

const emit = defineEmits<{
  getCurrentSlide: [slide: number]
}>()

function handleSlideEnd(data: { currentSlideIndex: number }) {
  emit('getCurrentSlide', data.currentSlideIndex)
}
</script>

<template>
  <div class="mx-auto my-0 max-w-[594px] md:max-w-[1486px]">
    <Carousel id="main-carousel" :wrap-around="true" :mouse-drag="false" @slide-end="handleSlideEnd">
      <Slide v-for="(slide, index) in slideImages" :key="index">
        <SlidePicture :id="index" :large="slide.large" :medium="slide.medium" />
      </Slide>
      <template #addons>
        <Navigation>
          <template #next>
            <img class="h-[40px] w-[40px] rounded-full bg-[var(--primary-color)] md:h-[70px] md:w-[70px] -rotate-180" :src="Arrow" alt="Arrow_next">
          </template>
          <template #prev>
            <img class="h-[40px] w-[40px] rounded-full bg-[var(--primary-color)] md:h-[70px] md:w-[70px]" :src="Arrow" alt="Arrow_prev">
          </template>
        </Navigation>
      </template>
    </Carousel>
  </div>
</template>
