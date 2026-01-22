<script setup lang="ts">
import InputText from 'primevue/inputtext'
import SearchIcon from './icons/SearchIcon.vue'

defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="search-bar">
    <InputText
      placeholder="Search Name"
      class="search-input"
      :modelValue="modelValue"
      @update:modelValue="(value) => emit('update:modelValue', value)"
    />
    <SearchIcon class="search-icon" />
  </div>
</template>

<style scoped>
.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 0.7500rem 1rem;
  border-radius: 18px;
  border: 1px solid #eef0f6;
}

.search-input {
  width: 100%;
  border: none;
  box-shadow: none;
  padding-right: 2.6250rem;
  font-size: 1rem;
}

.search-icon {
  position: absolute;
  right: 16px;
  width: 20px;
  height: 20px;
  color: #9aa0b8;
}
</style>
