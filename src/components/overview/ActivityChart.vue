<script setup lang="ts">
import Button from 'primevue/button'
import ChevronDownIcon from '../icons/ChevronDownIcon.vue'
import ActivityLinesIcon from '../icons/ActivityLinesIcon.vue'
</script>

<template>
  <section class="activity-card">
    <div class="activity-header">
      <h3>Activity</h3>
      <Button label="This Week" text severity="secondary">
        <template #icon>
          <ChevronDownIcon />
        </template>
      </Button>
    </div>

    <div class="chart-panel">
      <div class="y-axis">
        <span>3</span>
        <span>2</span>
        <span>1</span>
      </div>
      <div class="chart">
        <ActivityLinesIcon class="chart-lines" />
        <div class="tooltip">
          <span>2 Task</span>
          <div class="tooltip-arrow"></div>
        </div>
        <div class="x-axis">
          <span>S</span>
          <span>M</span>
          <span>T</span>
          <span>W</span>
          <span>T</span>
          <span>F</span>
          <span>S</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.activity-card {
  background: #f8f9ff;
  border-radius: 24px;
  padding: 18px 20px 20px;
  display: grid;
  gap: 18px;
  box-shadow: inset 0 0 0 1px rgba(232, 235, 245, 0.9);
}

.activity-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.activity-header h3 {
  margin: 0;
  font-size: 1.1rem;
  color: var(--text-strong);
}

.chart-panel {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: end;
}

.y-axis {
  display: grid;
  gap: 22px;
  color: #6f7696;
  font-weight: 600;
  padding-bottom: 16px;
}

.chart {
  position: relative;
  background: #ffffff;
  border-radius: 18px;
  padding: 12px 12px 30px;
  box-shadow: 0 12px 24px rgba(18, 22, 40, 0.04);
}

.chart::before {
  content: '';
  position: absolute;
  inset: 12px 12px 30px;
  border-radius: 16px;
  background-image: repeating-linear-gradient(
    to right,
    rgba(231, 235, 245, 0.6),
    rgba(231, 235, 245, 0.6) 1px,
    transparent 1px,
    transparent 60px
  );
}

:deep(.chart-lines) {
  width: 100%;
  height: 120px;
  position: relative;
  z-index: 1;
}

.tooltip {
  position: absolute;
  left: 70px;
  top: -6px;
  background: #191b28;
  color: #ffffff;
  border-radius: 16px;
  padding: 8px 16px;
  font-weight: 600;
  font-size: 0.95rem;
  z-index: 2;
}

.tooltip-arrow {
  position: absolute;
  left: 22px;
  bottom: -8px;
  width: 16px;
  height: 16px;
  background: #191b28;
  transform: rotate(45deg);
}

.x-axis {
  position: absolute;
  bottom: 8px;
  left: 12px;
  right: 12px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  color: #2e3145;
  font-weight: 600;
}

@media (max-width: 900px) {
  .activity-card {
    padding: 16px;
    gap: 14px;
  }

  .chart {
    padding: 10px 10px 26px;
  }

  :deep(.chart-lines) {
    height: 100px;
  }

  .tooltip {
    left: 54px;
    font-size: 0.85rem;
    padding: 6px 12px;
  }
}
</style>
