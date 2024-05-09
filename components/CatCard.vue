<script setup lang="ts">
import type { Cat } from "@/utils/types";
import { getAge } from "../utils/helpers";

const props = defineProps<{
  cat: Cat;
  encodeDataAttribute?: any;
}>();

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
  return props.cat.sex === "female" ? "femelle" : "mâle";
});
</script>

<template>
  <div class="bg-yellow rounded-lg p-4 pb-6 text-left w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="block bg-black bg-opacity-5 aspect-[396/310] rounded-lg">
        <nuxt-img
          v-if="cat.images"
          provider="sanity"
          :src="cat.images[0].asset._ref"
          width="396"
          height="310"
          sizes="sm:30vw"
          loading="lazy"
          class="rounded-lg block"
          fit="crop"
          :alt="cat.name"
        />
      </div>
      <article>
        <h4 class="font-serif text-blue text-5xl mb-2" v-if="cat.name">
          <nuxt-link :to="`/cats/${cat._id}`">
            {{ cat.name }}
          </nuxt-link>
        </h4>
        <p class="uppercase font-bold mb-6">{{ age }}, {{ sex }}</p>
        <ul v-if="cat.iconsOnCard" class="space-y-2">
          <CatCardIcon
            v-for="icon in cat.iconsOnCard"
            :key="icon"
            :icon="icon"
          />
        </ul>
      </article>
    </div>
    <div class="mt-4">
      <Cta class="inline-block" :cta="cta" :url="`/cats/${cat._id}`" />
    </div>
  </div>
</template>
