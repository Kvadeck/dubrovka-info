<template>
  <div class="custom-bg-image bg-[var(--primary-color)] bg-center lg:min-h-[600px] md:min-h-[340px]">
    <div class="p-[10%] lg:p-[10%]">
      <div class="custom-gradient-text break-all pb-[20px] text-[24px] font-500 uppercase lg:text-[36px]">
        <slot name="title" />
      </div>
      <div class="text-[18px] color-white">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>
