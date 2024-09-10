<script setup lang="ts">
import AdditionalLinks from '@/components/main/AdditionalLinks.vue'
import ComfortPlans from '@/components/main/ComfortPlans.vue'
import ChooseFlatBtn from '@/components/UI/ChooseFlatBtn.vue'
import { useActiveBreakpoint } from '@/composables/useActiveBreakpoint'
import mark from '@/assets/img/mark.svg'
import LinkIcon from '@/components/main/LinkIcon.vue'

const { activeBreakpoint } = useActiveBreakpoint()
</script>

<template>
  <div>
    <LinkIcon v-if="activeBreakpoint === 'md'" class="tracking-wider uppercase" label="Новая москва">
      <img class="-mt-1" :src="mark" alt="Новая москва">
    </LinkIcon>
    <span class="custom-font-family relative text-[50px] color-white leading-[50px] lg:whitespace-nowrap lg:text-[80px] max-md:text-[48px] xl:text-[100px] lg:leading-[95px] max-md:leading-[48px]">
      Квартиры и пентхаусы<br>бизнес-класса
    </span>
    <div v-if="activeBreakpoint === 'sm'" class="relative py-4">
      <ComfortPlans />
    </div>
    <div v-if="activeBreakpoint === 'sm'" class="relative max-w-[316px]">
      <ChooseFlatBtn />
    </div>
    <div v-if="activeBreakpoint !== 'lg'" class="relative py-7">
      <AdditionalLinks />
    </div>
  </div>
</template>
