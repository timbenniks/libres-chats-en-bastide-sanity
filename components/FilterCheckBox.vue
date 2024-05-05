<script lang="ts" setup>
defineProps(["for", "label"]);
</script>

<template>
  <div
    role="button"
    class="flex items-center p-0 rounded-lg outline-none text-start bg-blue text-white font-bold"
  >
    <label :for="for" class="flex items-center w-full px-3 py-2 cursor-pointer">
      <div class="grid mr-3 place-items-center">
        <div class="inline-flex items-center">
          <label
            class="relative flex items-center p-0 rounded-full cursor-pointer"
            :for="for"
          >
            <slot />
            <span
              class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="black"
                stroke="black"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
        </div>
      </div>
      {{ label }}
    </label>
  </div>
</template>
