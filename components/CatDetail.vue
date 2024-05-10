<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { vercelStegaClean } from "@vercel/stega";

import type { Cat } from "@/utils/types";
import { getAge } from "../utils/helpers";

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
      <div class="carouseleeee">
        <ClientOnly>
          <div class="">
            <Carousel
              id="gallery"
              :items-to-show="1"
              :wrap-around="false"
              v-model="currentSlide"
            >
              <Slide
                v-for="catImage in catImagesLength"
                :key="cat.images[catImage - 1].asset._ref"
              >
                <div class="block bg-black bg-opacity-5 aspect-[396/310]">
                  <nuxt-img
                    v-if="cat.images"
                    provider="sanity"
                    :src="cat.images[catImage - 1].asset._ref"
                    width="396"
                    height="310"
                    sizes="sm:50vw"
                    loading="lazy"
                    class="block"
                    fit="crop"
                    :alt="cat.name"
                  />
                </div>
              </Slide>
            </Carousel>
          </div>
          <div>
            <Carousel
              id="thumbnails"
              :items-to-show="3"
              :wrap-around="true"
              v-model="currentSlide"
              ref="carousel"
            >
              <Slide
                v-for="catImage in catImagesLength"
                :key="cat.images[catImage - 1].asset._ref"
              >
                <div
                  class="block bg-black bg-opacity-5 aspect-[396/310] cursor-pointer"
                  @click="slideTo(catImage - 1)"
                >
                  <nuxt-img
                    v-if="cat.images"
                    provider="sanity"
                    :src="cat.images[catImage - 1].asset._ref"
                    width="396"
                    height="310"
                    sizes="sm:50vw"
                    loading="lazy"
                    class="block"
                    fit="crop"
                    :alt="cat.name"
                  />
                </div>
              </Slide>
            </Carousel>
          </div>
        </ClientOnly>
      </div>

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

        <article class="max-w-screen-sm prose mb-4">
          <SanityContent :blocks="cat.aboutMe" />
        </article>
      </article>
    </div>
  </div>
</template>
