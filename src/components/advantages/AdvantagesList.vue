<script setup lang="ts">
import AdvantagesItem from '@/components/advantages/AdvantagesItem.vue'
import { advantagesList } from '@/config/constants'
</script>

<template>
  <div class="custom-bg-image min-h-[330px] w-full flex items-center bg-[var(--primary-color)] bg-center px-[20px] py-[26px] lg:px-[70px] md:px-[35px]">
    <ul class="advantages-list grid w-full list-none gap-[30px] pl-0 lg:grid-cols-[21%_19%_9%_16%_20%] md:grid-cols-[33%_33%_28%] lg:gap-[40px] md:gap-[30px]">
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
