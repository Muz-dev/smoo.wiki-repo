<script setup lang="ts">
// simple arg to center the prop if they want
const props = defineProps<{
  center: { type: boolean; default: false };
  title?: string;
  description?: string;
  variant?: "outline" | "solid" | "soft" | "subtle";
}>();
const addClass = ((props.center) ? "justify-self-center" : null);
</script>

<template>
  <!-- Yep, that's literally all there is to it. -->
  <div
    class="gap-4 p-4 w-1/2"
    :class="addClass"
  >
    <UCard
      :title="props.title"
      :description="props.description"
      :variant="props.variant"
    >
      <slot unwrap-mdc="p" />
    </UCard>
  </div>
</template>
