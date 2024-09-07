<script setup lang="ts">
import AdditionalLinks from '@/components/main/AdditionalLinks.vue'
import { useActiveBreakpoint } from '@/composables/useActiveBreakpoint'
import LinkIcon from '@/components/main/LinkIcon.vue'
import mark from '@/assets/img/mark.svg'

const { activeBreakpoint } = useActiveBreakpoint()
</script>

<template>
  <div v-if="activeBreakpoint === 'lg'" class="after-header-links relative flex flex-wrap justify-between px-[4.375rem] py-8">
    <LinkIcon class="tracking-wider uppercase" label="Новая москва">
      <img class="-mt-1" :src="mark" alt="Новая москва">
    </LinkIcon>
    <AdditionalLinks />
  </div>
</template>

<style scoped>

</style>
