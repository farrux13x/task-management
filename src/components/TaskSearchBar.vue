<script setup lang="ts">
import SearchOutlineIcon from './icons/SearchOutlineIcon.vue'
import SortLinesIcon from './icons/SortLinesIcon.vue'
</script>

<template>
  <div class="task-search">
    <div class="search-field">
      <input type="text" placeholder="Search Task" aria-label="Search Task" />
      <span class="search-icon" aria-hidden="true">
        <SearchOutlineIcon />
      </span>
    </div>
    <button class="filter-button" type="button" aria-label="Filters">
      <SortLinesIcon />
    </button>
  </div>
</template>

<style scoped>
.task-search {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 16px;
  align-items: center;
}

.search-field {
  position: relative;
}

.search-field input {
  width: 100%;
  border-radius: 18px;
  border: 1px solid #eef0f6;
  padding: 14px 50px 14px 18px;
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

.filter-button {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  border: 1px solid #eef0f6;
  background: #ffffff;
  color: #8f95b2;
  display: grid;
  place-items: center;
  box-shadow: 0 14px 26px rgba(22, 26, 50, 0.04);
  cursor: pointer;
}

.filter-button :deep(svg) {
  width: 22px;
  height: 22px;
}
</style>
