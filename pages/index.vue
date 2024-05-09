<script setup lang="ts">
const { data, encodeDataAttribute } = await useGetContentForType({
  slug: "home",
  type: "page",
});

useOGTags(data?.value);
</script>
<template>
  <GlobalHeader :large="true" />
  <RenderPage :data="data" :encodeDataAttribute="encodeDataAttribute" />
  <GlobalFooter />
</template>
