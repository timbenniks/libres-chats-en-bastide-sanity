<script setup lang="ts">
defineProps(["stat", "index", "encodeDataAttribute"]);
</script>

<template>
  <div class="bg-yellow p-8 text-center">
    <p class="font-serif text-[80px]">
      {{ stat.number }}
    </p>
    <p>{{ stat.name }}</p>
  </div>
</template>
