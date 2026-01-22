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
    <circle cx="11" cy="11" r="7.5" stroke="currentColor" stroke-width="1.6" />
    <path
      d="M16.2 16.2l3.3 3.3"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
    />
  </svg>
</template>
