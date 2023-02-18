<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <a href="https://beariy_shop.t.me">Beariy'shop</a>
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
header {
  background: var(--gradient-primary);
  padding: 1rem 2rem;
  max-height: 6rem;

  align-items: center;
  display: flex;

  a {
    font-weight: 700;
    font-size: 3rem;
    text-decoration: none;
    color: white;
  }
}

.container {
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
