<script setup lang="ts">
const { data, encodeDataAttribute } = await useGetContentForType({
  slug: "cats",
  type: "page",
});
</script>
<template>
  <GlobalHeader :large="false" />
  <RenderPage :data="data" :encodeDataAttribute="encodeDataAttribute" />

  <p>Query cats</p>

  <GlobalFooter />
</template>
