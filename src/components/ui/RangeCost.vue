<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { COST_STEP, MAX_COST_PRICE, MIN_COST_PRICE } from '@/config/constants'

interface changePriceEmit {
  min: number
  max: number
}

const emit = defineEmits<{
  (e: 'changePrice', minmax: changePriceEmit): void
  (e: 'changeMaxPrice', value: number): void
  (e: 'changeMinPrice', value: number): void
}>()

const min = ref(Number(MIN_COST_PRICE))
const max = ref(Number(MAX_COST_PRICE))

const definedMin = ref(0)
const definedMax = ref(Number(MAX_COST_PRICE))

const minThumbStyle = ref(0)
const maxThumbStyle = ref(0)

function minTrigger() {
  definedMin.value = Math.min(definedMin.value, definedMax.value - COST_STEP)
  minThumbStyle.value = ((definedMin.value - min.value) / (max.value - min.value)) * 100
  emit('changeMinPrice', definedMin.value)
}

function maxTrigger() {
  definedMax.value = Math.max(definedMax.value, definedMin.value + COST_STEP)
  maxThumbStyle.value = 100 - (((definedMax.value - min.value) / (max.value - min.value)) * 100)
  emit('changeMaxPrice', definedMax.value)
}

onMounted(() => {
  minTrigger()
  maxTrigger()
})
</script>

<template>
  <div class="flex items-center md:justify-center">
    <div class="relative max-w-sm w-full max-lg:mt-[20px] md:max-w-xl">
      <div>
        <input
          v-model="definedMin"
          :min="min"
          :max="max"
          type="range"
          step="100"
          class="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
          @input="minTrigger"
          @change="emit('changePrice', { min: definedMin, max: definedMax })"
        >
        <input
          v-model="definedMax"
          :min="min"
          :max="max"
          type="range"
          step="100"
          class="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
          @input="maxTrigger"
          @change="emit('changePrice', { min: definedMin, max: definedMax })"
        >
        <div class="relative z-10 h-2">
          <div class="absolute bottom-0 left-0 right-0 top-0 z-10 rounded-md bg-[var(--four-color)]" />
          <div :style="{ right: `${maxThumbStyle}%`, left: `${minThumbStyle}%` }" class="absolute bottom-0 top-0 z-20 rounded-md bg-[var(--secondary-gradient)]" />
          <div :style="{ left: `${minThumbStyle}%` }" class="absolute left-0 top-0 z-30 h-4 w-4 rounded-full bg-[var(--secondary-gradient)] -ml-1 -mt-[4px] lg:h-6 lg:w-6 lg:-mt-2" />
          <div :style="{ right: `${maxThumbStyle}%` }" class="absolute right-0 top-0 z-30 h-4 w-4 rounded-full bg-[var(--secondary-gradient)] -mr-3 -mt-[4px] lg:h-6 lg:w-6 lg:-mt-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type=range]::-webkit-slider-thumb {
  pointer-events: all;
  width: 24px;
  height: 24px;
  -webkit-appearance: none;
}
</style>
