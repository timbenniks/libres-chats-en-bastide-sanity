<script setup lang="ts">
defineProps(["large"]);
</script>
<template>
  <div>
    <header
      :class="large ? 'py-8' : 'py-2 flex items-center'"
      class="bg-lightBlue text-center px-4"
    >
      <nuxt-link to="/">
        <NuxtImg
          src="/logo.png"
          alt="Libres Chats en Bastide"
          loading="eager"
          sizes="sm:200px lg:400px"
          width="155"
          height="155"
          :class="large ? 'w-[110px] sm:w-[155px] mx-auto' : 'w-[50px] mr-4'"
        />
      </nuxt-link>
      <p
        class="font-serif text-blue"
        :class="large ? 'text-3xl sm:text-4xl' : 'text-2xl'"
      >
        Libres Chats en Bastide
      </p>
    </header>
    <nav class="bg-yellow py-4 md:py-2 pl-4 uppercase font-bold">
      <ul
        class="flex space-x-8 overflow-x-auto overflow-y-none whitespace-nowrap"
        :class="large ? 'justify-start md:justify-center ' : 'justify-start'"
      >
        <li><nuxt-link to="/">D'accueil</nuxt-link></li>
        <li><nuxt-link to="/about">Chats</nuxt-link></li>
        <li><nuxt-link to="/about">Fair un don</nuxt-link></li>
        <li><nuxt-link to="/about">Notre Asso</nuxt-link></li>
        <li><nuxt-link to="/about">Nous Aider</nuxt-link></li>
        <li><nuxt-link to="/about">Contact</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="postcss">
.router-link-active {
  @apply underline;
}
</style>
