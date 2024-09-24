<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
import SectionList from '@/components/SectionList.vue'
import TheDubrovkaSlider from '@/components/dubrovka/TheDubrovkaSlider.vue'
import { dubrovkaList } from '@/config/constants'
</script>

<template>
  <div class="grid justify-center gap-[38px] lg:grid-cols-[minmax(200px,470px)_minmax(200px,880px)] md:grid-cols-[minmax(200px,280px)_minmax(200px,880px)] lg:gap-[130px] lg:px-[70px] max-md:px-[20px] md:px-[35px]">
    <div class="relative">
      <SectionTitle class="mb-[16px] text-[32px] color-[var(--secondary-color)] font-bold uppercase lg:mb-[59px] lg:text-[56px]">
        ЖК «Дубровка»
      </SectionTitle>
      <BreakpointBlock :is-equal="true" breakpoint="sm">
        <TheDubrovkaSlider />
      </BreakpointBlock>
      <SectionList :items="dubrovkaList" />
    </div>
    <div class="relative">
      <BreakpointBlock :is-equal="false" breakpoint="sm">
        <TheDubrovkaSlider />
      </BreakpointBlock>
    </div>
  </div>
</template>
