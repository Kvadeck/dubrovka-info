<script setup lang="ts">
import type { addressItem } from '@/config/constants'
import { formatFlatPrice } from '@/utils/main'

interface Props {
  buildings: addressItem[]
}

defineProps<Props>()
</script>

<template>
  <div class="custom-circle-plus relative flex flex-col rounded-[22px] bg-white px-[20px] lg:h-[380px] md:max-w-[470px] md:min-w-[280px] lg:px-[30px] lg:pb-[30px] lg:pt-[50px] md:pb-[20px]">
    <div class="text-center color-[var(--secondary-color)] font-500 max-md:my-[20px] lg:mb-[46px] lg:ml-5 md:mt-[20px] lg:text-[28px]">
      ЖК «Дубровка»
    </div>
    <div />
    <div class="grid grid-cols-[15%_40%_40%] mb-[10px] justify-center whitespace-nowrap text-center color-[var(--text-primary-color)] lg:gap-[5px] lg:text-[18px]">
      <div>Тип</div>
      <div>Стоимость</div>
      <div>В продаже</div>
    </div>
    <div class="relative grid grid-cols-[15%_40%_40%] max-h-[200px] justify-center gap-[5px] overflow-y-auto text-center lg:max-h-[180px] lg:text-[18px] md:text-[14px]">
      <template v-for="item in buildings" :key="item.address">
        <template v-for="el in item.items" :key="el.type">
          <div>{{ el.type }}</div>
          <div class="whitespace-nowrap">
            от {{ formatFlatPrice(el.price) }} ₽
          </div>
          <div>
            {{ el.at_sale }}
          </div>
        </template>
      </template>
    </div>
  </div>
</template>
