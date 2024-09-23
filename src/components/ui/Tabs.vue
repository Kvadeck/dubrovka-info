<script setup lang="ts">
import { inject } from 'vue'
import TabItem from '@/components/ui/TabItem.vue'

interface Items {
  title: string
}

defineProps<{
  items: Items[]
  currentTab: number
}>()

const updateTab = inject('updateTab') as (id: number) => void
</script>

<template>
  <div class="grid gap-y-[28px]">
    <TabItem v-for="(item, index) in items" :id="index" :key="item.title" :current-tab="currentTab" :event="updateTab">
      {{ item.title }}
    </TabItem>
  </div>
</template>

<style scoped>

</style>
