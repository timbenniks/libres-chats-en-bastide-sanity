<script setup lang="ts">
defineProps(["large"]);

const navigation = await useNavigation();
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
        <li v-for="page in navigation.pages" :key="page._key">
          <nuxt-link
            :to="page.internalUrl === 'home' ? '/' : `/${page.internalUrl}`"
            >{{ page.menuLabel }}</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="postcss">
.router-link-active {
  @apply underline;
}
</style>
