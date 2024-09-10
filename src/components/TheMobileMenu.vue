<script setup lang="ts">
import { ref } from 'vue'
import mobileLogo from '@/assets/img/mobileMenu.svg'
import cross from '@/assets/img/cross.svg'
import ChooseFlatBtn from '@/components/UI/ChooseFlatBtn.vue'

const isPanelOpen = ref(false)

function togglePanel() {
  isPanelOpen.value = !isPanelOpen.value
}
</script>

<template>
  <div class="header-mobile-logo">
    <a href="#" @click.prevent="togglePanel"><img :src="mobileLogo" alt="mobile_logo"></a>
  </div>

  <div v-if="isPanelOpen" class="overlay" @click="togglePanel" />

  <div class="side-panel" :class="[{ 'side-panel-open': isPanelOpen }]">
    <div class="cross" @click.prevent="togglePanel">
      <img :src="cross" alt="mobile_cross">
    </div>
    <div class="mobile-menu">
      <a class="mobile-menu_link" href="#">О проекте</a>
      <a class="mobile-menu_link" href="#">Каталог</a>
      <a class="mobile-menu_link" href="#">Галерея</a>
      <a class="mobile-menu_link" href="#">Новости</a>
      <ChooseFlatBtn />
      <a class="mobile-menu-phone" href="#">+7 (495) 185-13-82</a>
    </div>
  </div>
</template>

<style scoped>
.cross {
  cursor: pointer;
}
.cross img {
  width: 20px;
  right: 25px;
  position: absolute;
  top: 15px;
  filter: brightness(0) saturate(100%) invert(69%) sepia(11%) saturate(1487%) hue-rotate(358deg) brightness(94%) contrast(89%);
}
.header-mobile-logo {
  justify-content: end;
  display: flex;
  cursor: pointer;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 8;
}
.side-panel {
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100%;
  background-color: var(--mobile-background);
  color: var(--white);
  padding: 20px;
  transition: left .5s ease-in-out;
  z-index: 9;
  background-image: url('@/assets/img/background.png');
}
.side-panel-open {
  left: 0;
}
.mobile-menu_link {
  font-size: 24px;
  line-height: 27px;
  text-transform: uppercase;
  color: #FFFFFF;
  opacity: 0.8;
  text-decoration: none;
}
.mobile-menu {
  margin-top: 46px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 22px;
}
.mobile-menu-phone {
  font-size: 24px;
  line-height: 8px;
  color: var(--white);
  opacity: 0.8;
  text-decoration: none;
  margin-top: 16px;
}
</style>
