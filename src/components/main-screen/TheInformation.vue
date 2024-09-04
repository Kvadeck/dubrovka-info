<script setup lang="ts">
import AddressPoint from '@/components/main-screen/AddressPoint.vue'
import AdditionalPoints from '@/components/main-screen/AdditionalPoints.vue'
</script>

<template>
  <div class="information-wrapper">
    <AddressPoint />
    <AdditionalPoints />
  </div>
</template>

<style scoped>
.information-wrapper {
  position: relative;
  justify-content: space-between;
  padding: 35px 70px;
  flex-wrap: wrap;
  display: none;
}
@media (min-width: 1280px) {
  .information-wrapper {
    display: flex;
  }
}
</style>
