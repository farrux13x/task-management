<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SideMenu from './components/SideMenu.vue'
import TopHeader from './components/TopHeader.vue'
import Calendar from '@components/overview/Calendar.vue'
import TaskToday from '@components/overview/TaskToday.vue'
import { useTasksStore } from '@/stores/tasks'

import { RouterView } from 'vue-router'

const route = useRoute()
const tasksStore = useTasksStore()
const firstTask = computed(() => tasksStore.tasks[0] ?? null)
</script>

<template>
  <div class="app">
    <SideMenu />

    <main class="content">
      <TopHeader />
      <RouterView />
    </main>

    <aside v-if="route.name == 'overview'" class="overview-panel">
      <Calendar />
      <TaskToday :task="firstTask" />
    </aside>
  </div>
</template>

<style scoped>
.app {
  height: 100%;
  display: flex;
}

.content {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fafafa;
}

.overview-panel {
  overflow: auto;
  padding: 1.2rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
}

@media (max-width: 1050px) {
  .app {
    flex-direction: column;
    overflow-y: auto;
    padding-bottom: 5.5000rem;
  }

  .content {
    /* height: unset; */
    flex: none;
    overflow: visible;
  }

  .overview-panel {
    padding: 0 1.1250rem 1.5000rem;
    gap: 1.2500rem;
    overflow: visible;
  }
}
</style>
