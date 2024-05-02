<script setup lang="ts">
defineProps(["stat", "index", "encodeDataAttribute"]);
</script>

<template>
  <div class="bg-yellow p-12 text-center">
    <p class="font-serif text-[130px]">
      {{ stat.number }}
    </p>
    <p>{{ stat.name }}</p>
  </div>
</template>
