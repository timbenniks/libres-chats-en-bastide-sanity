<template>
  <div class="grid">
    <svg
      class="pointer-events-none z-10 right-1 relative col-start-1 row-start-1 h-4 w-4 self-center justify-self-end forced-colors:hidden"
      viewBox="0 0 16 16"
      fill="white"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
        clip-rule="evenodd"
      ></path>
    </svg>
    <slot />
  </div>
</template>
