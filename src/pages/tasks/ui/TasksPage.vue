<script setup lang="ts">
import Carousel from 'primevue/carousel'
import TaskCard from '@components/TaskCard.vue'
import ArrowLeftIcon from '@components/icons/ArrowLeftIcon.vue'
import ArrowRightIcon from '@components/icons/ArrowRightIcon.vue'
import MentorSearchBar from '@components/mentors/MentorSearchBar.vue'
import TaskSearchBar from '@components/TaskSearchBar.vue'
import { useTasksPage } from '../model/useTasksPage'

const {
  teamMembers,
  timeLimitCarousel,
  newTaskCarousel,
  triggerNext,
  triggerPrev,
  timeLimitTasks,
  newTasks,
  responsiveOptions,
  openTask,
} = useTasksPage()
</script>

<template>
  <div class="task-desktop-search">
    <MentorSearchBar />
  </div>
  <section class="task-page">
    <div class="task-mobile-header">
      <h2>Explore Task</h2>
      <TaskSearchBar />
    </div>
    <div class="task-section">
      <Carousel
        ref="timeLimitCarousel"
        class="task-carousel"
        :value="timeLimitTasks"
        :num-visible="3"
        :num-scroll="1"
        :show-navigators="false"
        :responsive-options="responsiveOptions"
        :show-indicators="false"
      >
        <template #item="{ data }">
          <TaskCard
            :title="data.title"
            :category="data.category"
            :progress="data.progress"
            :time-label="data.timeLabel"
            :image="data.image"
            :team-members="teamMembers"
            @click="openTask(data.id)"
          />
        </template>

        <template #header>
          <div class="section-header">
            <h2>Time Limit</h2>
            <div class="section-controls">
              <ArrowLeftIcon @click="triggerPrev(timeLimitCarousel)" />
              <ArrowRightIcon @click="triggerNext(timeLimitCarousel)" />
            </div>
          </div>
        </template>
      </Carousel>
    </div>

    <div class="task-section">
      <Carousel
        ref="newTaskCarousel"
        class="task-carousel"
        :value="newTasks"
        :num-visible="3"
        :num-scroll="1"
        :show-navigators="false"
        :responsive-options="responsiveOptions"
        :show-indicators="false"
      >
        <template #item="{ data }">
          <TaskCard
            :title="data.title"
            :category="data.category"
            :progress="data.progress"
            :time-label="data.timeLabel"
            :image="data.image"
            :team-members="teamMembers"
            @click="openTask(data.id)"
          />
        </template>
        <template #header>
          <div class="section-header">
            <h2>New Task</h2>
            <div class="section-controls">
              <ArrowLeftIcon @click="triggerPrev(newTaskCarousel)" />
              <ArrowRightIcon @click="triggerNext(newTaskCarousel)" />
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
  padding: 18px 22px 32px;
  overflow: auto;
  gap: 26px;
}

.task-section {
  gap: 16px;
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
  gap: 10px;
  color: var(--text-strong);
}

.section-controls :deep(svg) {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.task-carousel {
  padding-bottom: 6px;
}

.task-carousel :deep(.p-carousel-content) {
  gap: 18px;
}

.task-carousel :deep(.p-carousel-item) {
  padding: 6px 4px 14px;
}

.task-mobile-header {
  display: none;
  gap: 18px;
}

.task-mobile-header h2 {
  margin: 0;
  font-size: 1.9rem;
  color: var(--text-strong);
}

@media (max-width: 900px) {
  .task-desktop-search {
    display: none;
  }

  .task-page {
    padding: 16px 18px 28px;
  }

  .task-mobile-header {
    display: grid;
  }
}
</style>
