<script setup lang="ts">
const { data: page } = await useAsyncData("compatibility", () => {
  return queryCollection("content").path("/compatibility").first();
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
