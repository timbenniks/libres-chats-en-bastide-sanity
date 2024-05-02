<script setup lang="ts">
defineProps(["large"]);
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
        class="justify-start md:justify-center ml-4 md:ml-0 flex space-x-8 overflow-x-auto overflow-y-none whitespace-nowrap mb-6 uppercase font-bold"
      >
        <li><nuxt-link to="/">D'accueil</nuxt-link></li>
        <li><nuxt-link to="/about">Chats</nuxt-link></li>
        <li><nuxt-link to="/about">Fair un don</nuxt-link></li>
        <li><nuxt-link to="/about">Notre Asso</nuxt-link></li>
        <li><nuxt-link to="/about">Nous Aider</nuxt-link></li>
        <li><nuxt-link to="/about">Contact</nuxt-link></li>
      </ul>

      <p class="mb-1">&copy; 2024 Libres Chats en Bastide.</p>
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
