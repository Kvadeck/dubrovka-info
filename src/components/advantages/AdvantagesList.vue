<script setup lang="ts">
import AdvantagesItem from '@/components/advantages/AdvantagesItem.vue'
import { advantagesList } from '@/config/constants'
</script>

<template>
  <div class="custom-bg-image min-h-[330px] w-full flex items-center bg-[var(--primary-color)] bg-center px-[20px] py-[26px] lg:px-[70px] md:px-[35px]">
    <ul class="advantages-list grid w-full list-none gap-[30px] pl-0 lg:grid-cols-[repeat(5,1fr)] md:grid-cols-[repeat(3,1fr)] lg:gap-[40px] md:gap-[30px]">
      <AdvantagesItem v-for="(item) in advantagesList" :key="item.title">
        <template #title>
          {{ item.title }}
        </template>
        <template #description>
          {{ item.description }}
        </template>
      </AdvantagesItem>
    </ul>
  </div>
</template>
