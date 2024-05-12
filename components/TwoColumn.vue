<script setup lang="ts">
import { vercelStegaClean } from "@vercel/stega";
import { getComponentForName } from "~/utils/componentMapper";

const props = defineProps([
  "heading",
  "description",
  "background",
  "sideA",
  "sideB",
  "sizes",
]);

const bg = computed(() => {
  const background = vercelStegaClean(props.background);

  return background === "bg-lightBlue" ? "bg-lightBlue" : "bg-yellow";
});

const sizeClasses = computed(() => {
  const sizes = vercelStegaClean(props.sizes);

  if (sizes === "sideSame") {
    return "md:grid-cols-2";
  }

  if (sizes === "sideABigger") {
    return "md:grid-cols-[2fr,1fr]";
  }

  if (sizes === "sideBBigger") {
    return "md:grid-cols-[1fr,2fr]";
  }
});
</script>

<template>
  <div class="mb-12 py-12 px-8 md:px-24 bg-opacity-40" :class="bg">
    <h3 v-if="heading" class="font-serif text-blue text-4xl mb-4">
      {{ heading }}
    </h3>
    <p v-if="description" class="mb-4">
      {{ description }}
    </p>
    <div
      class="grid grid-cols-1 gap-8 max-w-[900px] mx-auto"
      :class="sizeClasses"
    >
      <div class="side-a">
        <component
          v-for="component in sideA"
          :is="getComponentForName(component?._type)"
          :key="(component?._id as string)"
          v-bind="component"
          :inTwoColumn="true"
        />
      </div>
      <div class="side-b">
        <component
          v-for="component in sideB"
          :is="getComponentForName(component?._type)"
          :key="(component?._id as string)"
          v-bind="component"
          :inTwoColumn="true"
        />
      </div>
    </div>
  </div>
</template>
