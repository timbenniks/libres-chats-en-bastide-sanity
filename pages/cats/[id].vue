<script setup lang="ts">
const route = useRoute();
const { id } = route.params;

const { data: cat } = await useGetContentForType({
  slug: id as string,
  type: "cat",
});

const { data, encodeDataAttribute } = await useGetContentForType({
  slug: "cat-page-template",
  type: "page",
});
</script>
<template>
  <GlobalHeader :large="false" />
  <CatDetail :cat="cat" />

  <RenderPage :data="data" :encodeDataAttribute="encodeDataAttribute" />

  <GlobalFooter />
</template>
