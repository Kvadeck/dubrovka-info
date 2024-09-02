<script setup lang="ts">
import logo from "@/assets/logo.svg"
</script>

<template>
  <header>
      <div class="header-logo">
        <a href=""><img :src=logo alt="logo"></a>
      </div>
      <div class="header-menu">
        <a class="header-menu_link" href="#">О проекте</a>
        <a class="header-menu_link" href="#">Каталог</a>
        <a class="header-menu_link" href="#">Галерея</a>
        <a class="header-menu_link" href="#">Новости</a>
        <a class="header-menu_link-button" href="#">Выбрать свою квартиру</a>
      </div>
      <a class="header-phone" href="#">
        +7 (495) 185-13-82
      </a>
  </header>
</template>

<style scoped>
header {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 107px;
  border: 1px solid var(--black);
  background: var(--black);
  padding: 0 70px;
  align-items: center;
}
.header-menu {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  gap: 53px;
}

.header-menu_link {
  font-family: 'Gotham Pro',serif;
  font-size: 18px;
  line-height: 27px;
  opacity: 0.8;
  color: var(--white);
  text-decoration: none;
  white-space:nowrap;
  text-transform: uppercase;
}

.header-menu_link-button {
  padding: 12px 24px;
  gap: 12px;
  width: 373px;
  height: 55px;
  background: linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 60px;
  display: flex;
  align-items: center;
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  justify-content: center;
}
.header-phone {
  font-family: 'Gotham Pro',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 20px;
  color: var(--white);
  opacity: 0.8;
  display: flex;
  justify-content: end;
  text-decoration: none;
}

</style>