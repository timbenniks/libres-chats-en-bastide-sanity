<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;

const { data, encodeDataAttribute } = await useGetContentForType({
  slug: slug as string,
  type: "page",
});

useOGTags(data?.value);
</script>
<template>
  <GlobalHeader :large="false" />
  <RenderPage :data="data" :encodeDataAttribute="encodeDataAttribute" />
  <GlobalFooter />
</template>
