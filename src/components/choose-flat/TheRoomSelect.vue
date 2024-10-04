<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  changeRoom: [room: string]
}>()

const activeBtns = ref<number[]>([])

function setActiveBtn(n: number) {
  emit('changeRoom', n.toString())
  if (activeBtns.value.includes(n)) {
    activeBtns.value = activeBtns.value.filter(c => c !== n)
  }
  else {
    activeBtns.value.push(n)
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div class="uppercase lg:mb-[15px] lg:text-[28px] md:color-white">
      Комнаты
    </div>
    <div class="gap-[5px] max-lg:grid max-lg:grid-cols-[minmax(50px,95px)_minmax(50px,95px)] lg:flex">
      <div v-for="n in 4" :key="n" :class="{ 'active-flat-btn': activeBtns.includes(n) }" class="w-full cursor-pointer border-[1px] border-[var(--four-color)] rounded-[50px] border-solid bg-[white] bg-white/15 text-center lg:h-[63px] lg:pt-[8px] lg:text-[28px] md:color-white" @click="setActiveBtn(n)">
        {{ n }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.active-flat-btn {
  text-decoration-line: underline;
  text-underline-offset: 5px;
}
</style>
