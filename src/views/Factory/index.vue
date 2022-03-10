<script setup lang="ts"></script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold flex items-center gap-4">
      <icon-mdi-factory></icon-mdi-factory>
      <span>Factory</span>
    </h1>

    <FactoryActiveGeneratorsCard></FactoryActiveGeneratorsCard>

    <div class="grid grid-cols-1 gap-8" xl="grid-cols-2">
      <FactoryActiveProductions></FactoryActiveProductions>
      <FactoryInactiveProductions></FactoryInactiveProductions>
    </div>
  </div>
</template>

<style></style>
