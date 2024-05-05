<script setup lang="ts">
const route = useRoute();
const { id } = route.params;

const { data, encodeDataAttribute } = await useGetContentForType({
  slug: id as string,
  type: "cat",
});
</script>
<template>
  <GlobalHeader :large="false" />
  <pre>{{ data }}</pre>
  <GlobalFooter />
</template>
