<script setup lang="ts">
const props = defineProps<{
  class?: string
  color?: string
}>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    :class="props.class"
    :style="props.color ? { color: props.color } : undefined"
    aria-hidden="true"
  >
    <path
      d="M12 3.6l2.6 5.4 6 .9-4.3 4.1 1 5.9-5.3-2.8-5.3 2.8 1-5.9L3.4 9.9l6-.9L12 3.6z"
    />
  </svg>
</template>
