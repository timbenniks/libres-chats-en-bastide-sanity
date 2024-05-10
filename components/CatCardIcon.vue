<script setup lang="ts">
import { vercelStegaClean } from "@vercel/stega";

const props = defineProps<{
  icon: string;
}>();

const cleanedIcon = computed(() => {
  return vercelStegaClean(props.icon);
});
</script>

<template>
  <li class="space-x-2">
    <template v-if="cleanedIcon === 'withCats'">
      <Icon name="cat" />
      <span>Ok Chats</span>
    </template>
    <template v-if="cleanedIcon === 'withDogs'">
      <Icon name="dog" />
      <span>OK Chiens</span>
    </template>
    <template v-if="cleanedIcon === 'withFamily'">
      <Icon name="child" />
      <span>OK Enfents</span>
    </template>
    <template v-if="cleanedIcon === 'specialNeeds'">
      <Icon name="special" />
      <span>Besoin speciale</span>
    </template>
  </li>
</template>
