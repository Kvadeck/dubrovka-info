<template>
  <li class="gap-[19px]] flex flex-col pb-[19px]">
    <div class="lg:pb-[12px]">
      <span class="relative text-[24px] color-black font-500 uppercase lg:text-[36px] lg:leading-[45px]">
        <slot name="title" />
      </span>
    </div>
    <span class="pb-[36px] lg:text-[18px]">
      <slot name="description" />
    </span>
    <span class="custom-border-gradient" />
  </li>
</template>
