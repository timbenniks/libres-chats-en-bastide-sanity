<script setup lang="ts">
const props = defineProps(["heading", "description", "cats", "ctas"]);

const featuredCats = computed(() => {
  return props.cats.filter((cat: any) => cat.showOnWebsite);
});
</script>

<template>
  <div class="mb-12 px-12 md:px-24">
    <h3
      v-if="heading"
      class="font-serif text-blue text-4xl mb-2 max-w-[600px] text-center md:text-left"
    >
      {{ heading }}
    </h3>

    <p v-if="description" class="mb-4 max-w-[600px] text-center md:text-left">
      {{ description }}
    </p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4"
      v-if="featuredCats.length <= 2"
    >
      <cat-card v-for="cat in featuredCats" :key="cat._id" :cat="cat" />
    </div>

    <div v-else>
      <CatCarousel :cats="featuredCats" />
    </div>

    <div
      class="flex space-y-2 sm:space-x-2 sm:space-y-0 flex-col sm:flex-row mt-4"
    >
      <Cta v-for="cta in ctas" :key="cta.label" :cta="cta" />
    </div>
  </div>
</template>
