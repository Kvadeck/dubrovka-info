<script setup lang="ts">
import the360 from '@/assets/img/360.svg'
import document from '@/assets/img/document.svg'
import metro from '@/assets/img/metro.svg'
</script>

<template>
  <div class="flex flex-wrap gap-2xl lg:gap-10">
    <div class="flex gap-3 items-center">
      <img class="-mt-1" :src="the360" alt="360_icon">
      <span class="text-lg color-white whitespace-nowrap">Панорама 360</span>
    </div>
    <div class="flex gap-3 items-center">
      <img class="-mt-1" :src="document" alt="document_icon">
      <span class="text-lg color-white whitespace-nowrap">Буклет</span>
    </div>
    <div class="flex gap-3 items-center">
      <img class="-mt-1" :src="metro" alt="metro_icon">
      <span class="text-lg lg:text-2xl uppercase color-white">Ольховая</span>
    </div>
  </div>
</template>
