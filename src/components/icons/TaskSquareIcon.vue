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
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="6"
      stroke="currentColor"
      stroke-width="1.6"
    />
    <path
      d="M9 9h6M9 13h4"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
    />
  </svg>
</template>
