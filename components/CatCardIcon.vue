<script setup lang="ts">
defineProps<{
  iconOnCard: string;
}>();
</script>

<template>
  <p>icon: {{ iconOnCard }}</p>
  <p>icon === withDogs: {{ iconOnCard === "withDogs" }}</p>
  <p>typeof icon: {{ typeof iconOnCard }}</p>
</template>
