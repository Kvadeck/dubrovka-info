<script setup lang="ts">
import logo from '@/assets/logo.svg'
</script>

<template>
  <header>
    <div class="header-logo">
      <a href=""><img :src="logo" alt="logo"></a>
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
  height: 80px;
  border: 1px solid var(--black);
  background: var(--black);
  padding: 0 70px;
  align-items: center;
}

.header-logo img {
  width: 120px;
}

.header-menu {
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  gap: 20px;
  display: none;
}

.header-menu_link {
  font-family: 'Gotham Pro', serif;
  font-size: 18px;
  line-height: 27px;
  opacity: 0.8;
  color: var(--white);
  text-decoration: none;
  white-space: nowrap;
  text-transform: uppercase;
  transition: color 0.2s ease-in-out;
}

.header-menu_link:hover {
  color: var(--primary-link);
}

.header-menu_link-button {
  padding: 12px 24px;
  gap: 12px;
  width: 300px;
  height: 55px;
  background: linear-gradient(180deg, var(--primary-gradient) 0%, var(--secondary-gradient) 100%);
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
  display: none;
  font-family: 'Gotham Pro', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 20px;
  color: var(--white);
  opacity: 0.8;
  justify-content: end;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.header-phone:hover {
  color: var(--primary-link);
}

@media (min-width: 1500px) {
  .header-menu {
    gap: 53px;
  }

  .header-menu_link-button {
    width: 373px;
  }
}

@media (min-width: 1280px) {
  header {
    height: 107px;
  }

  .header-menu {
    display: grid;
  }

  .header-phone {
    display: flex;
  }

  .header-logo img {
    width: auto;
  }
}
</style>
