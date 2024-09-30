<script setup lang="ts">

</script>

<template>
  <div class="absolute bottom-[10%] left-[20%]">
    <div class="text-[28px] color-white uppercase lg:mb-[15px]">
      Комнаты
    </div>
    <div class="grid gap-[5px] lg:grid-cols-[repeat(4,1fr)]">
      <div v-for="n in 4" :key="n" class="h-[63px] w-[95px] cursor-pointer border-[1px] border-[var(--four-color)] rounded-[50px] border-solid bg-[white] bg-white/10 pt-[8px] text-center text-[28px] color-white">
        {{ n }}
      </div>
    </div>
  </div>
</template>
