<script setup lang="ts">
import { useActiveBreakpoint } from '@/composables/useActiveBreakpoint'

defineProps<{
  breakpoint: string
  isEqual: boolean
}>()

const { activeBreakpoint } = useActiveBreakpoint()
</script>

<template>
  <template v-if="isEqual">
    <template v-if="activeBreakpoint === breakpoint">
      <slot />
    </template>
  </template>
  <template v-else>
    <template v-if="activeBreakpoint !== breakpoint">
      <slot />
    </template>
  </template>
</template>

<style scoped>

</style>
