<script setup lang="ts">
import { useRoute } from 'vue-router'
import SideMenu from './components/SideMenu.vue'
import TopHeader from './components/TopHeader.vue'
import Calendar from '@components/overview/Calendar.vue'
import TaskToday from '@components/overview/TaskToday.vue'

import { RouterView } from 'vue-router'

const route = useRoute()
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
      <TaskToday />
    </aside>
  </div>
</template>

<style scoped>
.app {
  height: 100%;
  display: flex;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fafafa;
}

.overview-panel {
  overflow: auto;
  padding: 32px;
  gap: 32px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 900px) {
  .app {
    flex-direction: column;
    overflow-y: auto;
    padding-bottom: 88px;
  }

  .content {
    flex: none;
    overflow: visible;
  }

  .overview-panel {
    padding: 0 18px 24px;
    gap: 20px;
    overflow: visible;
  }
}
</style>
