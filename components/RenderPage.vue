<script setup lang="ts">
import { getComponentForName } from "~/utils/componentMapper";

defineProps(["data"]);
</script>

<template>
  <main>
    <section class="mb-12" v-if="data?.components">
      <component
        v-for="component in data?.components"
        :is="getComponentForName(component?._type)"
        :key="(component?._id as string)"
        v-bind="component"
      />
    </section>
  </main>
</template>
