<template>
  <li class="relative flex flex-col lg:pr-[40px] md:pr-[30px]">
    <div class="md:left-0" />
    <div class="pl-[15px] lg:pb-[20px]">
      <span class="custom-gradient-text relative text-[24px] color-black font-500 uppercase lg:text-[36px]">
        <slot name="title" />
      </span>
    </div><span class="pl-[15px] color-white lg:text-[18px]"><slot name="description" /></span>
    <div class="border-custom-right md:right-0" />
  </li>
</template>
