<script setup lang="ts">
import { useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false,
})
const attrs = useAttrs()
</script>

<template>
  <a class="custom-gradient h-[40px] flex items-center justify-center gap-[12px] whitespace-nowrap rounded-60px px-[24px] py-[18px] text-lg color-white uppercase decoration-none" v-bind="attrs" href="#">
    Выбрать квартиру
  </a>
</template>
