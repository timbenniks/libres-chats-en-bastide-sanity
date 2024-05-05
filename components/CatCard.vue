<script setup lang="ts">
import { getAge } from "../utils/helpers";
const props = defineProps(["cat", "encodeDataAttribute"]);

const age = computed(() => {
  return getAge(props.cat.birthDate);
});

const cta = computed(() => {
  return {
    label: "Plus d'infos",
    secondary: false,
  };
});

const sex = computed(() => {
  return props.cat.sex;
});
</script>

<template>
  <div class="bg-yellow rounded-lg p-4 pb-6">
    <nuxt-link
      :to="`/cats/${cat._id}`"
      class="block bg-black bg-opacity-5 aspect-[396/310] mb-2 rounded-lg"
      :aria-label="cat.name"
      :title="cat.name"
    >
      <nuxt-img
        v-if="cat.images"
        provider="sanity"
        :src="cat.images[0].asset._ref"
        width="396"
        height="310"
        sizes="sm:30vw"
        loading="lazy"
        class="rounded-lg"
        fit="crop"
        :alt="cat.name"
      />
    </nuxt-link>

    <h4 class="font-serif text-blue text-3xl" v-if="cat.name">
      <nuxt-link :to="`/cats/${cat._id}`">
        {{ cat.name }}
      </nuxt-link>
    </h4>
    <p class="uppercase font-bold text-sm mb-6">
      {{ age }}, <template v-if="cat.sterilised">stérilisée, </template>
      {{ sex }}
    </p>
    <Cta :cta="cta" :url="`/cats/${cat._id}`" />
  </div>
</template>
