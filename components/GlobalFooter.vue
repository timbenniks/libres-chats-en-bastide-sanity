<script setup lang="ts">
const navigation = await useNavigation();
</script>
<template>
  <div>
    <footer
      class="bg-yellow border-b-4 border-[#A2C0F3] px-4 py-4 flex items-center justify-center"
    >
      <p class="font-serif text-blue text-2xl">Libres Chats en Bastide</p>
    </footer>
    <nav class="bg-lightBlue py-4 text-center">
      <ul
        class="justify-center ml-4 md:ml-0 flex flex-col lg:flex-row space-y-4 lg:space-x-8 lg:space-y-0 mb-6 uppercase font-bold"
      >
        <li v-for="page in navigation.pages" :key="page._key">
          <nuxt-link
            :to="page.internalUrl === 'home' ? '/' : page.internalUrl"
            >{{ page.menuLabel }}</nuxt-link
          >
        </li>
      </ul>

      <p class="mb-1">&copy; 2024 Libres Chats en Bastide</p>
      <p class="text-xs">
        <a href="tel:+33768093304">+33 7 68 09 33 04</a><br />4 Place Saint Jean
        12200 Villefrance-de-Rouerge
      </p>
    </nav>
  </div>
</template>

<style lang="postcss">
.router-link-active {
  @apply underline;
}
</style>
