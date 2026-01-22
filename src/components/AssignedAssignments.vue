<script setup lang="ts">
import Button from 'primevue/button'
import FolderUploadIcon from './icons/FolderUploadIcon.vue'
</script>

<template>
  <article class="assigned-assignments">
    <header class="assignment-header">
      <span class="eyebrow">Assigned Assignments</span>
      <h3>Creating Awesome Mobile Apps</h3>
      <p class="assignment-meta">UI UX Design . Apps Design</p>
    </header>

    <section class="detail-section">
      <h4>Detail Student</h4>
      <div class="detail-list">
        <div class="detail-row">
          <span>Student's name</span>
          <strong>Dennis Nzioki</strong>
        </div>
        <div class="detail-row">
          <span>Student Class</span>
          <strong>MIPA 2</strong>
        </div>
        <div class="detail-row">
          <span>Student Number</span>
          <strong>10</strong>
        </div>
      </div>
    </section>

    <section class="detail-section">
      <h4>File Task</h4>
      <div class="detail-list">
        <div class="detail-row">
          <span>Last Modified</span>
          <strong>1 July 2022</strong>
        </div>
      </div>
      <p class="muted">File submissions</p>
      <div class="drop-area" role="presentation" aria-hidden="true">
        <div class="drop-icon">
          <FolderUploadIcon />
        </div>
      </div>
      <p class="hint">*drag or browser from device</p>
    </section>

    <Button label="Submit" class="submit-btn" />
  </article>
</template>

<style scoped>
.assigned-assignments {
  width: 100%;
  background: #ffffff;
  padding: 22px;
  gap: 22px;
  border-radius: 24px;
  box-shadow: 0 18px 32px rgba(15, 18, 32, 0.06);
  display: grid;
}

.assignment-header {
  display: grid;
  gap: 10px;
}

.eyebrow {
  font-size: 1.1rem;
  color: var(--text-strong);
  font-weight: 600;
}

.assignment-header h3 {
  margin: 0;
  font-size: 1.7rem;
  color: #1c2031;
}

.assignment-meta {
  margin: 0;
  font-size: 1.1rem;
  color: #5b5f7d;
  font-weight: 500;
}

.detail-section {
  display: grid;
  gap: 14px;
}

.detail-section h4 {
  margin: 0;
  font-size: 1.25rem;
  color: var(--text-strong);
}

.detail-list {
  display: grid;
  gap: 16px;
}

.detail-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  color: #5b5f7d;
  font-size: 1rem;
}

.detail-row strong {
  color: var(--text-strong);
  font-weight: 600;
}

.muted {
  margin: 0;
  color: #5b5f7d;
  font-weight: 500;
}

.drop-area {
  border: 2px dashed rgba(94, 110, 248, 0.6);
  border-radius: 20px;
  padding: 36px;
  display: grid;
  place-items: center;
  min-height: 160px;
  background: rgba(95, 109, 248, 0.06);
}

.drop-icon {
  width: 58px;
  height: 58px;
  border-radius: 18px;
  border: 2px solid rgba(169, 178, 255, 0.6);
  color: rgba(122, 136, 255, 0.8);
  display: grid;
  place-items: center;
}

.drop-icon svg {
  width: 28px;
  height: 28px;
}

.hint {
  margin: 0;
  color: #6c6f8e;
  font-size: 0.95rem;
}

.submit-btn {
  width: 100%;
  border-radius: 18px;
  padding: 14px 0;
  font-size: 1rem;
}

@media (max-width: 900px) {
  .assigned-assignments {
    padding: 20px;
  }

  .assignment-header h3 {
    font-size: 1.6rem;
  }

  .detail-row {
    align-items: center;
  }
}
</style>
