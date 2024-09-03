<script setup lang="ts">

</script>

<template>
  <div class="count-of-slides">
    <div class="count-text">
      Комфортные<br>
      планировки
    </div>
    <div class="count-numbers">
      1/3
    </div>
  </div>
</template>

<style scoped>
.count-of-slides {
  position: relative;
  display: flex;
  align-items: end;
  gap: 27px;
}

.count-text, .count-numbers {
  font-size: 28px;
  line-height: 47px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  background: linear-gradient(180deg, var(--primary-gradient) 0%, var(--secondary-gradient) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
@media (min-width: 1500px) {
  .count-text, .count-numbers {
    font-size: 36px;
  }
}
</style>