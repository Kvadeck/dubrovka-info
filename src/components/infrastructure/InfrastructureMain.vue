<script setup lang="ts">
import { ref } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { infrastructureImages, infrastructureList, infrastructureTabItems } from '@/config/constants'
import SectionList from '@/components/SectionList.vue'
import Tabs from '@/components/ui/Tabs.vue'
import InfrastructureMobileNav from '@/components/infrastructure/InfrastructureMobileNav.vue'

const currentTab = ref(0)

function updateTab(id: number) {
  currentTab.value = id
}
</script>

<template>
  <div class="relative grid lg:grid-cols-[minmax(200px,1094px)_auto] max-lg:grid-rows-[auto_auto_minmax(100px,382px)] lg:gap-[70px]">
    <BreakpointBlock :is-equal="false" breakpoint="lg">
      <SectionTitle class="mb-[20px] break-all text-[32px] color-[var(--secondary-color)] font-bold uppercase lg:mb-[59px] lg:text-[56px]">
        Инфраструктура
      </SectionTitle>
    </BreakpointBlock>
    <BreakpointBlock :is-equal="false" breakpoint="lg">
      <InfrastructureMobileNav :items="infrastructureList" />
    </BreakpointBlock>
    <div class="relative">
      <div :key="currentTab" class="animate__animated animate__fadeIn h-full w-full bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url('${infrastructureImages[currentTab].image}')` }" />
    </div>
    <div class="relative">
      <BreakpointBlock :is-equal="true" breakpoint="lg">
        <SectionTitle class="mb-[16px] break-all text-[32px] color-[var(--secondary-color)] font-bold uppercase lg:mb-[59px] lg:text-[56px]">
          Инфраструктура
        </SectionTitle>
      </BreakpointBlock>
      <BreakpointBlock :is-equal="true" breakpoint="lg">
        <SectionList :items="infrastructureList" />
      </BreakpointBlock>
    </div>
  </div>
  <Tabs class="grid-cols-[repeat(2,1fr)] gap-[15px] pt-[40px] md:grid-cols-[repeat(6,1fr)] lg:pt-[40px]" :current-tab="currentTab" :items="infrastructureTabItems" :change-event="updateTab" />
</template>
