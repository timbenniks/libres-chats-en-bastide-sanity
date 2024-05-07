<script lang="ts" setup>
const sanity = useSanity();

const test = ref<Cat>();

const cat: Cat = await sanity.fetch(
  groq`*[_type == "cat" && _id == "f220c5da-9496-4113-a692-038eeb8c3937"][0] {
    iconsOnCard
  }`
);

test.value = cat;

console.log(test.value);
</script>

<template>
  <pre>{{ test }}</pre>
  <CatCardIcon
    v-for="iconOnCard in test?.iconsOnCard"
    :iconOnCard="iconOnCard"
    :key="iconOnCard"
  />
</template>
