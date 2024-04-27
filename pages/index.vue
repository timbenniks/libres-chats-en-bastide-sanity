<script setup lang="ts">
const { data, encodeDataAttribute } = await useGetContentForType({
  slug: "home",
  type: "page",
});
</script>
<template>
  <GlobalHeader :large="true" />
  <RenderPage :data="data" :encodeDataAttribute="encodeDataAttribute" />
</template>
