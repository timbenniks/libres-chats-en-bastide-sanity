<script setup lang="ts">
import { getAge } from "../utils/helpers";
const props = defineProps(["cat", "encodeDataAttribute"]);

const age = computed(() => {
  return getAge(props.cat.birthDate);
});
</script>

<template>
  <div class="bg-yellow rounded-lg p-4">
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
    <h4 class="font-serif text-blue text-3xl" v-if="cat.name">
      {{ cat.name }}
    </h4>
    <p class="uppercase font-bold text-sm">
      {{ age }} old, <template v-if="cat.sterilised">sterilised, </template>
      {{ cat.sex }}
    </p>
  </div>
</template>
