<script setup lang="ts">
import mark from '@/assets/img/mark.svg'
import the360 from '@/assets/img/360.svg'
import document from '@/assets/img/document.svg'
import metro from '@/assets/img/metro.svg'
</script>

<template>
  <div class="information-wrapper">
    <div class="address-point">
      <img class="address-point-mark" :src="mark" alt="mark_icon">
      <span class="address-point-text">Новая москва</span>
    </div>
    <div class="additional-information">
      <div class="additional-information-inner">
        <img class="address-point-mark" :src="the360" alt="360_icon">
        <span class="additional-text">Панорама 360</span>
      </div>
      <div class="additional-information-inner">
        <img class="address-point-mark" :src="document" alt="document_icon">
        <span class="additional-text">Буклет</span>
      </div>
      <div class="additional-information-inner">
        <img class="address-point-mark" :src="metro" alt="mark_icon">
        <span class="address-point-text">Ольховая</span>
      </div>
    </div>
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

.address-point {
  position: relative;
  display: flex;
  gap: 10px;
  align-items: center;
}
.additional-information-inner {
  display: flex;
  gap: 10px;
  align-items: center;
}
.additional-information {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
}
.address-point-mark {
  margin-top: -5px;
}

.address-point-text {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--white);
}

.additional-text {
  font-size: 18px;
  line-height: 24px;
  color: var(--white);
  white-space: nowrap;
}

@media (min-width: 1280px) {
  .information-wrapper {
    display: flex;
  }
}
</style>
