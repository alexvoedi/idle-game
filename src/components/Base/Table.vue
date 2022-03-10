<script setup lang="ts">
interface Column {
  id: string;
  text: string;
  field: string;
  classes?: string;
  headClasses?: string;
  bodyClasses?: string;
  sortable: boolean;
}

type Item = Record<string, unknown>;

interface ComponentProps {
  columns: Column[];
  items: Item[];
  search?: string;
}

withDefaults(defineProps<ComponentProps>(), {
  search: "",
  searchFields: ["id"],
});
</script>

<template>
  <table class="w-full">
    <thead>
      <tr>
        <th
          v-for="(column, index) in columns"
          :key="index"
          :class="[column.classes, column.headClasses]"
          v-html="column.text"
        ></th>
      </tr>
    </thead>
    <tbody v-if="items.length > 0">
      <tr v-for="(item, index) in items" :key="index">
        <td
          v-for="(column, index) in columns"
          :key="index"
          :class="[column.classes, column.bodyClasses]"
        >
          <slot :name="column.id" :item="item">
            {{ item[column.field] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="postcss" scoped>
table {
  @apply w-full;
}

table thead tr {
  @apply bg-true-gray-900;
}

table thead tr th {
  @apply px-2 py-4 sticky top-0 bg-true-gray-900;
}

table tbody tr td {
  @apply p-2;
}

table thead tr th:first-child,
table tbody tr td:first-child {
  @apply pl-8;
}

table thead tr th:last-child,
table tbody tr td:last-child {
  @apply pr-8;
}

table tbody tr:nth-child(odd) {
  @apply bg-true-gray-700;
}

table tbody tr:nth-child(even) {
  @apply bg-true-gray-800;
}
</style>
