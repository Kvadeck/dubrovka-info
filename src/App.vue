<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheAfterHeaderBlock from '@/components/main/TheAfterHeaderBlock.vue'
import TheCarousel from '@/components/main/TheCarousel.vue'
import TheBottomBlock from '@/components/main/TheBottomBlock.vue'
import TheCountOfSlides from '@/components/main/TheCountOfSlides.vue'

const currentSlide = ref(1)

function updateCurrentSlide(value: number) {
  currentSlide.value = value + 1
}
</script>

<template>
  <div class="wrapper">
    <TheHeader />
    <TheAfterHeaderBlock />
    <TheCarousel @get-current-slide="updateCurrentSlide" />
    <div class="flex justify-between px-[70px] -mt-[70px] max-lg:px-[25px]">
      <TheBottomBlock />
      <TheCountOfSlides :slide="currentSlide" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  min-height: fit-content;
}
.wrapper:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/img/background.png');
  background-color: var(--primary-background);
  background-size: cover;
  background-position: center;
  pointer-events: none;
}
</style>
