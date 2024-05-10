<script setup lang="ts">
defineProps(["large"]);

const navigation = await useNavigation();

const open = ref(false);

function toggle() {
  open.value = !open.value;
}
</script>
<template>
  <div>
    <header
      :class="large ? 'py-8' : 'py-2 flex items-center'"
      class="relative bg-lightBlue text-center md:px-24 px-4"
    >
      <nuxt-link to="/">
        <NuxtImg
          src="/logo.png"
          alt="Libres Chats en Bastide"
          loading="eager"
          sizes="sm:200px lg:400px"
          width="155"
          height="155"
          :class="large ? 'w-[110px] sm:w-[155px] mx-auto' : 'w-[50px] mr-2'"
        />
      </nuxt-link>
      <p
        class="font-serif text-blue"
        :class="large ? 'text-3xl sm:text-4xl' : 'text-2xl'"
      >
        Libres Chats en Bastide
      </p>
      <button
        class="nav-toggle z-[60] absolute top-5 right-5 w-8 h-8 lg:hidden transform transition duration-500 ease-in-out"
        :class="open ? 'open' : ''"
        @click="toggle()"
      >
        <span class="sr-only">Open main menu</span>
        <div class="block w-8 h-8">
          <span
            class="line-1 bg-black translate-y-0 absolute block h-1 w-8 transform bg-primary transition duration-500 ease-in-out"
          ></span>
          <span
            class="line-2 bg-black translate-y-3 absolute block h-1 w-8 transform bg-primary transition duration-500 ease-in-out"
          ></span>
          <span
            class="line-3 bg-black translate-y-6 absolute block h-1 w-8 transform bg-primary transition duration-500 ease-in-out"
          ></span>
        </div>
      </button>
    </header>
    <nav
      class="bg-yellow py-4 md:py-2 pl-4 uppercase font-bold md:px-24 px-4 absolute top-0 left-0 w-full z-50 md:static"
      :class="{ 'hidden lg:block': !open }"
    >
      <NuxtImg
        src="/logo.png"
        alt="Libres Chats en Bastide"
        loading="eager"
        sizes="sm:200px lg:400px"
        width="155"
        height="155"
        class="w-[50px] absolute top-2 left-4 md:hidden"
      />
      <ul
        class="flex flex-col lg:flex-row mt-2 lg:mt-0 space-y-4 lg:space-x-8 lg:space-y-0 text-center"
        :class="large ? 'justify-center' : 'lg:justify-start justify-center'"
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

<style lang="postcss" scoped>
.nav-toggle.open {
  transform: translateY(13px);
}
.nav-toggle.open .line-1 {
  transform: rotate(45deg) translateY(0px);
}

.nav-toggle.open .line-2 {
  opacity: 0;
}

.nav-toggle.open .line-3 {
  transform: rotate(-45deg) translateY(0px);
}
</style>
