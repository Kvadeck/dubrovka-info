<script setup lang="ts">
import ComfortPlans from '@/components/main/ComfortPlans.vue'
import { useActiveBreakpoint } from '@/composables/useActiveBreakpoint'
import { slideImages } from '@/config/constants'

defineProps<{
  slideNumber: number
}>()
const { activeBreakpoint } = useActiveBreakpoint()
</script>

<template>
  <div class="relative flex items-center gap-[27px] xl:items-end">
    <div v-if="activeBreakpoint !== 'sm'">
      <ComfortPlans />
    </div>
    <div class="custom-gradient-text flex items-center uppercase lg:text-[36px]">
      {{ slideNumber }}/{{ slideImages.length }}
    </div>
  </div>
</template>
