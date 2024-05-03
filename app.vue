<script lang="ts" setup>
useHead({
  meta: [
    {
      "http-equiv": "accept-ch",
      content: "dpr, viewport-width, width",
    },
    {
      name: "theme-color",
      content: "#A2C0F3",
    },
  ],
  htmlAttrs: {
    lang: "fr",
  },
});

useJsonld({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Libres chats en Bastide",
  description:
    "Association qui a pour but la stérilisation des chats errants et la mise à l'adoption des chatons",
  nonprofitStatus: "Nonprofit501c20",
  url: "https://libreschatsenbastide.fr",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Aveyron",
  },
  additionalType: "http://schema.org/NGO",
});
</script>

<template>
  <div class="mx-auto max-w-[1440px]">
    <NuxtPage />
  </div>
</template>
