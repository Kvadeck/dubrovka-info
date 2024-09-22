<script setup lang="ts">
import AdditionalLinks from '@/components/main/AdditionalLinks.vue'
import LinkIcon from '@/components/main/LinkIcon.vue'
import mark from '@/assets/img/mark.svg'
</script>

<template>
  <BreakpointBlock :is-equal="true" breakpoint="lg">
    <div class="relative flex flex-wrap justify-between px-[4.375rem] py-8">
      <LinkIcon class="tracking-wider uppercase" label="Новая москва">
        <img class="-mt-1" :src="mark" alt="Новая москва">
      </LinkIcon>
      <AdditionalLinks />
    </div>
  </BreakpointBlock>
</template>
