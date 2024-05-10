<script setup lang="ts">
defineProps(["step", "index"]);
</script>

<template>
  <div class="relative aspect-[389/270] rounded-2xl border-4 border-lightBlue">
    <nuxt-img
      provider="sanity"
      :src="step.image.asset._ref"
      width="389"
      height="270"
      sizes="sm:30vw"
      loading="lazy"
      class="absolute w-full h-full opacity-30 rounded-xl"
      fit="crop"
      :alt="step.name"
    />

    <p
      class="absolute left-4 top-4 lg:bottom-2 lg:top-auto font-serif text-blue text-[100px] sm:text-[160px] md:text-[120px] xl:text-[160px] leading-[0.8]"
      v-if="step.step"
    >
      {{ step.step }}
    </p>
    <p
      class="absolute right-4 bottom-4 leading-none font-serif text-blue text-2xl max-w-60 text-right"
    >
      {{ step.name }}
    </p>
  </div>
</template>
