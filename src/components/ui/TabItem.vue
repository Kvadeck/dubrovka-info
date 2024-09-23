<script setup lang="ts">
defineProps<{
  id: number
  currentTab: number
  event: (id: number) => void
}>()
</script>

<template>
  <div class="relative cursor-pointer" @click="event(id)">
    <div class="pb-[13px] font-500 font-bold uppercase opacity-[0.4] sm:pb-[20px]" :class="[{ 'opacity-[1]': id === currentTab }]">
      <slot />
    </div>
    <span :class="[{ 'bg-none bg-[var(--secondary-color)]': id === currentTab }]" class="custom-border-gradient" />
  </div>
</template>

<style scoped>

</style>
