<template>
  <section class="running-card">
    <div>
      <h3>Running Task</h3>
      <div class="running-total">65</div>
    </div>
    <div class="running-metrics">
      <div class="progress-ring" style="--value: 45%">
        <div class="progress-value">45%</div>
      </div>
      <div class="progress-meta">
        <div class="meta-value">100</div>
        <div class="meta-label">Task</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.running-card {
  position: relative;
  background: #181a28;
  border-radius: 24px;
  padding: 1.2500rem 1.3750rem 1.5000rem;
  color: #ffffff;
  gap: 1.1250rem;
  box-shadow: 0 18px 32px rgba(12, 14, 30, 0.32);
}

.running-card h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.running-total {
  font-size: 2.6rem;
  font-weight: 600;
}

.running-metrics {
  display: flex;
  align-items: center;
  gap: 1.2500rem;
}

.progress-ring {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background: conic-gradient(#4f62ff var(--value), rgba(255, 255, 255, 0.1) 0);
  display: grid;
  place-items: center;
}

.progress-ring::before {
  content: '';
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #181a28;
}

.progress-value {
  position: absolute;
  font-weight: 600;
  font-size: 1.1rem;
}

.progress-meta {
  display: grid;
  gap: 0.2500rem;
}

.meta-value {
  font-size: 1.6rem;
  font-weight: 600;
}

.meta-label {
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 1450px) {
  .running-card{
    display: flex;
    justify-content: space-between;
  }
  /* .running-card {
    padding: 1.1250rem 1.2500rem;
    gap: 0.8750rem;
    width: 100%;
    display: flex;
  }

  .running-total {
    font-size: 2.2rem;
  }

  .progress-ring {
    width: 76px;
    height: 76px;
  }

  .progress-ring::before {
    width: 58px;
    height: 58px;
  }

  .progress-value {
    font-size: 1rem;
  } */
}
</style>
