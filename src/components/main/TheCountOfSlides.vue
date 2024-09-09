<script setup lang="ts">
import ComfortPlans from '@/components/main/ComfortPlans.vue'

export interface TheCountOfSlidesProps {
  slide: number
}
const props = defineProps<TheCountOfSlidesProps>()
</script>

<template>
  <div class="count-of-slides">
    <div class="comfort-plans-inner">
      <ComfortPlans />
    </div>
    <div class="count-numbers">
      {{ props.slide }}/3
    </div>
  </div>
</template>

<style scoped>
.count-of-slides {
  position: relative;
  display: flex;
  align-items: center;
  gap: 27px;
}
.comfort-plans-inner {
  display: block;
}
.count-numbers {
  font-size: 16px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background: linear-gradient(180deg, var(--primary-gradient) 0%, var(--secondary-gradient) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
@media (min-width: 1500px) {
  .count-of-slides {
    align-items: end;
  }
}
@media (min-width: 1280px) {
  .count-numbers {
    font-size: 36px;
    line-height: 40px;
  }
}
@media (max-width: 768px) {
  .comfort-plans-inner {
    display: none;
  }
}
</style>
