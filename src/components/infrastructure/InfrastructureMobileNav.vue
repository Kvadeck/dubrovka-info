<script setup lang="ts">
interface Item {
  title: string
  description: string
}
defineProps<{
  items: Item[]
}>()
</script>

<template>
  <ul class="hide-last-border grid grid-cols-[repeat(1,1fr)] list-none gap-[26px] pb-[30px] pl-0 md:grid-cols-[repeat(3,1fr)]">
    <li v-for="(item) in items" :key="item.title" class="relative">
      <div class="relative text-[24px] color-black font-500 uppercase max-md:pl-[20px] md:pr-[26px] lg:text-[36px]">
        {{ item.title }}
      </div>
      <div class="max-md:pl-[20px] md:pr-[26px]">
        {{ item.description }}
      </div>
      <div class="border-right md:right-0" />
    </li>
  </ul>
</template>
