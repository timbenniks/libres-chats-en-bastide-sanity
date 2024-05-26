<script setup lang="ts">
defineProps(["heading", "description", "steps", "ctas"]);
</script>

<template>
  <div class="mb-12 px-12 md:px-24 py-12 bg-lightBlue bg-opacity-40">
    <h3 v-if="heading" class="font-serif text-blue text-4xl mb-2 text-center">
      {{ heading }}
    </h3>

    <p v-if="description" class="mb-4 mx-auto max-w-[600px] text-center">
      {{ description }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
      <StepCard
        v-for="(step, index) in steps"
        :key="step.step"
        :step="step"
        :index="index"
      />
    </div>

    <div
      class="flex space-y-2 sm:space-x-2 sm:space-y-0 flex-col sm:flex-row mt-4 justify-center"
    >
      <Cta v-for="cta in ctas" :key="cta.label" :cta="cta" />
    </div>
  </div>
</template>
