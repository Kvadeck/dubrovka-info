<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Slide1 from '@/assets/img/slide1.jpg'
import Slide2 from '@/assets/img/slide2.jpg'
import Slide3 from '@/assets/img/slide3.jpg'
import Arrow from '@/assets/img/arrow.svg'
import 'vue3-carousel/dist/carousel.css'
</script>

<template>
  <div class="carousel-wrapper">
    <Carousel>
      <Slide class="carousel__item" :key="0">
          <img :src="Slide1" alt="slide-1">
      </Slide>
      <Slide class="carousel__item" :key="1">
          <img :src="Slide2" alt="slide-2">
      </Slide>
      <Slide class="carousel__item" :key="2">
          <img :src="Slide3" alt="slide-3">
      </Slide>
      <template #addons>
        <Navigation>
          <template #next>
            <span>
              <img class="next-arrow" :src="Arrow" alt="arrow_next">
            </span>
          </template>
          <template #prev>
            <span>
              <img class="prev-arrow" :src="Arrow" alt="arrow_prev">
            </span>
          </template>
        </Navigation>
      </template>
    </Carousel>
  </div>
</template>

<style>
.carousel-wrapper {
  padding: 0 170px;
  position: relative;
}

.carousel {
  position: initial;
}

.carousel__item {
  max-height: 580px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__item img {
  width: 100%;
  height: auto;
}

.carousel__prev {
  left: 85px;
}

.carousel__next {
  right: 85px;
}

.next-arrow {
  transform: rotate(-180deg);
}
</style>
