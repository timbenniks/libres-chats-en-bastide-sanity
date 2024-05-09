<script setup lang="ts">
defineProps<{
  icon: string;
}>();
</script>

<template>
  <li class="space-x-2">
    <template v-if="icon === 'withCats'">
      <Icon name="cat" />
      <span>Ok Chats</span>
    </template>
    <template v-if="icon === 'withDogs'">
      <Icon name="dog" />
      <span>OK Chiens</span>
    </template>
    <template v-if="icon === 'withFamily'">
      <Icon name="child" />
      <span>OK Enfents</span>
    </template>
    <template v-if="icon === 'specialNeeds'">
      <Icon name="special" />
      <span>Besoin speciale</span>
    </template>
  </li>
</template>
