<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheInformation from '@/components/TheInformation.vue'
import TheSlider from "@/components/TheSlider.vue";
</script>

<template>
  <div class="wrapper">
    <TheHeader />
    <TheInformation />
    <TheSlider/>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: var(--black);
  height: 100vh;
}
</style>
