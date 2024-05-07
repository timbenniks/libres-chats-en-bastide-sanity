<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const props = defineProps([
  "encodeDataAttribute",
  "heading",
  "description",
  "cats",
  "ctas",
]);

const featuredCats = computed(() => {
  return props.cats.filter((cat: any) => cat.showOnWebsite);
});
</script>

<template>
  <div class="mb-12 px-12 md:px-24">
    <h3
      v-if="heading"
      class="font-serif text-blue text-4xl mb-2 max-w-[600px] text-center md:text-left"
      :data-sanity="encodeDataAttribute?.(['heading'])"
    >
      {{ heading }}
    </h3>

    <p
      v-if="description"
      class="mb-4 max-w-[600px] text-center md:text-left"
      :data-sanity="encodeDataAttribute?.(['description'])"
    >
      {{ description }}
    </p>
    <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <cat-card
        v-for="(cat, index) in featuredCats"
        :cat="cat"
        :data-sanity="encodeDataAttribute?.([index, 'cat'])"
        :key="cat._id"
      />
    </div> -->

    <client-only>
      <carousel :items-to-show="2" :wrap-around="true">
        <slide v-for="(cat, index) in featuredCats" :key="cat._id">
          <div class="mx-4">
            <cat-card
              :cat="cat"
              :data-sanity="encodeDataAttribute?.([index, 'cat'])"
            />
          </div>
        </slide>
      </carousel>
    </client-only>

    <div
      class="flex space-y-2 sm:space-x-2 sm:space-y-0 flex-col sm:flex-row mt-4"
    >
      <Cta v-for="cta in ctas" :key="cta.label" :cta="cta" />
    </div>
  </div>
</template>
