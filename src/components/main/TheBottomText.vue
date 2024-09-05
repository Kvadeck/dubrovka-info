<script setup lang="ts">
import AddressLink from '@/components/main/AddressLink.vue'
import AdditionalLinks from '@/components/main/AdditionalLinks.vue'
import ComfortPlans from '@/components/main/ComfortPlansText.vue'
import ChooseFlatButton from '@/components/UI/ChooseFlatButton.vue'
import {useActiveBreakpoint} from "@/composables/useActiveBreakpoint";
const {activeBreakpoint} = useActiveBreakpoint()

</script>

<template>
  <div>
    <div class="address-point-inner" v-if="activeBreakpoint === 'md'">
      <AddressLink />
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
    <div class="additional-links-inner" v-if="activeBreakpoint !== 'lg'">
      <AdditionalLinks />
    </div>
  </div>
</template>

<style scoped>
  .address-point-inner {
    padding: 15px 0;
  }
  .additional-links-inner {
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
