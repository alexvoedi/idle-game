<script setup lang="ts">
import { useEffectStore } from "@/store/effect";

const effectStore = useEffectStore();
</script>

<template>
  <div>
    <h1>effects</h1>

    <div v-for="(effect, index) in effectStore.effects" :key="index">
      {{ effect }}
    </div>
  </div>
</template>

<style></style>
