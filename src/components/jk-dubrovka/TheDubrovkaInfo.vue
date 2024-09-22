<script setup lang="ts">
import Title from '@/components/SectionTitle.vue'
import TheQualityList from '@/components/jk-dubrovka/TheQualityList.vue'
import QualitySlider from '@/components/jk-dubrovka/QualitySlider.vue'
</script>

<template>
  <div class="grid justify-center gap-[38px] lg:grid-cols-[minmax(200px,470px)_minmax(200px,880px)] md:grid-cols-[minmax(200px,280px)_minmax(200px,880px)] lg:gap-[130px] lg:px-[70px] max-md:px-[20px] md:px-[35px]">
    <div class="relative">
      <Title class="mb-[16px] block text-[32px] color-[var(--secondary-color)] font-bold uppercase lg:mb-[59px] lg:text-[56px]">
        ЖК «Дубровка»
      </Title>
      <BreakpointBlock :is-equal="true" breakpoint="sm">
        <QualitySlider />
      </BreakpointBlock>
      <TheQualityList />
    </div>
    <div class="relative">
      <BreakpointBlock :is-equal="false" breakpoint="sm">
        <QualitySlider />
      </BreakpointBlock>
    </div>
  </div>
</template>
