<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheAfterHeaderBlock from '@/components/main/TheAfterHeaderBlock.vue'
import TheCarousel from '@/components/main/TheCarousel.vue'
import TheBottomBlock from '@/components/main/TheBottomBlock.vue'
import TheCountOfSlides from '@/components/main/TheCountOfSlides.vue'
import TheInfoBlock from '@/components/jk-dubrovka/TheInfoBlock.vue'

const currentSlide = ref(1)

function updateCurrentSlide(value: number) {
  currentSlide.value = value + 1
}
</script>

<template>
  <section class="relative pb-[35px] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[url('@/assets/img/background.png')] before:bg-cover before:bg-center lg:pb-[70px] before:content-['']">
    <TheHeader />
    <TheAfterHeaderBlock />
    <TheCarousel @get-current-slide="updateCurrentSlide" />
    <div class="flex justify-between px-[70px] -mt-[70px] max-lg:px-[25px]">
      <TheBottomBlock />
      <TheCountOfSlides :slide-number="currentSlide" />
    </div>
  </section>
  <section class="bg-[var(--third-background)] px-[35px] py-[35px] lg:px-[70px] lg:py-[120px]">
    <TheInfoBlock />
  </section>
</template>
