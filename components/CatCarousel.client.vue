<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";

defineProps(["cats", "encodeDataAttribute"]);

const breakpoints = {
  700: {
    itemsToShow: 1,
  },
  1024: {
    itemsToShow: 2,
  },
};
</script>

<template>
  <carousel :wrap-around="true" snapAlign="start" :breakpoints="breakpoints">
    <slide v-for="(cat, index) in cats" :key="cat._id">
      <div class="md:mr-4 w-full">
        <cat-card :cat="cat" />
      </div>
    </slide>

    <template #addons>
      <Navigation />
    </template>
  </carousel>
</template>

<style>
.carousel__prev {
  @apply -left-12 md:-left-16;
}

.carousel__next {
  @apply -right-12;
}
</style>
