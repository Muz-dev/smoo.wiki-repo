<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    default: "text-8xl py-8",
  },
  ui: {
    default: { label: "text-2xl italic text-gray-500 dark:text-gray-300 tracking-wide" },
  },
});
</script>

<template>
  <USeparator
    :label="props.text"
    :class="props.class"
    :ui="props.ui"
    type="dashed"
  />
</template>
