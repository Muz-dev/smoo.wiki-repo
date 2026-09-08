<script setup lang="ts">
// simple arg to center the prop if they want
const props = defineProps({ uncenter: { type: Boolean, default: false } });
const addClass = ((props.uncenter) ? null : "justify-center");
</script>

<template>
  <!-- Yep, that's literally all there is to it. -->
  <div
    class="flex flex-row gap-4 p-4"
    :class="addClass"
  >
    <slot unwrap-mdc="p" />
  </div>
</template>
