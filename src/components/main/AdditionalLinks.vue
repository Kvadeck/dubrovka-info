<script setup lang="ts">
import LinkIcon from '@/components/main/LinkIcon.vue'
import { iconLinks } from '@/config/constants'
</script>

<template>
  <div class="flex flex-wrap gap-2xl lg:gap-10">
    <LinkIcon v-for="item in iconLinks" :key="item.label" :label="item.label" :class="item.class">
      <img class="-mt-1" :src="item.icon" :alt="item.label">
    </LinkIcon>
  </div>
</template>
