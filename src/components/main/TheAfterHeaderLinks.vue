<script setup lang="ts">
import AddressLink from '@/components/main/AddressLink.vue'
import AdditionalLinks from '@/components/main/AdditionalLinks.vue'
import { useActiveBreakpoint } from '@/composables/useActiveBreakpoint'

const { activeBreakpoint } = useActiveBreakpoint()
</script>

<template>
  <div v-if="activeBreakpoint === 'lg'" class="after-header-links">
    <AddressLink />
    <AdditionalLinks />
  </div>
</template>

<style scoped>
.after-header-links {
  position: relative;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  padding: 35px 70px;
}
</style>
