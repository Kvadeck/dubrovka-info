<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheAfterHeaderBlock from '@/components/main/TheAfterHeaderBlock.vue'
import TheCarousel from '@/components/main/TheCarousel.vue'
import TheBottomBlock from '@/components/main/TheBottomBlock.vue'
import TheCountOfSlides from '@/components/main/TheCountOfSlides.vue'
import TheDubrovkaInfo from '@/components/dubrovka/TheDubrovka.vue'
import TheGallery from '@/components/gallery/TheGalleryMain.vue'
import InfrastructureMain from '@/components/infrastructure/InfrastructureMain.vue'
import AdvantagesList from '@/components/advantages/AdvantagesList.vue'
import TheBuildingsLayer from '@/components/choose-flat/TheBuildingsLayer.vue'

const currentSlide = ref(1)

function updateCurrentSlide(value: number) {
  currentSlide.value = value + 1
}
</script>

<template>
  <section class="custom-background relative pb-[35px] lg:pb-[70px]">
    <TheHeader />
    <TheAfterHeaderBlock />
    <TheCarousel @get-current-slide="updateCurrentSlide" />
    <div class="flex justify-between px-[70px] -mt-[70px] max-lg:px-[25px]">
      <TheBottomBlock />
      <TheCountOfSlides :slide-number="currentSlide" />
    </div>
  </section>
  <section class="bg-[var(--third-background)] py-[35px] lg:py-[120px]">
    <TheDubrovkaInfo />
  </section>
  <section class="relative bg-[var(--third-background)] pb-[35px] lg:px-[70px] max-md:px-[20px] md:px-[35px]">
    <TheGallery />
  </section>
  <section class="relative bg-[var(--third-background)] py-[35px] pb-[35px] lg:px-[70px] lg:py-[80px] max-md:px-[20px] md:px-[35px]">
    <InfrastructureMain />
  </section>
  <section class="relative bg-[var(--third-background)] py-[35px] pb-[35px] lg:px-[70px] lg:py-[40px] max-md:px-[20px] md:px-[35px]">
    <AdvantagesList />
  </section>
  <section class="relative bg-[var(--third-background)] py-[35px] pb-[35px] lg:px-[70px] lg:py-[40px] max-md:px-[20px] md:px-[35px]">
    <TheBuildingsLayer />
  </section>
</template>
