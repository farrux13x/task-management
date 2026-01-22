<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    class?: string
    color?: string
    secondaryColor?: string
    accentColor?: string
  }>(),
  {
    color: '#1d1f2b',
    secondaryColor: '#e4e7f5',
    accentColor: '#5160ff',
  },
)
</script>

<template>
  <svg
    viewBox="0 0 420 140"
    :class="props.class"
    :style="props.color ? { color: props.color } : undefined"
    aria-hidden="true"
  >
    <path
      d="M20 110 L80 70 L140 95 L210 45 L280 85 L350 65 L400 72"
      :stroke="props.color"
      stroke-width="4"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 118 L80 86 L140 108 L210 70 L280 96 L350 78 L400 84"
      :stroke="props.secondaryColor"
      stroke-width="4"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="80"
      cy="70"
      r="8"
      fill="#ffffff"
      :stroke="props.accentColor"
      stroke-width="4"
    />
  </svg>
</template>
