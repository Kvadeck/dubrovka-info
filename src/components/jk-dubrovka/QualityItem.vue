<script setup lang="ts">
import QualityTitle from '@/components/jk-dubrovka/QualityTitle.vue'
</script>

<template>
  <li class="gap-[19px]] flex flex-col pb-[19px]">
    <QualityTitle class="lg:pb-[20px]">
      <slot name="title" />
    </QualityTitle>
    <span class="pb-[36px] text-[18px]">
      <slot name="description" />
    </span>
    <span class="custom-border-gradient" />
  </li>
</template>

<style scoped>

</style>
