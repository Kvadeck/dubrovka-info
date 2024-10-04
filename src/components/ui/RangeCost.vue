<script setup lang="ts">
import { ref } from 'vue'
import { MAX_COST_PRICE, MIN_COST_PRICE } from '@/config/constants'

const emit = defineEmits<{
  changeCost: [cost: { min: string, max: string }]
}>()

const min = MIN_COST_PRICE
const max = MAX_COST_PRICE

const rangeVal = ref(MAX_COST_PRICE / 2)

function setValues(event: Event) {
  const target = event.target as HTMLInputElement
  rangeVal.value = (
    ((Number(target.value) - Number(target.min)) / (Number(target.max) - Number(target.min))) * 100
  )
  emit('changeCost', { min: target.min, max: target.value })
}
</script>

<template>
  <input :style="{ background: `linear-gradient(to right, var(--secondary-gradient) ${rangeVal}%, var(--four-color) ${rangeVal}%)` }" class="range-cost w-full" type="range" :value="rangeVal" name="volume" :min="min" :max="max" @input="setValues">
</template>

<style scoped>
.range-cost {
  -webkit-appearance: none;
  appearance: none;
  border-radius: 5px;
  outline: none;
  transition: background 0.3s ease-in-out;
}

.range-cost::-webkit-slider-runnable-track {
  height: 4px;
  -webkit-appearance: none;
}

.range-cost::-webkit-slider-thumb {
  width: 20px;
  -webkit-appearance: none;
  height: 20px;
  background: var(--secondary-gradient);
  border-radius: 50%;
  margin-top: -7px;
}
.range-cost::before {
  position: absolute;
  content: '';
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 50%;
  background-color: var(--secondary-gradient);
  margin-top: -7px;
  margin-left: -19px;
}
</style>
