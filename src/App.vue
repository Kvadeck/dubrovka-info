<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheInformation from '@/components/main/TheAfterHeaderLinks.vue'
import TheCarousel from '@/components/main/TheCarousel.vue'
import TheBottomText from '@/components/main/TheBottomText.vue'
import TheCountOfSlides from '@/components/main/TheCountOfSlides.vue'

const currentSlide = ref(1)

function updateCurrentSlide(value: number) {
  currentSlide.value = value + 1
}
</script>

<template>
  <div class="wrapper">
    <TheHeader />
    <TheInformation />
    <TheCarousel @get-current-slide="updateCurrentSlide" />
    <div class="bottom-inner">
      <TheBottomText />
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
.bottom-inner {
  display: flex;
  padding: 0 70px;
  margin-top: -70px;
  justify-content: space-between;
}
@media (max-width: 768px) {
  .bottom-inner {
    padding: 0 25px;
  }
}
</style>
