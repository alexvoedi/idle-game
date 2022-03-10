<script setup lang="ts"></script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold flex items-center gap-4">
      <icon-mdi-sitemap></icon-mdi-sitemap>
      <span>Inventory</span>
    </h1>

    <div class="flex flex-wrap">
      <InventoryStorageSpaceCard></InventoryStorageSpaceCard>
    </div>

    <BaseCard class="overflow-hidden">
      <InventoryItemTable></InventoryItemTable>
    </BaseCard>
  </div>
</template>

<style lang="postcss" scoped></style>
