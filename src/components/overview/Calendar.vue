<script setup lang="ts">
import ArrowLeftIcon from '../icons/ArrowLeftIcon.vue'
import ArrowRightIcon from '../icons/ArrowRightIcon.vue'

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const dates = [10, 11, 12, 13, 14, 15, 16]
const activeDate = 14
</script>

<template>
  <article class="calendar-card">
    <header class="calendar-header">
      <button class="nav-btn" aria-label="Previous month">
        <ArrowLeftIcon />
      </button>
      <h3>July 2022</h3>
      <button class="nav-btn" aria-label="Next month">
        <ArrowRightIcon />
      </button>
    </header>

    <div class="calendar-grid">
      <div class="week-row">
        <span v-for="day in weekDays" :key="day">{{ day }}</span>
      </div>

      <div class="date-row">
        <button
          v-for="date in dates"
          :key="date"
          class="date-item"
          :class="{ active: date === activeDate }"
          type="button"
          aria-label="Select date"
        >
          <span class="date-circle">{{ date }}</span>
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.calendar-card {
  width: 100%;
  background: #ffffff;
  border-radius: 26px;
  padding: 20px 22px 24px;
  box-shadow: 0 18px 36px rgba(17, 20, 38, 0.08);
  display: grid;
  gap: 18px;
}

.calendar-header {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.calendar-header h3 {
  margin: 0;
  text-align: center;
  font-size: 1.2rem;
  color: #1c2031;
}

.nav-btn {
  border: none;
  background: transparent;
  color: #1c2031;
  cursor: pointer;
}

.nav-btn:last-child {
  justify-self: end;
}

.nav-btn :deep(svg) {
  width: 18px;
  height: 18px;
}

.calendar-grid {
  display: grid;
  gap: 16px;
}

.week-row {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  color: #5b5f7d;
  font-weight: 600;
}

.date-row {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  gap: 10px;
}

.date-item {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.date-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #f3f4f7;
  display: grid;
  place-items: center;
  font-weight: 600;
  color: #1c2031;
}

.date-item.active {
  width: 58px;
  height: 76px;
  border-radius: 999px;
  background: #14172b;
  display: grid;
  place-items: center;
}

.date-item.active .date-circle {
  width: 38px;
  height: 38px;
  background: #4f69ff;
  color: #ffffff;
  border-radius: 50%;
}

@media (max-width: 700px) {
  .calendar-card {
    padding: 18px;
  }

  .date-circle {
    width: 38px;
    height: 38px;
  }

  .date-item.active {
    width: 52px;
    height: 68px;
  }
}

@media (max-width: 520px) {
  .calendar-grid {
    overflow-x: auto;
    padding-bottom: 4px;
  }

  .week-row,
  .date-row {
    min-width: 360px;
  }
}
</style>
