<script setup lang="ts">
import AddressLink from '@/components/main/AddressLink.vue'
import AdditionalLinks from '@/components/main/AdditionalLinks.vue'
import { useActiveBreakpoint } from '@/composables/useActiveBreakpoint'

const { activeBreakpoint } = useActiveBreakpoint()
</script>

<template>
  <div v-if="activeBreakpoint === 'lg'" class="after-header-links relative flex-wrap flex justify-between py-8 px-[4.375rem]">
    <AddressLink />
    <AdditionalLinks />
  </div>
</template>

<style scoped>

</style>
