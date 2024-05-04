<script setup lang="ts">
defineProps([
  "encodeDataAttribute",
  "heading",
  "description",
  "image",
  "ctas",
  "small",
]);
</script>

<template>
  <div class="md:aspect-[1440/548] relative mb-12">
    <nuxt-img
      provider="sanity"
      :src="image.asset._ref"
      width="1440"
      height="548"
      sizes="sm:100vw"
      loading="eager"
      class="md:absolute w-full h-auto"
      :data-sanity="encodeDataAttribute?.(['image'])"
    />

    <article
      class="mt-4 md:mt-0 md:absolute left-24 top-2/4 md:-translate-y-2/4 md:max-w-[500px] px-12 md:px-0 text-center md:text-left"
    >
      <p>Small: {{ small }}</p>
      <h1
        v-if="heading"
        class="font-serif text-blue text-4xl md:text-5xl mb-2 md:max-w-[500px]"
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
      <div
        class="flex space-y-2 sm:space-x-2 sm:space-y-0 flex-col sm:flex-row mt-4"
      >
        <Cta v-for="cta in ctas" :key="cta.label" :cta="cta" />
      </div>
    </article>
  </div>
</template>
