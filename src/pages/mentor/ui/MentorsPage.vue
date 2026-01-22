<script setup lang="ts">
import Carousel from 'primevue/carousel'
import ArrowLeftIcon from '@components/icons/ArrowLeftIcon.vue'
import ArrowRightIcon from '@components/icons/ArrowRightIcon.vue'
import MentorSearchBar from '@components/mentors/MentorSearchBar.vue'
import MentorCardCompact from '@components/mentors/MentorCardCompact.vue'
import MentorCardDetailed from '@components/mentors/MentorCardDetailed.vue'
import { useMentorsPage } from '../model/useMentorsPage'

const {
  search,
  mentorsCompact,
  mentorsDetailed,
  responsiveOptions,
  mentorsRef,
  triggerNext,
  triggerPrev,
} = useMentorsPage()
</script>

<template>
  <!-- <h2 class="page-title">Explore Mentors</h2> -->
  <MentorSearchBar v-model="search" />
  <section class="mentors-page">
    <Carousel
      ref="mentorsRef"
      :value="mentorsCompact"
      :num-visible="3"
      :num-scroll="1"
      circular 
      :show-navigators="false"
      :responsive-options="responsiveOptions"
      :show-indicators="false"
    >
      <template #item="{ data }">
        <MentorCardCompact :key="`${data.name}-${data.tasks}`" :mentor="data" />
      </template>

      <template #header>
        <div class="d-flex-between">
          <h2 class="section-title">Recent Mentors</h2>
          <div class="d-flex-center">
            <ArrowLeftIcon @click="triggerPrev(mentorsRef, $event)" />
            <ArrowRightIcon @click="triggerNext(mentorsRef, $event)" />
          </div>
        </div>
      </template>
    </Carousel>

    <h2 class="section-title">Mentors</h2>
    <div class="mentor-grid">
      <MentorCardDetailed
        v-for="mentor in mentorsDetailed"
        :key="mentor.name"
        :mentor="mentor"
      />
    </div>
  </section>
</template>

<style scoped>
.mentors-page {
  padding: 1.1250rem 1.3750rem 2rem;
  gap: 1.3750rem;
  overflow: auto;
}

.page-title {
  margin: 0;
  font-size: 1.9rem;
  color: var(--text-strong);
  display: none;
}

.section-title {
  margin: 0;
  font-size: 1.3rem;
  color: var(--text-strong);
}

.mentor-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.1250rem;
}

@media (max-width: 1050px) {
  .mentors-page {
    padding: 1.1250rem;
  }

  .page-title {
    display: block;
    font-size: 1.7rem;
  }

  .section-title {
    font-size: 1.2rem;
  }

  .mentor-grid {
    grid-template-columns: 1fr;
  }
}
</style>
