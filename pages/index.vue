<script setup lang="ts">
const { data } = await useGetContentForType({
  slug: "home",
  type: "page",
});

useOGTags(data?.value);

useJsonld({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": "https://libreschatsenbastice.fr",
        name: data?.value.title,
      },
    },
  ],
});
</script>
<template>
  <GlobalHeader :large="true" />
  <RenderPage :data="data" />
  <GlobalFooter />
</template>
