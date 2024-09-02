<script setup lang="ts">
import { ref } from 'vue'
import mobileLogo from '@/assets/mobileMenu.svg'
import cross from '@/assets/cross.svg'

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
      <a class="mobile-menu_link-button" href="#">Выбрать квартиру</a>
      <a class="mobile-menu-phone" href="#">+7 (495) 185-13-82</a>
    </div>
  </div>
</template>

<style scoped>
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
  background-color: var(--primary-background);
  color: white;
  padding: 20px;
  transition: left .3s ease-in-out;
  z-index: 9;
}
.side-panel-open {
  left: 0;
}
.mobile-menu_link {
  font-family: 'Gotham Pro',serif;
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
.mobile-menu_link-button {
  padding: 18px 24px;
  gap: 12px;
  width: 250px;
  height: 40px;
  background: linear-gradient(180deg, var(--primary-gradient) 0%, var(--secondary-gradient) 100%);
  border-radius: 60px;
  font-family: 'Gotham Pro',serif;
  font-size: 18px;
  line-height: 0;
  text-transform: uppercase;
  color: var(--white);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mobile-menu-phone {
  font-family: 'Gotham Pro', serif;
  font-size: 24px;
  line-height: 8px;
  color: var(--white);
  opacity: 0.8;
  text-decoration: none;
  margin-top: 16px;
}
@media (min-width: 1280px) {
  .header-mobile-logo {
   display: none;
  }
  .mobile-menu {
    display: none;
  }
  .side-panel {
    display: none;
  }
  .overlay {
    display: none;
  }
}
</style>
