<script setup lang="ts"></script>

<template>
  <nav class="h-16 flex justify-between items-center bg-true-gray-800">
    <div></div>
    <div class="space-x-8">
      <router-link :to="{ name: 'Inventory' }">Inventory</router-link>
      <router-link :to="{ name: 'Factory' }">Factory</router-link>
      <router-link :to="{ name: 'Science' }">Science</router-link>
    </div>
    <div></div>
  </nav>
</template>

<style lang="postcss" scoped>
.router-link-active {
  @apply underline;
}
</style>
