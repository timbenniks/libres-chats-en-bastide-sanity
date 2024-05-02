<script setup lang="ts">
import { getAge } from "../utils/helpers";
const props = defineProps(["cat", "encodeDataAttribute"]);

const age = computed(() => {
  return getAge(props.cat.birthDate);
});

const cta = computed(() => {
  return {
    label: "More Info",
    secondary: false,
  };
});
</script>

<template>
  <div class="bg-yellow rounded-lg p-4 pb-6">
    <nuxt-link :to="`/cats/${cat._id}`">
      <nuxt-img
        provider="sanity"
        :src="cat.images[0].asset._ref"
        width="396"
        height="310"
        sizes="sm:30vw"
        loading="lazy"
        class="rounded-lg mb-2"
        fit="crop"
      />
    </nuxt-link>

    <h4 class="font-serif text-blue text-3xl" v-if="cat.name">
      <nuxt-link :to="`/cats/${cat._id}`">
        {{ cat.name }}
      </nuxt-link>
    </h4>
    <p class="uppercase font-bold text-sm mb-6">
      {{ age }} old, <template v-if="cat.sterilised">sterilised, </template>
      {{ cat.sex }}
    </p>

    <Cta :cta="cta" :url="`/cats/${cat._id}`" />
  </div>
</template>
