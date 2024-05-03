<script setup lang="ts">
defineProps(["statBlocks", "encodeDataAttribute"]);
</script>

<template>
  <div class="mb-12 px-12 md:px-24">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <StatCard
        v-for="(stat, index) in statBlocks"
        :key="stat._key"
        :stat="stat"
        :index="index"
        :encodeDataAttribute="encodeDataAttribute"
      />
    </div>
  </div>
</template>
