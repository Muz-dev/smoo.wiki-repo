<script setup>
const props = defineProps({ type: { type: String, default: "info" }, title: { type: String, default: null }, align: { type: String, default: "center" } });
// I don't know why but we don't need to define the

const alertConfig = computed(() => {
  // default to nothing unless a title is given
  const iconScale = ((props.title) ? { icon: "size-11" } : null);
  let cClass = "";
  cClass = props.align ? (" text-" + props.align) : "";

  const style = {
    critical: {
      class: "bg-red-100 border-orange-200 dark:bg-red-900 dark:border-orange-800" + cClass,
      icon: "i-lucide-triangle-alert",
      title: props.title,
      ui: iconScale,
    },
    warning: {
      class: "bg-yellow-100 border-orange-200 dark:bg-yellow-800 dark:border-yellow-800" + cClass,
      icon: "i-lucide-circle-alert",
      title: props.title,
      ui: iconScale,
    },
    info: {
      class: "bg-blue-100 border-blue-200 dark:bg-blue-900 dark:border-blue-800" + cClass,
      icon: "i-lucide-info",
      title: props.title,
      ui: iconScale,
    },
    success: {
      class: "bg-green-100 border-green-200 dark:bg-green-900 dark:border-green-800" + cClass,
      icon: "i-lucide-circle-check",
      title: props.title,
      ui: iconScale,
    },
  };
  // default to the info style if the type is typoed or somehow faulty
  return style[props.type] || style.info;
});
</script>

<!--
For larger icon:
<UAlert :title="alertConfig.title" :icon="alertConfig.icon" class="text-black dark:text-white" :class="alertConfig.class" :ui=alertConfig.ui>
-->
<template>
  <UAlert
    :title="alertConfig.title"
    :icon="alertConfig.icon"
    class="m-5 justify-self-center object-center w-2/3 text-black dark:text-white"
    :class="alertConfig.class"
    :ui="alertConfig.ui"
  >
    <template #description>
      <!-- Use #title above to use the content below to change the alert title and #description for the description -->
      <slot mdc-unwrap="p" />
    </template>
  </UAlert>
</template>

<!--
Original, taken from the Nuxt documentation, https://content.nuxt.com/docs/files/markdown:
<template>
    <!-- Give this a bit more padding outside the colored radius
    <div class="py-6">
        <div class="text-black p-2 border dark:text-white rounded" :class="alertClass">
            <slot mdc-unwrap="p" />
        </div>
    </div>
</template>
-->
