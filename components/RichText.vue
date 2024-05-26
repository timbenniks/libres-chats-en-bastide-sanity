<script setup lang="ts">
import { vercelStegaClean } from "@vercel/stega";

const props = defineProps([
  "heading",
  "richText",
  "inTwoColumn",
  "centered",
  "textcentered",
  "background",
]);

const bg = computed(() => {
  const background = vercelStegaClean(props.background);
  if (background === "bg-lightBlue") {
    return "bg-lightBlue py-8 bg-opacity-40";
  }

  if (background === "bg-yellow") {
    return "bg-yellow py-8 bg-opacity-40";
  }

  if (!background) {
    return "p-0";
  }
});
</script>

<template>
  <div
    :class="[
      {
        'px-12 md:px-24 mb-12': !inTwoColumn,
      },
      bg,
    ]"
  >
    <article
      class="max-w-screen-sm prose"
      :class="{ 'mx-auto': centered, 'text-center': textcentered }"
    >
      <h3 v-if="heading" class="font-serif text-blue text-4xl mb-4">
        {{ heading }}
      </h3>

      <SanityContent :blocks="richText" />
    </article>
  </div>
</template>
