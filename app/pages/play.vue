<script setup lang="ts">
const { data: page } = await useAsyncData("play", () => {
  return queryCollection("content").path("/play").first();
});
</script>

<!--
Reference for this code:
https://content.nuxt.com/docs/files/markdown#display-markdown
-->
<template>
  <Headline :text="page?.title" />
  <ContentRenderer :value="page" />
</template>
