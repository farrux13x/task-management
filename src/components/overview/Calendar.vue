<script setup lang="ts">
import { computed, ref } from 'vue'
import ArrowLeftIcon from '../icons/ArrowLeftIcon.vue'
import ArrowRightIcon from '../icons/ArrowRightIcon.vue'

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const today = new Date()
const startOfWeek = (date: Date) => {
  const start = new Date(date)
  start.setHours(0, 0, 0, 0)
  start.setDate(start.getDate() - start.getDay())
  return start
}

const weekStart = ref<Date>(startOfWeek(today))

const weekDates = computed(() => {
  const start = weekStart.value
  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(start)
    day.setDate(start.getDate() + index)
    return day
  })
})

const activeDateIndex = computed(() => {
  const start = weekStart.value
  if (today < start) {
    return -1
  }
  const diffDays = Math.floor(
    (today.getTime() - start.getTime()) / (24 * 60 * 60 * 1000),
  )
  return diffDays >= 0 && diffDays < 7 ? diffDays : -1
})

const headerLabel = computed(() => {
  const labelDate = weekDates.value[3] ?? weekStart.value
  return labelDate.toLocaleDateString(undefined, {
    month: 'long',
    year: 'numeric',
  })
})

const goNextWeek = () => {
  const next = new Date(weekStart.value)
  next.setDate(next.getDate() + 7)
  weekStart.value = next
}

const goPrevWeek = () => {
  const prev = new Date(weekStart.value)
  prev.setDate(prev.getDate() - 7)
  weekStart.value = prev
}
</script>

<template>
  <article class="calendar-card">
    <header class="calendar-header">
      <button class="nav-btn" aria-label="Previous week" @click="goPrevWeek">
        <ArrowLeftIcon />
      </button>
      <p class="fs-14 fw-600">{{ headerLabel }}</p>
      <button class="nav-btn" aria-label="Next week" @click="goNextWeek">
        <ArrowRightIcon />
      </button>
    </header>

    <div class="calendar-grid">
      <div class="week-row">
        <span
          v-for="(day, i) in weekDays"
          :key="day"
          :class="{ active: i === activeDateIndex }"
        >
          {{ day }}
        </span>
      </div>

      <div class="date-row">
        <button
          v-for="(date, i) in weekDates"
          :key="date.toISOString()"
          class="date-item"
          :class="{ active: i === activeDateIndex }"
          type="button"
          aria-label="Select date"
        >
          <span class="date-circle">{{ date.getDate() }}</span>
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
  padding: 1.2500rem;
  box-shadow: 0 18px 36px rgba(17, 20, 38, 0.08);
  display: grid;
  gap: 1.1250rem;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
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
  gap: 0.7500rem;
}

.week-row {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  color: #5b5f7d;
  gap: 1.1250rem;
}
.week-row span {
  font-weight: 600;
  font-size: 12px;
}
.week-row .active{
  z-index: 3;
  color: white;
}

.date-row {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  gap: 1.1250rem;
}

.date-item {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.date-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f3f4f7;
  display: grid;
  place-items: center;
  font-weight: 600;
  z-index: 2;
  font-size: 12px;
  color: #1c2031;
}

.date-item.active {
  position: relative;
  z-index: 2;
}

.date-item.active::after {
  content: '';
  position: absolute;
  top: -34px;
  left: -4px;
  width: 40px;
  height: 72px;
  border-radius: 999px;
  background: #14172b;
  z-index: -1;
  display: grid;
  place-items: center;
}

.date-item.active .date-circle {
  background: #4f69ff;
  color: #ffffff;
  z-index: 2;
}

</style>
