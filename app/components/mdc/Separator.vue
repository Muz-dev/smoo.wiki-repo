<script setup lang="ts">
import type { AvatarProps } from "@nuxt/ui";

// simple arg to center the prop if they want
const props = defineProps<{
  orientation?: "horizontal" | "vertical";
  label?: string;
  position?: string;
  icon?: string;
  avatar?: AvatarProps;
  color?: "neutral" | "primary" | "secondary" | "success" | "info" | "warning" | "error";
  type?: "solid" | "dashed" | "dotted";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  plain?: true;
}>();

let cClass = "";
// default to being italic if it's not provided
cClass += props.plain ? "" : " italic";
</script>

<template>
  <USeparator
    :orientation="orientation"
    :label="label"
    :position="position"
    :icon="icon"
    :avatar="avatar"
    :color="color"
    :type="type"
    :size="size"
    class="pb-10 pt-4"
    :class="cClass"
  />
</template>
