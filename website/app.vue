<script setup lang="ts">
const query = groq`*[_type == "page" && slug.current == $slug]{
  title,
  slug,
  pageBuilder[]{
    _type == "hero" => {
      _type,
      heading,
      tagline,
      image
    },
    _type == "textWithIllustration" => {
      _type,
      heading,
      tagline,
      excerpt,
      image
    },
  },
}`;

const { data } = useSanityQuery(query, { slug: "home" });
</script>
<template>
  <pre>{{ data }}</pre>
</template>
