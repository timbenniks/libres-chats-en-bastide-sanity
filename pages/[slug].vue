<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;

const { data, encodeDataAttribute } = await useGetContentForType({
  slug: slug as string,
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
        name: "D'accueil",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": `https://timbenniks.dev/${data.value.slug.current}`,
        name: data.value.title,
      },
    },
  ],
});
</script>
<template>
  <GlobalHeader :large="false" />
  <RenderPage :data="data" :encodeDataAttribute="encodeDataAttribute" />
  <GlobalFooter />
</template>
