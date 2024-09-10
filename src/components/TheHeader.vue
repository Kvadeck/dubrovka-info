<script setup lang="ts">
import logo from '@/assets/img/logo.svg'
import TheMobileMenu from '@/components/TheMobileMenu.vue'
import { useActiveBreakpoint } from '@/composables/useActiveBreakpoint'
import ChooseFlatBtn from '@/components/UI/ChooseFlatBtn.vue'
import { navLinks } from '@/config/constants'

const { activeBreakpoint } = useActiveBreakpoint()
</script>

<template>
  <header class="relative grid h-[80px] items-center border-b border-white border-b-solid px-[30px] max-md:grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(4,1fr)] lg:h-[107px] md:gap-[15px] lg:px-[70px]">
    <div class="relative">
      <a href="#"><img class="w-[120px] lg:w-auto" :src="logo" alt="logo"></a>
    </div>
    <div v-if="activeBreakpoint === 'lg'" class="grid grid-cols-[repeat(5,1fr)] items-center gap-[15px] xl:gap-[53px]">
      <a v-for="item in navLinks" :key="item.label" class="header-menu-link whitespace-nowrap text-[18px] color-white uppercase decoration-none opacity-[0.8] transition-colors duration-200 hover:color-[var(--primary-link)]" :href="item.href">{{ item.label }}</a>
    </div>
    <ChooseFlatBtn v-if="activeBreakpoint !== 'sm'" class="h-[55px] max-lg:h-[33px]" />
    <div v-if="activeBreakpoint !== 'sm'" class="flex justify-end">
      <a class="whitespace-nowrap text-[24px] color-white font-600 decoration-none opacity-[0.8] transition-colors duration-200 hover:color-[var(--primary-link)]" href="#">
        +7 (495) 185-13-82
      </a>
    </div>
    <TheMobileMenu v-if="activeBreakpoint !== 'lg'" />
  </header>
</template>
