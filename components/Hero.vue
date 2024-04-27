<script setup lang="ts">
defineProps([
  "encodeDataAttribute",
  "heading",
  "description",
  "image",
  "cta",
  "cta2",
]);
</script>

<template>
  <div class="aspect-[1440/548] relative mb-12">
    <nuxt-img
      provider="sanity"
      :src="image.asset._ref"
      width="1440"
      height="548"
      sizes="sm:100vw"
      loading="eager"
      class="absolute w-full h-auto"
      :data-sanity="encodeDataAttribute?.(['image'])"
    />

    <article class="absolute left-24 top-2/4 -translate-y-2/4 max-w-[500px]">
      <h1
        v-if="heading"
        class="font-serif text-blue text-5xl mb-2 max-w-[500px]"
        :data-sanity="encodeDataAttribute?.(['heading'])"
      >
        {{ heading }}
      </h1>
      <p
        v-if="description"
        :data-sanity="encodeDataAttribute?.(['description'])"
      >
        {{ description }}
      </p>
    </article>
  </div>
</template>
