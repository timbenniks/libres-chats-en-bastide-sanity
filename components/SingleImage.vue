<script setup lang="ts">
defineProps(["encodeDataAttribute", "image", "title"]);
</script>

<template>
  <div class="relative aspect-[1440/484] mb-12">
    <nuxt-img
      provider="sanity"
      :src="image.asset._ref"
      width="1440"
      height="484"
      sizes="sm:100vw"
      loading="eager"
      class="w-full h-auto absolute"
      fit="crop"
      :alt="image.asset.alt || title"
    />

    <p
      v-if="title"
      class="absolute z-10 bottom-0 left-0 py-2 px-3 bg-black bg-opacity-50 text-white text-sm rounded-tr-lg"
    >
      {{ title }}
    </p>
  </div>
</template>
