<script setup lang="ts">
import the360 from '@/assets/img/360.svg'
import document from '@/assets/img/document.svg'
import metro from '@/assets/img/metro.svg'

const addLinks = [
  {
    label: 'Панорама 360',
    icon: the360,
  },
  {
    label: 'Буклет',
    icon: document,
  },
  {
    label: 'Ольховая',
    icon: metro,
  },
]
</script>

<template>
  <div class="flex flex-wrap gap-2xl lg:gap-10">
    <div v-for="item in addLinks" :key="item.label" class="flex items-center gap-3">
      <img class="-mt-1" :src="item.icon" :alt="item.label">
      <span class="whitespace-nowrap text-lg color-white">{{ item.label }}</span>
    </div>
  </div>
</template>
