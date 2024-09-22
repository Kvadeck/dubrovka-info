<script setup lang="ts">
import ComfortPlans from '@/components/main/ComfortPlans.vue'
import { slideImages } from '@/config/constants'

defineProps<{
  slideNumber: number
}>()
</script>

<template>
  <div class="relative flex items-center gap-[27px] xl:items-end">
    <BreakpointBlock breakpoint="sm" :is-equal="false">
      <ComfortPlans />
    </BreakpointBlock>

    <div class="custom-gradient-text flex items-center uppercase lg:text-[36px]">
      {{ slideNumber }}/{{ slideImages.length }}
    </div>
  </div>
</template>
