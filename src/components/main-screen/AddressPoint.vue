<script setup lang="ts">
import mark from '@/assets/img/mark.svg'
</script>

<template>
  <div class="address-point">
    <img class="address-point-mark" :src="mark" alt="mark_icon">
    <span class="address-point-text">Новая москва</span>
  </div>
</template>

<style scoped>
.address-point {
  position: relative;
  display: flex;
  gap: 10px;
  align-items: center;
}
.address-point-mark {
  margin-top: -5px;
}
.address-point-text {
  font-size: 15px;
  line-height: 27px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--white);
}
@media (min-width: 1280px) {
  .address-point-text {
    font-size: 24px;
  }
}
</style>
