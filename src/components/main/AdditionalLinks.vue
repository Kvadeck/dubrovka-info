<script setup lang="ts">
import the360 from '@/assets/img/360.svg'
import document from '@/assets/img/document.svg'
import metro from '@/assets/img/metro.svg'
import LinkIcon from '@/components/main/LinkIcon.vue'

const iconLinks = [
  {
    label: 'Панорама 360',
    icon: the360,
  },
  {
    label: 'Буклет',
    icon: document,
  },
  {
    label: 'Ольховая',
    icon: metro,
    class: 'tracking-wider uppercase',
  },
]
</script>

<template>
  <div class="flex flex-wrap gap-2xl lg:gap-10">
    <LinkIcon v-for="item in iconLinks" :key="item.label" :label="item.label" :class="item.class">
      <img class="-mt-1" :src="item.icon" :alt="item.label">
    </LinkIcon>
  </div>
</template>
