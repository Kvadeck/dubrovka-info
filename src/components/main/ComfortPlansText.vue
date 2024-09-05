<template>
  <div class="count-text">
    Комфортные<br>
    планировки
  </div>
</template>

<style scoped>
.count-text {
  font-size: 16px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background: linear-gradient(180deg, var(--primary-gradient) 0%, var(--secondary-gradient) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
@media (max-width: 768px) {
  .count-text br {
    display: none;
  }
}
@media (min-width: 1280px) {
  .count-text {
    font-size: 36px;
    line-height: 40px;
  }
}
</style>
