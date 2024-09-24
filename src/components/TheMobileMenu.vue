<script setup lang="ts">
import { ref, watch } from 'vue'
import ChooseFlatBtn from '@/components/ui/ChooseFlatBtn.vue'
import TheBurgerLogo from '@/components/TheBurgerLogo.vue'
import TheCrossLogo from '@/components/TheCrossLogo.vue'
import { navLinks } from '@/config/constants'

const isPanelOpen = ref(false)

function togglePanel() {
  isPanelOpen.value = !isPanelOpen.value
}

watch(isPanelOpen, () => {
  document.body.style.overflow = isPanelOpen.value ? 'hidden' : ''
})
</script>

<template>
  <TheBurgerLogo @click.prevent="togglePanel" />
  <div v-if="isPanelOpen" class="fixed left-0 top-0 z-8 h-full w-full bg-black bg-opacity-50" @click="togglePanel" />

  <div class="fixed left-[-300px] top-0 z-9 h-full w-[300px] bg-[url('@/assets/img/background.png')] bg-[var(--primary-color)] bg-cover bg-center p-[20px] color-white transition-left duration-400" :class="[{ 'left-0': isPanelOpen }]">
    <TheCrossLogo @click.prevent="togglePanel" />
    <div class="mt-[46px] flex flex-col gap-[22px] text-center">
      <a v-for="link in navLinks" :key="link.label" class="text-[24px] color-white uppercase decoration-none opacity-[0.8]" :href="link.href">{{ link.label }}</a>
      <ChooseFlatBtn>Выбрать квартиру</ChooseFlatBtn>
      <a class="mt-[16px] text-[24px] color-white decoration-none opacity-[0.8]" href="#">+7 (495) 185-13-82</a>
    </div>
  </div>
</template>
