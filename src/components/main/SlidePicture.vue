<script setup lang="ts">
import imageDefault from '@/assets/img/slides/image-default.jpg'

export interface TheCountOfSlidesProps {
  id: number
  large: string
  medium: string
}
const props = defineProps<TheCountOfSlidesProps>()
</script>

<template>
  <div class="carousel__item">
    <picture>
      <source :srcset="props.large" media="(min-width: 768px)">
      <source :srcset="props.medium" media="(max-width: 768px)">
      <img class="h-auto max-w-full" :src="imageDefault" :alt="`Slide_${props.id}`">
    </picture>
  </div>
</template>
