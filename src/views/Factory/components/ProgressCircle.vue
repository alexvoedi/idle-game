<script setup lang="ts">
interface ComponentProps {
  progress: number;
}

const props = defineProps<ComponentProps>();

const radius = ref(10);

const diameter = computed(() => 2 * radius.value);

const turn = ref(true);

watchEffect(() => {
  if (props.progress === 0) {
    turn.value = !turn.value;
  }
});

const percent = computed(() => 2 * Math.PI * (radius.value - 2));
</script>

<template>
  <svg
    :width="diameter"
    :height="diameter"
    :viewBox="`0 0 ${diameter} ${diameter}`"
    class="transform rotate-270"
  >
    <circle
      :class="[turn ? 'stroke-indigo-600' : 'stroke-emerald-500']"
      :cx="radius"
      :cy="radius"
      :r="radius - 2"
      fill="none"
      stroke-width="3"
      :stroke-dasharray="percent"
      :stroke-dashoffset="(1 - percent) * progress"
    />

    <circle
      :class="[turn ? 'stroke-emerald-500' : 'stroke-indigo-600']"
      :cx="radius"
      :cy="radius"
      :r="radius - 2"
      fill="none"
      stroke-width="3"
      :stroke-dasharray="percent"
      :stroke-dashoffset="percent * (1 - progress)"
    />
  </svg>
</template>

<style lang="postcss" scoped></style>
