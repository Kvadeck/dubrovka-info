<script setup lang="ts">
import RangeCost from '@/components/ui/RangeCost.vue'
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
        от
      </div>
      <div class="w-full flex select-none items-center border-[1px] border-[var(--four-color)] rounded-[50px] border-solid bg-[white] bg-white/10 pl-[20px] lg:h-[63px] lg:text-[28px] md:color-white">
        до
      </div>
    </div>
    <div class="max-md:px-[20px]">
      <RangeCost />
    </div>
  </div>
</template>

<style scoped>

</style>
