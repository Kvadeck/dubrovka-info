<script setup lang="ts">
import AdditionalLinks from '@/components/main/AdditionalLinks.vue'
import ComfortPlans from '@/components/main/ComfortPlans.vue'
import ChooseFlatBtn from '@/components/ui/ChooseFlatBtn.vue'

import mark from '@/assets/img/mark.svg'
import LinkIcon from '@/components/main/LinkIcon.vue'
import Title from '@/components/SectionTitle.vue'
</script>

<template>
  <div>
    <BreakpointBlock breakpoint="md" :is-equal="true">
      <LinkIcon class="tracking-wider uppercase" label="Новая москва">
        <img class="-mt-1" :src="mark" alt="Новая москва">
      </LinkIcon>
    </BreakpointBlock>

    <Title class="text-[50px] color-white leading-[50px] lg:whitespace-nowrap lg:text-[80px] max-md:text-[48px] xl:text-[100px] lg:leading-[95px] max-md:leading-[48px]">
      Квартиры и пентхаусы<br>бизнес-класса
    </Title>
    <BreakpointBlock breakpoint="sm" :is-equal="true">
      <div class="relative py-4">
        <ComfortPlans />
      </div>
      <div class="relative max-w-[316px]">
        <ChooseFlatBtn />
      </div>
    </BreakpointBlock>
    <BreakpointBlock breakpoint="lg" :is-equal="false">
      <div class="relative py-7">
        <AdditionalLinks />
      </div>
    </BreakpointBlock>
  </div>
</template>
