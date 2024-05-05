<script lang="ts" setup>
const props = defineProps(["cta", "url"]);

const to = computed(() => {
  return props.cta?.url?.slug?.current === "home"
    ? "/"
    : props.cta?.url?.slug?.current;
});
</script>

<template>
  <nuxt-link
    v-if="to || url"
    class="cta"
    :class="{ secondary: cta.secondary, light: cta.onDarkBackground }"
    :to="url ? url : to"
  >
    {{ cta.label }}
  </nuxt-link>
</template>
