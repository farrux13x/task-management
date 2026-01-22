<template>
  <section class="task-page">
    <div class="task-header">
      <h2>Detail Task</h2>
      <TaskSearchBar />
    </div>
    <div class="task-container">
      <DetailTask />
      <AssignedAssignments />
    </div>
  </section>
</template>

<script setup lang="ts">
import DetailTask from '@components/DetailTask.vue'
import AssignedAssignments from '@components/AssignedAssignments.vue'
import TaskSearchBar from '@components/TaskSearchBar.vue'
</script>

<style scoped>
.task-page {
  overflow: auto;
  padding: 32px;
  display: grid;
  gap: 24px;
}

.task-header {
  display: none;
  gap: 18px;
}

.task-header h2 {
  margin: 0;
  font-size: 1.9rem;
  color: var(--text-strong);
}

.task-container {
  gap: 32px;
  display: flex;
  align-items: flex-start;
}

@media (max-width: 900px) {
  .task-page {
    padding: 16px 18px 28px;
  }

  .task-header {
    display: grid;
  }

  .task-container {
    flex-direction: column;
  }
}
</style>
