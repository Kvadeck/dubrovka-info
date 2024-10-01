<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col">
    <div class="uppercase lg:mb-[15px] lg:text-[28px] md:color-white">
      Комнаты
    </div>
    <div class="gap-[5px] max-lg:grid max-lg:grid-cols-[minmax(50px,95px)_minmax(50px,95px)] lg:flex">
      <div v-for="n in 4" :key="n" class="w-full cursor-pointer border-[1px] border-[var(--four-color)] rounded-[50px] border-solid bg-[white] bg-white/10 text-center lg:h-[63px] lg:pt-[8px] lg:text-[28px] md:color-white">
        {{ n }}
      </div>
    </div>
  </div>
</template>
