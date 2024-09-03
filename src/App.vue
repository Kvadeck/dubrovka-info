<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheInformation from '@/components/main-screen/TheInformation.vue'
import TheSlider from '@/components/main-screen/TheSlider.vue'
import TheBottomText from "@/components/main-screen/TheBottomText.vue";
import TheCountOfSlides from "@/components/main-screen/TheCountOfSlides.vue";
</script>

<template>
  <div class="wrapper">
    <TheHeader />
    <TheInformation />
    <TheSlider />

    <div class="bottom-inner">
      <TheBottomText/>
      <TheCountOfSlides/>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  min-height: fit-content;
}
.wrapper:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/img/background.png');
  background-color: var(--primary-background);
  background-size: cover;
  background-position: center;
  pointer-events: none;
}
.bottom-inner {
  display: flex;
  padding: 0 70px;
  margin-top: -70px;
  justify-content: space-between;
}


</style>
