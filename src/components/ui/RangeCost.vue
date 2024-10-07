<script setup lang="ts">
import { onMounted } from 'vue'
import RangeSlider from '@spreadtheweb/multi-range-slider'

onMounted(() => {
  new RangeSlider('.range-slider', {
    values: [0, 100],
    min: 0,
    max: 100,
    step: 1,
    pointRadius: 11,
    railHeight: 6,
    trackHeight: 6,
    colors: {
      points: '#C29A5C',
      rail: '#E5E5E5',
      tracks: '#C29A5C',
    },
  }).onChange(val => console.log(val))
})
</script>

<template>
  <div class="range-slider" />
</template>

<style>
</style>
