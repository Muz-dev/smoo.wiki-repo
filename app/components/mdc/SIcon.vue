<script setup lang="ts">
const props = defineProps({
  name: { type: String, defualt: "a" },
  src: { type: String, default: null },
  class: { type: String, default: "" },
});

const src = props.src ?? `/img/${props.name}.png`;
</script>

<template>
  <NuxtImg
    :src="src"
    :alt="props.name"
    :class="['w-6 h-6 inline', props.class]"
  />
</template>
