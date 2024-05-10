<script setup lang="ts">
defineProps([
  "heading",
  "description",
  "image",
  "ctas",
  "small",
  "nospace",
  "darkImageUsed",
]);
</script>

<template>
  <div
    :class="{
      'md:aspect-[1440/350]': small,
      'md:aspect-[1440/548]': !small,
      'mb-12': !nospace,
      'mb-0': nospace,
    }"
    class="relative"
  >
    <nuxt-img
      v-if="image"
      provider="sanity"
      :src="image.asset._ref"
      width="1440"
      :alt="image.asset.alt || heading || ''"
      :height="small ? '350' : '548'"
      sizes="sm:100vw"
      fit="crop"
      loading="eager"
      class="md:absolute w-full h-auto"
    />

    <article
      class="mt-4 md:mt-0 md:absolute left-24 top-2/4 md:-translate-y-2/4 md:max-w-[500px] px-12 md:px-0 text-center md:text-left"
    >
      <h1
        v-if="heading"
        class="font-serif text-4xl md:text-5xl mb-2 md:max-w-[500px]"
        :class="darkImageUsed ? 'text-blue md:text-white' : 'text-blue'"
      >
        {{ heading }}
      </h1>
      <p
        :class="darkImageUsed ? 'text-black md:text-white' : 'text-black'"
        v-if="description"
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
