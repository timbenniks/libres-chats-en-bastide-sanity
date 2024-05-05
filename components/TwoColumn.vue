<script setup lang="ts">
import { getComponentForName } from "~/utils/componentMapper";

defineProps([
  "heading",
  "description",
  "sideA",
  "sideB",
  "encodeDataAttribute",
]);
</script>

<template>
  <div class="bg-yellow mb-12 py-12 px-8 md:px-24">
    <h3
      v-if="heading"
      class="font-serif text-blue text-4xl mb-4"
      :data-sanity="encodeDataAttribute?.(['heading'])"
    >
      {{ heading }}
    </h3>
    <p
      v-if="description"
      class="mb-4 max-w-[600px]"
      :data-sanity="encodeDataAttribute?.(['description'])"
    >
      {{ description }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="sidea">
        <component
          v-for="component in sideA"
          :is="getComponentForName(component?._type)"
          :key="(component?._id as string)"
          v-bind="component"
          :inTwoColumn="true"
          :encodeDataAttribute="encodeDataAttribute"
        />
      </div>
      <div class="ideb">
        <component
          v-for="component in sideB"
          :is="getComponentForName(component?._type)"
          :key="(component?._id as string)"
          v-bind="component"
          :inTwoColumn="true"
          :encodeDataAttribute="encodeDataAttribute"
        />
      </div>
    </div>
  </div>
</template>
