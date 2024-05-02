<script setup lang="ts">
defineProps(["encodeDataAttribute", "heading", "description", "cats"]);
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

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <cat-card
        v-for="(cat, index) in cats"
        :cat="cat"
        :data-sanity="encodeDataAttribute?.([index, 'cat'])"
        :key="cat._id"
      />
    </div>
  </div>
</template>
