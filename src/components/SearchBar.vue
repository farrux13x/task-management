<script setup lang="ts">
import InputText from 'primevue/inputtext'
import SearchIcon from './icons/SearchIcon.vue'

const props = defineProps<{
  modelValue?: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="search-bar">
    <InputText
      :model-value="props.modelValue"
      placeholder="Search Name"
      class="search-input"
      @update:model-value="emit('update:modelValue', $event)"
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
  padding: 12px 16px;
  border-radius: 18px;
  border: 1px solid #eef0f6;
}

.search-input {
  width: 100%;
  border: none;
  box-shadow: none;
  padding-right: 42px;
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
