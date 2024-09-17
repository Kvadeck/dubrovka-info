<script setup lang="ts">
import QualityItem from '@/components/jk-dubrovka/QualityItem.vue'
import { qualityList } from '@/config/constants'
</script>

<template>
  <span class="custom-border-gradient" />
  <ul v-for="qualityItem in qualityList" :key="qualityItem.title" class="list-none pl-0 pt-[27px]">
    <QualityItem>
      <template #title>
        {{ qualityItem.title }}
      </template>
      <template #description>
        {{ qualityItem.description }}
      </template>
    </QualityItem>
  </ul>
</template>

<style scoped>

</style>
