<script setup lang="ts">
import type { Cat, CatFilters } from "@/utils/types";
import { hash } from "ohash";

const { data: page, encodeDataAttribute } = await useGetContentForType({
  slug: "cats",
  type: "page",
});

const sanity = useSanity();
const filters = reactive<CatFilters>({
  withDogs: undefined,
  withCats: undefined,
  sex: "",
  color: "",
  date: "",
});

const query = ref(createQuery());

function createQuery() {
  let birthdayQuery = "";
  switch (filters.date) {
    case "younger-than-six-months":
      birthdayQuery =
        " && birthDate >= dateTime(now()) - (6 * 30 * 24 * 60 * 60)";
      break;
    case "between-six-and-twelve-months":
      birthdayQuery =
        " && birthDate < dateTime(now()) - (6 * 30 * 24 * 60 * 60) && birthDate >= dateTime(now()) - (12 * 30 * 24 * 60 * 60)";
      break;
    case "older-than-a-year":
      birthdayQuery =
        " && birthDate < dateTime(now()) - (12 * 30 * 24 * 60 * 60)";
      break;
  }

  return groq`*[_type == "cat"
    ${filters.withDogs ? " && withDogs == $withDogs" : ""}
    ${filters.withCats ? " && withCats == $withCats" : ""}
    ${filters.sex ? " && sex == $sex" : ""}
    ${filters.color ? " && color match $color" : ""}
    ${filters.date ? birthdayQuery : ""}
  ]`;
}

watch(filters, () => {
  query.value = createQuery();
});

const { data } = await useAsyncData(
  `sanity-${hash(query.value + JSON.stringify(filters))}`,
  async () => await sanity.fetch<Cat[]>(query.value, filters),
  { watch: [filters] }
);

const colors = await useCatColors();
</script>

<template>
  <GlobalHeader :large="true" />
  <RenderPage :data="page" :encodeDataAttribute="encodeDataAttribute" />

  <div class="w-full bg-lightBlue py-4 -mt-12 px-24 flex space-x-2">
    <div
      role="button"
      class="flex items-center p-0 rounded-lg outline-none text-start bg-blue text-white font-bold"
    >
      <label
        for="withDogs"
        class="flex items-center w-full px-3 py-2 cursor-pointer"
      >
        <div class="grid mr-3 place-items-center">
          <div class="inline-flex items-center">
            <label
              class="relative flex items-center p-0 rounded-full cursor-pointer"
              for="withDogs"
            >
              <input
                id="withDogs"
                type="checkbox"
                v-model="filters.withDogs"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-lightBlue before:opacity-0 before:transition-opacity checked:border-lightBlue checked:bg-lightBlue checked:before:bg-lightBlue hover:before:opacity-0"
              />
              <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="black"
                  stroke="black"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
        </div>
        OK CHIEN
      </label>
    </div>

    <div
      role="button"
      class="flex items-center p-0 rounded-lg outline-none text-start bg-blue text-white font-bold"
    >
      <label
        for="withCats"
        class="flex items-center w-full px-3 py-2 cursor-pointer"
      >
        <div class="grid mr-3 place-items-center">
          <div class="inline-flex items-center">
            <label
              class="relative flex items-center p-0 rounded-full cursor-pointer"
              for="withCats"
            >
              <input
                id="withCats"
                type="checkbox"
                v-model="filters.withCats"
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-lightBlue before:opacity-0 before:transition-opacity checked:border-lightBlue checked:bg-lightBlue checked:before:bg-lightBlue hover:before:opacity-0"
              />
              <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="black"
                  stroke="black"
                  stroke-width="1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
          </div>
        </div>
        OK CHATS
      </label>
    </div>

    <div class="grid">
      <svg
        class="pointer-events-none z-10 right-1 relative col-start-1 row-start-1 h-4 w-4 self-center justify-self-end forced-colors:hidden"
        viewBox="0 0 16 16"
        fill="white"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <select
        v-model="filters.sex"
        class="w-32 px-2 appearance-none forced-colors:appearance-auto row-start-1 col-start-1 rounded-lg bg-blue text-white font-bold uppercase"
      >
        <option selected value="">Sexe</option>
        <option value="male">Mâle</option>
        <option value="female">Femelle</option>
      </select>
    </div>
    <div class="grid">
      <svg
        class="pointer-events-none z-10 right-1 relative col-start-1 row-start-1 h-4 w-4 self-center justify-self-end forced-colors:hidden"
        viewBox="0 0 16 16"
        fill="white"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <select
        v-model="filters.color"
        class="w-32 px-2 appearance-none forced-colors:appearance-auto row-start-1 col-start-1 rounded-lg bg-blue text-white font-bold uppercase"
      >
        <option selected value="">couleur</option>
        <option :value="color" v-for="color in colors" :key="color">
          {{ color }}
        </option>
      </select>
    </div>
    <div class="grid">
      <svg
        class="pointer-events-none z-10 right-1 relative col-start-1 row-start-1 h-4 w-4 self-center justify-self-end forced-colors:hidden"
        viewBox="0 0 16 16"
        fill="white"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
          clip-rule="evenodd"
        ></path>
      </svg>
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
    </div>
  </div>

  <pre>{{ query }}</pre>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 px-24">
    <cat-card
      v-for="(cat, index) in data"
      :cat="cat"
      :data-sanity="encodeDataAttribute?.([index, 'cat'])"
      :key="cat._id"
    />
  </div>

  <GlobalFooter />
</template>
