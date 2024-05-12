<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { vercelStegaClean } from "@vercel/stega";

import type { Cat } from "@/utils/types";
import { getAge, getAssetDimensions } from "../utils/helpers";

const props = defineProps<{
  cat: Cat;
}>();

const age = computed(() => {
  return getAge(props.cat.birthDate);
});

const sex = computed(() => {
  return vercelStegaClean(props.cat.sex) === "female" ? "femelle" : "mâle";
});

const currentSlide = ref(0);
const catImagesLength = computed(() => {
  return props.cat.images.length;
});

function slideTo(val: number) {
  currentSlide.value = val;
}
</script>

<template>
  <div class="px-4 md:px-24 my-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ClientOnly>
        <div class="md:flex md:space-x-4">
          <div class="hidden md:block">
            <div
              class="block bg-black bg-opacity-5 aspect-[396/310] cursor-pointer mb-4"
              @click="slideTo(catImage - 1)"
              v-for="catImage in catImagesLength"
              :key="cat.images[catImage - 1].asset._ref"
            >
              <nuxt-img
                v-if="cat.images"
                provider="sanity"
                :src="cat.images[catImage - 1].asset._ref"
                width="310"
                height="310"
                sizes="sm:50vw"
                loading="lazy"
                class="block"
                fit="crop"
                :alt="cat.name"
              />
            </div>
          </div>
          <Carousel
            :items-to-show="1"
            :wrap-around="false"
            v-model="currentSlide"
          >
            <Slide
              v-for="catImage in catImagesLength"
              :key="cat.images[catImage - 1].asset._ref"
            >
              <div class="block bg-black bg-opacity-5">
                <nuxt-img
                  v-if="cat.images"
                  provider="sanity"
                  :src="cat.images[catImage - 1].asset._ref"
                  :width="
                    getAssetDimensions(cat.images[catImage - 1].asset._ref)
                      .width
                  "
                  :height="
                    getAssetDimensions(cat.images[catImage - 1].asset._ref)
                      .height
                  "
                  sizes="sm:100vw md:50vw"
                  loading="lazy"
                  :alt="cat.name"
                />
              </div>
            </Slide>
          </Carousel>
        </div>
      </ClientOnly>

      <article>
        <h4 class="font-serif text-blue text-5xl mb-2" v-if="cat.name">
          {{ cat.name }}
        </h4>
        <p class="uppercase font-bold mb-4">{{ age }}, {{ sex }}</p>

        <ul v-if="cat.iconsOnCard" class="flex space-x-4 mb-8">
          <CatCardIcon
            class="rounded-lg py-1.5 px-3 bg-blue text-white"
            v-for="icon in cat.iconsOnCard"
            :key="icon"
            :icon="icon"
          />
        </ul>

        <div
          class="flex space-x-2 mb-4 items-center"
          v-if="cat.reserved || cat.adopted || cat.deceased"
        >
          <p>Situation:</p>
          <div class="cta light" v-if="cat.reserved">réservée</div>
          <div class="cta light" v-if="cat.adopted">adoptée</div>
          <div class="cta light" v-if="cat.deceased">décédé</div>
        </div>

        <article class="max-w-screen-sm prose mb-4">
          <SanityContent :blocks="cat.aboutMe" />
        </article>
      </article>
    </div>
  </div>
</template>
