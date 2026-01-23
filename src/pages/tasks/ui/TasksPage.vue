<script setup lang="ts">
import Carousel from 'primevue/carousel'
import TaskCard from '@components/TaskCard.vue'
import ArrowLeftIcon from '@components/icons/ArrowLeftIcon.vue'
import ArrowRightIcon from '@components/icons/ArrowRightIcon.vue'
import TaskSearchBar from '@components/TaskSearchBar.vue'
import { useTasksPage } from '../model/useTasksPage'

const {
  search,
  teamMembers,
  timeLimitCarousel,
  newTaskCarousel,
  triggerNext,
  triggerPrev,
  filteredTasks,
  carouselKey,
  responsiveOptions,
  openTask,
} = useTasksPage()
</script>

<template>
  <TaskSearchBar v-model="search" />
  <section class="task-page">
    <div class="task-section">
      <Carousel
        :key="`time-${carouselKey}`"
        ref="timeLimitCarousel"
        class="task-carousel"
        :value="filteredTasks"
        :num-visible="3"
        :num-scroll="1"
        circular
        :show-navigators="false"
        :responsive-options="responsiveOptions"
        :show-indicators="false"
      >
        <template #item="{ data }">
          <TaskCard
            :team-members="teamMembers"
            :task="data"
            @click="openTask(data.id)"
          />
        </template>

        <template #header>
          <div class="section-header">
            <h2>Time Limit</h2>
            <div class="section-controls">
              <ArrowLeftIcon @click="triggerPrev(timeLimitCarousel, $event)" />
              <ArrowRightIcon @click="triggerNext(timeLimitCarousel, $event)" />
            </div>
          </div>
        </template>
      </Carousel>
    </div>

    <div class="task-section">
      <Carousel
        :key="`new-${carouselKey}`"
        ref="newTaskCarousel"
        class="task-carousel"
        :value="filteredTasks"
        :num-visible="3"
        :num-scroll="1"
        circular
        :show-navigators="false"
        :responsive-options="responsiveOptions"
        :show-indicators="false"
      >
        <template #item="{ data }">
          <TaskCard
            :task="data"
            :team-members="teamMembers"
            @click="openTask(data.id)"
          />
        </template>
        <template #header>
          <div class="section-header">
            <h2>New Task</h2>
            <div class="section-controls">
              <ArrowLeftIcon @click="triggerPrev(newTaskCarousel, $event)" />
              <ArrowRightIcon @click="triggerNext(newTaskCarousel, $event)" />
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style scoped>
.task-desktop-search {
  display: block;
}

.task-page {
  padding: 1.125rem 1.375rem 2rem;
  overflow: auto;
  gap: 1.625rem;
}

.task-section {
  gap: 1rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section-header h2 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--text-strong);
}

.section-controls {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: var(--text-strong);
}

.section-controls :deep(svg) {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.task-carousel {
  padding-bottom: 0.375rem;
}

.task-carousel :deep(.p-carousel-content) {
  gap: 1.125rem;
}

.task-carousel :deep(.p-carousel-item) {
  padding: 0.375rem 0.25rem 0.875rem;
}

@media (max-width: 1050px) {
  .task-desktop-search {
    display: none;
  }

  .task-page {
    padding: 0.5rem 1.125rem 1.75rem;
  }
}
</style>
