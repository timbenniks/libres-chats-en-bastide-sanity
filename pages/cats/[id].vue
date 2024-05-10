<script setup lang="ts">
const route = useRoute();
const { id } = route.params;

const { data: cat } = await useGetContentForType({
  slug: id as string,
  type: "cat",
});

const { data } = await useGetContentForType({
  slug: "cat-page-template",
  type: "page",
});

useOGTags({
  title: (cat.value as Cat).name,
  desciription: "",
  image: (cat.value as Cat).images[0],
});

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
        "@id": `https://libreschatsenbastice.fr/cats`,
        name: "Chats",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": `https://libreschatsenbastice.fr/chats/${
          (cat.value as Cat)._id
        }`,
        name: (cat.value as Cat).name,
      },
    },
  ],
});
</script>
<template>
  <GlobalHeader :large="false" />
  <CatDetail :cat="cat as Cat" />

  <RenderPage :data="data" />

  <GlobalFooter />
</template>
