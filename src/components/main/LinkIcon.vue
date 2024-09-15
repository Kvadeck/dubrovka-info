<script setup lang="ts">
import { useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})

defineProps<{
  label: string
}>()

const attrs = useAttrs()
</script>

<template>
  <div class="relative flex items-center gap-2">
    <slot />
    <span v-bind="attrs" class="whitespace-nowrap text-4 color-white lg:text-5">{{ label }}</span>
  </div>
</template>
