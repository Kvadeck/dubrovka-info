<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import Slide1l from '@/assets/img/slides/slide1_large.jpg'
import Slide2l from '@/assets/img/slides/slide2_large.jpg'
import Slide3l from '@/assets/img/slides/slide3_large.jpg'

import Slide1s from '@/assets/img/slides/slide1_medium.jpg'
import Slide2s from '@/assets/img/slides/slide2_medium.jpg'
import Slide3s from '@/assets/img/slides/slide3_medium.jpg'

import ImageDefault from '@/assets/img/slides/image-default.jpg'

import Arrow from '@/assets/img/arrow.svg'
import 'vue3-carousel/dist/carousel.css'
import {ref} from "vue";

const currentSlide = ref(0)

export interface slideEndData {
  currentSlideIndex: number,
  prevSlideIndex: number,
  slidesCount: number
}

const emit = defineEmits<{
  getCurrentSlide: [slide: number]
}>()

function handleSlideEnd(data: slideEndData) {
  emit('getCurrentSlide', data.currentSlideIndex)
}

</script>

<template>
  <div class="carousel-wrapper">
    <Carousel @slide-end="handleSlideEnd">
      <Slide :key="1">
        <div class="carousel__item">
          <picture>
            <source :srcset="Slide1l" media="(min-width: 768px)">
            <source :srcset="Slide1s" media="(max-width: 768px)">
            <img :src="ImageDefault" alt="Slide1">
          </picture>
        </div>
      </Slide>
      <Slide :key="2">
        <div class="carousel__item">
          <picture>
            <source :srcset="Slide2l" media="(min-width: 768px)">
            <source :srcset="Slide2s" media="(max-width: 768px)">
            <img :src="ImageDefault" alt="Slide2">
          </picture>
        </div>
      </Slide>
      <Slide :key="3">
        <div class="carousel__item">
          <picture>
            <source :srcset="Slide3l" media="(min-width: 768px)">
            <source :srcset="Slide3s" media="(max-width: 768px)">
            <img :src="ImageDefault" alt="Slide3">
          </picture>
        </div>
      </Slide>
      <template #addons>
        <Navigation>
          <template #next>
            <img class="next-arrow" :src="Arrow" alt="arrow_next">
          </template>
          <template #prev>
            <img class="prev-arrow" :src="Arrow" alt="arrow_prev">
          </template>
        </Navigation>
      </template>
    </Carousel>

  </div>
</template>

<style>
.carousel-wrapper {
  padding: 30px 80px;
  position: relative;
}

.carousel__prev {
  left: -45px;
}

.carousel__next {
  right: -45px;
}
.carousel__item img {
  width: 100%;
  height: auto;
}

.next-arrow {
  transform: rotate(-180deg);
}

.carousel__prev img, .carousel__next img {
  width: 40px;
  height: 40px;
}
@media (max-width: 768px) {
  .carousel-wrapper {
    padding: 30px 25px;
  }
  .carousel__prev {
    left: 0;
  }
  .carousel__next {
    right: 0;
  }
  .carousel__prev img, .carousel__next img {
    border-radius: 20px;
    background-color: var(--primary-background);
  }
}
@media (min-width: 1280px) {
  .carousel-wrapper {
    padding: 0 170px;
  }
  .carousel {
    position: initial;
  }
  .carousel__prev img, .carousel__next img {
    width: 70px;
    height: 70px;
  }
  .carousel__prev {
    left: 85px;
  }
  .carousel__next {
    right: 85px;
  }
}
</style>
