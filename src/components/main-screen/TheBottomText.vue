<script setup lang="ts">
import AddressPoint from '@/components/main-screen/AddressPoint.vue'
import AdditionalPoints from '@/components/main-screen/AdditionalPoints.vue'
import ComfortPlans from '@/components/main-screen/ComfortPlans.vue'
import ChooseFlatButton from '@/components/UI/ChooseFlatButton.vue'
</script>

<template>
  <div>
    <div class="address-point-inner">
      <AddressPoint />
    </div>
    <span class="room-and-penthouse-text">
      Квартиры и пентхаусы<br>бизнес-класса
    </span>
    <span class="comfort-plans-inner">
      <ComfortPlans />
    </span>
    <div class="choose-flat-button-inner">
      <ChooseFlatButton />
    </div>
    <div class="additional-points-inner">
      <AdditionalPoints />
    </div>
  </div>
</template>

<style scoped>
  .address-point-inner {
    display: block;
    padding: 15px 0;
  }
  .additional-points-inner {
    display: block;
    position: relative;
    padding: 30px 0;
  }
  .room-and-penthouse-text {
    position: relative;
    font-family: 'Cormorant_Garamond',serif;
    font-size: 54px;
    color: var(--white);
    line-height: 54px;
  }
  .comfort-plans-inner {
    position: relative;
    display: none;
  }
  .choose-flat-button-inner {
    position: relative;
    max-width: 316px;
    display: none;
  }
  @media (max-width: 768px) {
    .address-point-inner {
      display: none;
    }
    .comfort-plans-inner {
      display: block;
      padding: 15px 0;
    }
    .room-and-penthouse-text {
      font-size: 48px;
      line-height: 48px;
    }
    .choose-flat-button-inner {
      display: block;
    }
  }
  @media (min-width: 1280px) {
    .address-point-inner {
      display: none;
    }
    .additional-points-inner {
      display: none;
    }
    .room-and-penthouse-text {
      font-size: 80px;
      line-height: 95px;
      white-space: nowrap;
    }
  }
  @media (min-width: 1500px) {
    .room-and-penthouse-text {
      font-size: 100px;
    }
  }
</style>
