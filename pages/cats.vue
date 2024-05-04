<script setup lang="ts">
import type { Cat, CatFilters } from "@/utils/types";
import { hash } from "ohash";

const sanity = useSanity();
const filters = reactive<CatFilters>({ chipped: undefined });
const query = ref(createQuery());

function createQuery() {
  return groq`*[_type == "cat" ${
    filters.chipped !== undefined ? "&& chipped == $chipped" : ""
  }]`;
}

watch(filters, () => {
  query.value = createQuery();
});

const { data } = await useAsyncData(
  `sanity-${hash(query.value + JSON.stringify(filters))}`,
  async () => await sanity.fetch<Cat[]>(query.value, filters),
  { watch: [filters] }
);
</script>

<template>
  <div class="m-8">
    <label for="chipped" class="mb-8 block">
      <input id="chipped" v-model="filters.chipped" type="checkbox" />
      chipped
    </label>

    <ul>
      <li v-for="cat in data" :key="cat._id">{{ cat._id }} - {{ cat.name }}</li>
    </ul>
  </div>
</template>
