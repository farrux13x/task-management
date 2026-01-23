<script setup lang="ts">
import Button from 'primevue/button'
import SearchOutlineIcon from './icons/SearchOutlineIcon.vue'
import CategoryGridIcon from './icons/CategoryGridIcon.vue'
import SortLinesIcon from './icons/SortLinesIcon.vue'

defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="mentor-search">
    <div class="search-field">
      <input
        type="text"
        placeholder="Search Tasks"
        aria-label="Search Tasks"
        :value="modelValue"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
      <span class="search-icon" aria-hidden="true">
        <SearchOutlineIcon />
      </span>
    </div>

    <div class="filter-actions">
      <Button label="Category" severity="secondary" outlined>
        <template #icon>
          <CategoryGridIcon />
        </template>
      </Button>
      <Button label="Sort By : Deadline" severity="secondary" outlined>
        <template #icon>
          <SortLinesIcon />
        </template>
      </Button>
    </div>

    <button class="filter-shortcut" type="button" aria-label="Filters">
      <SortLinesIcon />
    </button>
  </div>
</template>

<style scoped>
.mentor-search {
  padding: 0 2rem 2rem 2rem;
  background: #ffffff;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1.125rem;
  align-items: center;
}

.search-field {
  position: relative;
}

.search-field input {
  width: 100%;
  border-radius: 18px;
  border: 1px solid #eef0f6;
  padding: 0.875rem 3.125rem 0.875rem 1.125rem;
  font-size: 1rem;
  color: var(--text-strong);
  background: #ffffff;
  box-shadow: 0 14px 26px rgba(22, 26, 50, 0.04);
}

.search-field input::placeholder {
  color: #9aa0b5;
}

.search-icon {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #8f95b2;
}

.search-icon :deep(svg) {
  width: 22px;
  height: 22px;
}

.filter-actions {
  display: flex;
  gap: 0.875rem;
}

.filter-shortcut {
  display: none;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  border: 1px solid #eef0f6;
  background: #ffffff;
  color: #8f95b2;
  align-items: center;
  justify-content: center;
  box-shadow: 0 14px 26px rgba(22, 26, 50, 0.04);
  cursor: pointer;
}

.filter-shortcut :deep(svg) {
  width: 22px;
  height: 22px;
}

@media (max-width: 1050px) {
  .mentor-search {
    grid-template-columns: 1fr auto;
    padding: 0 1.125rem 1.125rem;
  }

  .filter-actions {
    display: none;
  }

  .filter-shortcut {
    display: inline-flex;
  }
}
</style>
