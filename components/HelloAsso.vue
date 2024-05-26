<script setup lang="ts">
defineProps(["source"]);
</script>

<template>
  <div class="px-12 md:px-24 mb-12">
    <iframe
      id="haWidget"
      allowtransparency="true"
      scrolling="auto"
      frameborder="none"
      :src="source"
      style="width: 100%; height: 1600px; border: none"
    ></iframe>
  </div>
</template>
