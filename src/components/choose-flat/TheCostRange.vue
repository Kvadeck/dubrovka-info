<script setup lang="ts">
import { ref } from 'vue'
import { formatDigitWithSpaces } from '@/utils/main'
import RangeCost from '@/components/ui/RangeCost.vue'
import { MAX_COST_PRICE, MIN_COST_PRICE } from '@/config/constants'

const emit = defineEmits<{
  (e: 'changePrice', minmax: changePriceEmit): void
}>()
const min = ref(MIN_COST_PRICE)
const max = ref(MAX_COST_PRICE)

interface changePriceEmit {
  min: number
  max: number
}

function updateMinPrice(value: number) {
  min.value = value.toString()
}

function updateMaxPrice(value: number) {
  max.value = value.toString()
}

function updatePrice(event: { min: number, max: number }) {
  emit('changePrice', event)
}
</script>

<template>
  <div class="flex flex-col">
    <span class="max-md:py-[20px] lg:pb-[30px] lg:text-[28px] md:color-white">
      Выберите необходимые параметры и этаж на плане
    </span>
    <span class="uppercase lg:mb-[15px] max-md:pb-[20px] lg:text-[28px] md:color-white">
      Стоимость
    </span>
    <div class="flex gap-[10px] lg:pb-[36px]">
      <div class="w-full flex select-none items-center whitespace-nowrap border-[1px] border-[var(--four-color)] rounded-[50px] border-solid bg-[white] bg-white/10 pl-[20px] lg:h-[63px] max-md:h-[40px] lg:text-[28px] md:color-white">
        {{ formatDigitWithSpaces(min) }}
      </div>
      <div class="w-full flex select-none items-center whitespace-nowrap border-[1px] border-[var(--four-color)] rounded-[50px] border-solid bg-[white] bg-white/10 pl-[20px] lg:h-[63px] lg:text-[28px] md:color-white">
        {{ formatDigitWithSpaces(max) }}
      </div>
    </div>
    <div class="relative max-md:px-[20px]">
      <RangeCost @change-price="updatePrice($event)" @change-min-price="updateMinPrice($event)" @change-max-price="updateMaxPrice($event)" />
    </div>
  </div>
</template>
