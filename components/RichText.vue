<script setup lang="ts">
defineProps(["heading", "richText", "inTwoColumn", "encodeDataAttribute"]);
</script>

<template>
  <div :class="{ 'px-12 md:px-24 mb-12': !inTwoColumn }">
    <article class="max-w-screen-sm prose">
      <h3 v-if="heading" class="font-serif text-blue text-4xl mb-4">
        {{ heading }}
      </h3>

      <SanityContent :blocks="richText" />
    </article>
  </div>
</template>
