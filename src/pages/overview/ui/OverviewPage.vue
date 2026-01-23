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
import { useMentorsStore } from '@/stores/mentors'

const {
  filteredTasks,
  teamMembers,
  triggerNext,
  triggerPrev,
  responsiveOptions,
  timeLimitCarousel,
  openTask,
} = useTasksPage()



const { mentorsCompact, mentorsRef } = useMentorsPage()
const mentorsStore = useMentorsStore()

const toggleFollow = (mentorId: number) => {
  mentorsStore.toggleFollow(mentorId)
}
</script>

<template>
  <section class="overview-page">
    <div class="overview-top">
      <RunningTaskCard class="running-card"/>
      <ActivityChart class="chart-card"/>
    </div>

    <Carousel
      ref="mentorsRef"
      :value="mentorsCompact"
      :num-visible="2"
      :num-scroll="1"
      circular 
      :show-navigators="false"
      :responsive-options="responsiveOptions"
      :show-indicators="false"
    >
      <template #item="{ data }">
        <MentorCardCompact :key="`${data.name}-${data.tasks}`" 
          :mentor="data" 
          @toggle-follow="toggleFollow"/>
      </template>

      <template #header>
        <div class="d-flex-between">
          <h2>Recent Mentors</h2>
          <div class="d-flex-center">
            <ArrowLeftIcon @click="triggerPrev(mentorsRef, $event)" />
            <ArrowRightIcon @click="triggerNext(mentorsRef, $event)" />
          </div>
        </div>
      </template>
    </Carousel>

    <div>
      <Carousel
        ref="timeLimitCarousel"
        class="task-carousel"
        :value="filteredTasks"
        :num-visible="2"
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
          <div class="d-flex-between">
            <h2>Time Limit</h2>
            <div class="d-flex-between">
              <ArrowLeftIcon @click="triggerPrev(timeLimitCarousel, $event)" />
              <ArrowRightIcon @click="triggerNext(timeLimitCarousel, $event)" />
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
  padding: 1.1250rem 1.3750rem 2rem;
  gap: 1.6250rem;
}

.task-carousel :deep(.p-carousel-item) {
  padding: 0.3750rem 0.2500rem 0.8750rem;
}
.overview-top{
  display: flex;
  align-items: center;
  gap: 1.2500rem;
}
.chart-card{
  width: 70%;
}
.running-card{
  width: 30%;
}
.section {
  display: grid;
  gap: 1rem;
}

@media (max-width: 1450px) {
  .overview-top {
    flex-flow: wrap;
  }
  .chart-card{
    width: 100%;
  }
  .running-card{
    width: 100%;
  }
}

@media (max-width: 1050px) {
  .overview-page {
    padding: 1rem 1.1250rem 0;
    gap: 1.2500rem;
  }
}
</style>
