<script setup lang="ts">
import LinkIcon from '@/components/main/LinkIcon.vue'
import { iconLinks } from '@/config/constants'
</script>

<template>
  <div class="flex flex-wrap gap-2xl lg:gap-10">
    <LinkIcon v-for="{ label, icon, class: itemClass = '' } in iconLinks" :key="label" :label="label" :class="itemClass">
      <img class="-mt-1" :src="icon" :alt="label">
    </LinkIcon>
  </div>
</template>
