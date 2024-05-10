<script setup lang="ts">
import type { Cat, CatFilters } from "@/utils/types";
import {
  createQuery,
  hashQueryCacheKey,
  checkFilterActive,
} from "@/utils/helpers";

const { data: page, encodeDataAttribute } = await useGetContentForType({
  slug: "cats",
  type: "page",
});

useOGTags(page?.value);

useJsonld({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": "https://libreschatsenbastice.fr",
        name: "D'accueil",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": `https://timbenniks.dev/${page.value.slug.current}`,
        name: page.value.title,
      },
    },
  ],
});

const sanity = useSanity();
const colors = await useCatColors();
const filters = reactive<CatFilters>({
  withDogs: false,
  withCats: false,
  sex: "",
  color: "",
  date: "",
});

const query = ref(createQuery(filters));

watch(filters, () => {
  query.value = createQuery(filters);
});

const { data, pending } = await useAsyncData(
  hashQueryCacheKey(query, filters),
  async () => await sanity.fetch<Cat[]>(query.value, filters),
  {
    watch: [filters],
    transform: (cats: Cat[]) => {
      return cats.filter((cat: Cat) => cat.showOnWebsite);
    },
  }
);

function resetFilters() {
  filters.withDogs = false;
  filters.withCats = false;
  filters.sex = "";
  filters.color = "";
  filters.date = "";
}

const filtered = computed(() => {
  return checkFilterActive(filters);
});
</script>

<template>
  <GlobalHeader :large="false" />
  <RenderPage :data="page" :encodeDataAttribute="encodeDataAttribute" />
  <div
    class="w-full bg-lightBlue py-4 md:-mt-12 px-4 md:px-24 flex space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row"
  >
    <FilterCheckBox for="withDogs" label="OK CHIEN">
      <input
        id="withDogs"
        type="checkbox"
        v-model="filters.withDogs"
        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-lightBlue before:opacity-0 before:transition-opacity checked:border-lightBlue checked:bg-lightBlue checked:before:bg-lightBlue hover:before:opacity-0"
      />
    </FilterCheckBox>

    <FilterCheckBox for="withCats" label="OK CHATS">
      <input
        id="withCats"
        type="checkbox"
        v-model="filters.withCats"
        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-lightBlue before:opacity-0 before:transition-opacity checked:border-lightBlue checked:bg-lightBlue checked:before:bg-lightBlue hover:before:opacity-0"
      />
    </FilterCheckBox>

    <FilterSelect>
      <select
        v-model="filters.sex"
        class="w-full md:w-32 md:py-0 py-2 px-2 appearance-none forced-colors:appearance-auto row-start-1 col-start-1 rounded-lg bg-blue text-white font-bold uppercase"
      >
        <option selected value="">Sexe</option>
        <option value="male">Mâle</option>
        <option value="female">Femelle</option>
      </select>
    </FilterSelect>

    <FilterSelect>
      <select
        v-model="filters.color"
        class="w-full md:w-32 md:py-0 py-2 px-2 appearance-none forced-colors:appearance-auto row-start-1 col-start-1 rounded-lg bg-blue text-white font-bold uppercase"
      >
        <option selected value="">couleur</option>
        <option :value="color" v-for="color in colors" :key="color">
          {{ color }}
        </option>
      </select>
    </FilterSelect>

    <button class="cta secondary" v-show="filtered" @click="resetFilters">
      réinitialiser les filtres
    </button>

    <Loader class="!mt-2" v-show="pending" />

    <!-- <FilterSelect>
      <select
        v-model="filters.date"
        class="w-32 px-2 appearance-none forced-colors:appearance-auto row-start-1 col-start-1 rounded-lg bg-blue text-white font-bold uppercase"
      >
        <option selected value="">Age</option>
        <option value="younger-than-six-months">Younger than 6 months</option>
        <option value="between-six-and-twelve-months">
          Between 6 and 12 months
        </option>
        <option value="older-than-a-year">Older than a year</option>
      </select>
    </FilterSelect> -->
  </div>

  <div
    v-if="data && data.length > 0"
    class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 px-4 md:px-24"
  >
    <cat-card v-for="cat in data" :cat="cat" :key="cat._id" />
  </div>
  <div v-else>
    <p class="my-12 px-24">
      Aucun résultat.
      <button @click="resetFilters" class="underline">
        Réinitialiser les filtres.
      </button>
    </p>
  </div>

  <GlobalFooter />
</template>
