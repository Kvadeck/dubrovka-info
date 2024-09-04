<script setup lang="ts">
import logo from '@/assets/img/logo.svg'
import TheMobileMenu from '@/components/TheMobileMenu.vue'
</script>

<template>
  <header>
    <div class="header-logo">
      <a href=""><img :src="logo" alt="logo"></a>
    </div>
    <div class="header-menu">
      <a class="header-menu-link" href="#">О проекте</a>
      <a class="header-menu-link" href="#">Каталог</a>
      <a class="header-menu-link" href="#">Галерея</a>
      <a class="header-menu-link" href="#">Новости</a>
      <a class="header-menu-link-button" href="#">Выбрать свою квартиру</a>
    </div>
    <div class="header-phone-inner">
      <a class="header-phone" href="#">
        +7 (495) 185-13-82
      </a>
    </div>
    <TheMobileMenu />
  </header>
</template>

<style scoped>
header {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 80px;
  border-bottom: 1px solid var(--white);
  padding: 0 25px;
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

.header-menu-link {
  font-size: 18px;
  line-height: 27px;
  opacity: 0.8;
  color: var(--white);
  text-decoration: none;
  white-space: nowrap;
  text-transform: uppercase;
  transition: color 0.2s ease-in-out;
}

.header-menu-link:hover {
  color: var(--primary-link);
}

.header-menu-link-button {
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
  font-size: 24px;
  font-weight: 600;
  line-height: 20px;
  color: var(--white);
  opacity: 0.8;
  justify-content: end;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  width: fit-content;
  white-space: nowrap;
}
.header-phone-inner {
  display: none;
  justify-content: end;
}
.header-phone:hover {
  color: var(--primary-link);
}

@media (min-width: 1500px) {
  .header-menu {
    gap: 53px;
  }

  .header-menu-link-button {
    width: 373px;
  }
}

@media (min-width: 1280px) {
  header {
    height: 107px;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 70px;
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
  .header-phone-inner {
    display: flex;
  }
}
</style>
