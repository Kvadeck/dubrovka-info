<script setup lang="ts">
import SectionItem from '@/components/SectionItem.vue'

interface Item {
  title: string
  description: string
}
defineProps<{
  items: Item[]
}>()
</script>

<template>
  <span class="custom-border-gradient" />
  <ul class="hide-last-border list-none pl-0 pt-[27px]">
    <SectionItem v-for="item in items" :key="item.title">
      <template #title>
        {{ item.title }}
      </template>
      <template #description>
        {{ item.description }}
      </template>
    </SectionItem>
  </ul>
</template>
