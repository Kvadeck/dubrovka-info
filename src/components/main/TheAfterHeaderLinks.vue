<script setup lang="ts">
import AddressLink from '@/components/main/AddressLink.vue'
import AdditionalLinks from '@/components/main/AdditionalLinks.vue'
import { useActiveBreakpoint } from '@/composables/useActiveBreakpoint'

const { activeBreakpoint } = useActiveBreakpoint()
</script>

<template>
  <div v-if="activeBreakpoint === 'lg'" class="after-header-links relative flex flex-wrap justify-between px-[4.375rem] py-8">
    <AddressLink />
    <AdditionalLinks />
  </div>
</template>

<style scoped>

</style>
