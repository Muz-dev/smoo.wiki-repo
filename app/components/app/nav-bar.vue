<script setup lang="ts">
import type { NavigationMenuItem } from "#ui/components/NavigationMenu.vue";

const route = useRoute();
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
    active: route.path === "/",
  },
  {
    label: "Servers",
    to: "/servers",
    active: route.path.startsWith("/servers"),
  },
  {
    label: "Play",
    to: "/play",
    active: route.path.startsWith("/play"),
  },
  {
    label: "Host",
    to: "/host",
    active: route.path.startsWith("/host"),
  },
  {
    label: "FAQ",
    to: "/faq",
    active: route.path.startsWith("/faq"),
  },
  {
    label: "Compatibility",
    to: "/compatibility",
    active: route.path.startsWith("/compatibility"),
  },
]);
</script>

<template>
  <UHeader>
    <template #title>
      <NuxtImg
        src="/globe.png"
        class="h-6 w-auto"
      />
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <UColorModeButton />
    </template>
    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>

<style scoped>

</style>
