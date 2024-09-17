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
    <TheInfoBlock />
  </section>
</template>
