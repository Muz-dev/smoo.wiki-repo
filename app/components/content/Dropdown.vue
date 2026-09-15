<script setup>
defineProps({
  title: {
    type: String,
    default: "<No Title>",
  },
  icon: {
    type: String,
    default: "i-lucide-chevron-down",
  },
  iconSize: {
    type: String,
    default: "8",
  },
});
</script>

<template>
  <div>
    <div class="rounded-lg border border-default w-full my-12">
      <UCollapsible class="flex flex-col gap-2">
        <UButton
          class="group p-4"
          color="white"
          variant="subtle"
          :trailing-icon="icon"
          :ui="{
            trailingIcon: `group-data-[state=open]:rotate-180 transition-transform duration-200 w-${iconSize} h-${iconSize}`,
          }"
          block
        >
          <h1 class="text-2xl">
            {{ title }}
          </h1>
        </UButton>
        <template #content>
          <USeparator />
          <div class="px-4 pb-4 p-2">
            <slot
              mdc-unwrap="p"
              class="py-0"
            />
          </div>
        </template>
      </UCollapsible>
    </div>
  </div>
</template>
