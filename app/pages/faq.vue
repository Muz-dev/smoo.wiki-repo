<script setup lang="ts">
const { data: page } = await useAsyncData("faq", () => {
  return queryCollection("content").path("/faq").first();
});
</script>

<!--
Reference for this code:
https://content.nuxt.com/docs/files/markdown#display-markdown
-->
<template>
  <div>
    <Headline :text="page?.title" />
    <ContentRenderer :value="page" />
  </div>
</template>
