<script setup lang="ts">
import Carousel from 'primevue/carousel'
import ArrowLeftIcon from '@components/icons/ArrowLeftIcon.vue'
import ArrowRightIcon from '@components/icons/ArrowRightIcon.vue'
import ActivityChart from '@components/overview/ActivityChart.vue'
import RunningTaskCard from '@/components/overview/RunningTaskCard.vue'
import MentorCardCompact from '@components/mentors/MentorCardCompact.vue'
import TaskCard from '@components/TaskCard.vue'
import { useTasksPage } from '@pages/tasks'
import { useMentorsPage } from '@pages/mentor'

const {
  newTasks,
  teamMembers,
  triggerNext,
  triggerPrev,
  responsiveOptions,
  timeLimitCarousel,
  openTask,
} = useTasksPage()

const { mentorsCompact, mentorsRef } = useMentorsPage()
</script>

<template>
  <section class="overview-page">
    <div class="top-row">
      <RunningTaskCard />
      <ActivityChart />
    </div>

    <Carousel
      ref="mentorsRef"
      :value="mentorsCompact"
      :num-visible="2"
      :num-scroll="1"
      :show-navigators="false"
      :responsive-options="responsiveOptions"
      :show-indicators="false"
    >
      <template #item="{ data }">
        <MentorCardCompact :key="`${data.name}-${data.tasks}`" :mentor="data" />
      </template>

      <template #header>
        <div class="d-flex-between">
          <h2>Recent Mentors</h2>
          <div class="d-flex-center">
            <ArrowLeftIcon @click="triggerPrev(mentorsRef)" />
            <ArrowRightIcon @click="triggerNext(mentorsRef)" />
          </div>
        </div>
      </template>
    </Carousel>

    <div>
      <Carousel
        ref="timeLimitCarousel"
        class="task-carousel"
        :value="newTasks"
        :num-visible="2"
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
          <div class="d-flex-between">
            <h2>Time Limit</h2>
            <div class="d-flex-between">
              <ArrowLeftIcon @click="triggerPrev(timeLimitCarousel)" />
              <ArrowRightIcon @click="triggerNext(timeLimitCarousel)" />
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style scoped>
.overview-page {
  overflow: auto;
  padding: 18px 22px 32px;
  gap: 26px;
}

.top-row {
  display: grid;
  grid-template-columns: minmax(220px, 260px) 1fr;
  gap: 22px;
}

.task-carousel :deep(.p-carousel-item) {
  padding: 6px 4px 14px;
}

.section {
  display: grid;
  gap: 16px;
}

@media (max-width: 900px) {
  .overview-page {
    padding: 16px 18px 0;
    gap: 20px;
    overflow: visible;
  }

  .top-row {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}
</style>
