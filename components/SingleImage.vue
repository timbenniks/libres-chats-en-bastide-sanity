<script setup lang="ts">
defineProps(["encodeDataAttribute", "image", "title", "inTwoColumn"]);
</script>

<template>
  <div
    :class="inTwoColumn ? 'aspect-none' : 'mb-12 relative aspect-[1440/484]'"
  >
    <nuxt-img
      provider="sanity"
      :src="image.asset._ref"
      width="1440"
      :height="!inTwoColumn ? 484 : ''"
      sizes="sm:100vw"
      loading="eager"
      class="w-full h-auto"
      :class="{ absolute: !inTwoColumn }"
      fit="crop"
      :alt="image.asset.alt || title"
    />

    <p
      v-if="title"
      class="text-sm mt-2"
      :class="{
        'absolute z-10 bottom-0 left-0 py-2 px-3 bg-black bg-opacity-50 text-white rounded-tr-lg':
          !inTwoColumn,
      }"
    >
      {{ title }}
    </p>
  </div>
</template>
