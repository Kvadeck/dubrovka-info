<template>
  <div class="custom-bg-image min-h-[500px] bg-[var(--primary-color)] bg-center lg:min-h-[500px]">
    <div class="p-[10%]">
      <div class="animate__animated animate__fadeInDown custom-gradient-text break-all pb-[20px] text-[24px] font-500 uppercase lg:text-[36px]">
        <slot name="title" />
      </div>
      <div class="animate__animated animate__fadeInUp max-h-[350px] overflow-y-auto pr-3 text-[18px] color-white">
        <slot name="description" />
      </div>
    </div>
  </div>
</template>
