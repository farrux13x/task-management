<script setup lang="ts">
const props = defineProps<{
  class?: string
  color?: string
}>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    :class="props.class"
    :style="props.color ? { color: props.color } : undefined"
    aria-hidden="true"
  >
    <path
      d="M7 10l5 5 5-5"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
