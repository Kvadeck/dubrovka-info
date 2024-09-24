<script setup lang="ts">
import { useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})
const attrs = useAttrs()
</script>

<template>
  <a class="h-[50px] w-fit flex items-center gap-[10px] whitespace-nowrap rounded-60px bg-[var(--third-color)] px-[25px] py-[12px] text-[22px] color-black decoration-none" v-bind="attrs" href="#">
    <div><slot /></div>
    <div class="mt-[2px]">></div>
  </a>
</template>