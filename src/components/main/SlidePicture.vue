<script setup lang="ts">
import imageDefault from '@/assets/img/slides/image-default.jpg'

defineProps<{
  id: number
  large: string
  medium: string
}>()
</script>

<template>
  <div>
    <picture>
      <source :srcset="large" media="(min-width: 768px)">
      <source :srcset="medium" media="(max-width: 768px)">
      <img class="h-auto max-w-full" :src="imageDefault" :alt="`Slide_${id}`">
    </picture>
  </div>
</template>
