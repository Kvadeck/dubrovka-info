<script setup lang="ts">
import { ref } from 'vue'
import RangeCost from '@/components/ui/RangeCost.vue'
import { MAX_COST_PRICE, MIN_COST_PRICE } from '@/config/constants'
import { formatDigitWithSpaces } from '@/utils/main'

// const emit = defineEmits<{
//   changeCost: [room: string]
// }>()

const min = ref(formatDigitWithSpaces(MIN_COST_PRICE))
const max = ref(formatDigitWithSpaces(MAX_COST_PRICE))

function updateCostIntervals(event: { max: string }) {
  max.value = formatDigitWithSpaces(event.max)
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
      <div class="w-full flex select-none items-center border-[1px] border-[var(--four-color)] rounded-[50px] border-solid bg-[white] bg-white/10 pl-[20px] lg:h-[63px] max-md:h-[40px] lg:text-[28px] md:color-white">
        {{ min }}
      </div>
      <div class="w-full flex select-none items-center border-[1px] border-[var(--four-color)] rounded-[50px] border-solid bg-[white] bg-white/10 pl-[20px] lg:h-[63px] lg:text-[28px] md:color-white">
        {{ max }}
      </div>
    </div>
    <div class="relative max-md:px-[20px]">
      <RangeCost @change-cost="updateCostIntervals($event)" />
    </div>
  </div>
</template>

<style scoped>

</style>
