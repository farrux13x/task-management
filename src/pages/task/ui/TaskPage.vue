<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DetailTask from '@components/DetailTask.vue'
import AssignedAssignments from '@components/AssignedAssignments.vue'
import TaskSearchBar from '@components/TaskSearchBar.vue'
import { useTasksStore } from '@/stores/tasks'

const route = useRoute()
const tasksStore = useTasksStore()

const selectedTask = computed(() => {
  const taskId = Number(route.params.id)
  if (!Number.isFinite(taskId)) {
    return null
  }
  return tasksStore.tasks.find((task) => task.id === taskId) || null
})
</script>

<template>
  <section class="task-page">
    <div class="task-header">
      <h2 class="message-title">Detail Task</h2>
      <TaskSearchBar />
    </div>
    <div class="task-container">
      <DetailTask :task="selectedTask" />
      <AssignedAssignments :task="selectedTask" />
    </div>
  </section>
</template>

<style scoped>
.task-page {
  overflow: auto;
  padding: 2rem;
  display: grid;
  gap: 1.5000rem;
}

.task-header {
  display: none;
  gap: 1.1250rem;
}

.message-title {
  margin: 0;
  font-size: 1.8rem;
  color: var(--text-strong);
  display: none;
}

.task-container {
  gap: 2rem;
  display: flex;
  align-items: flex-start;
}

@media (max-width: 1050px) {
  .task-page {
    padding: 0.5000rem 1.1250rem 1.7500rem;
  }

  .task-header {
    display: grid;
  }

  .message-title {
    display: block;
  }

  .task-container {
    flex-direction: column;
  }
}
</style>
