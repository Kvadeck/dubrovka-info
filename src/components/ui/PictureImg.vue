<script setup lang="ts">
defineProps<{
  id: number
  large: string
  medium: string
}>()
</script>

<template>
  <picture>
    <source :srcset="large" media="(min-width: 768px)">
    <source :srcset="medium" media="(max-width: 768px)">
    <img class="h-auto max-w-full" src="https://placehold.co/1024x768" :alt="`picture_${id}`">
  </picture>
</template>
