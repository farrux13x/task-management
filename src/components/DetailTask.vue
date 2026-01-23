<script setup lang="ts">
import { computed } from 'vue'
import type { TaskItem } from '@/stores/tasks'

import CheckIcon from '@/components/icons/CheckIcon.vue'
import ClockIcon from '@/components/icons/ClockIcon.vue'
import MoreCircleIcon from '@/components/icons/MoreCircleIcon.vue'
import PauseIcon from '@/components/icons/PauseIcon.vue'
import ShareArrowIcon from '@/components/icons/ShareArrowIcon.vue'
import UsersIcon from '@/components/icons/UsersIcon.vue'
import VolumeIcon from '@/components/icons/VolumeIcon.vue'

const props = defineProps<{
  task: TaskItem | null
}>()

const assessments = [
  'Understanding the tools in Figma',
  'Understand the basics of making designs',
  'Designing a mobile application using figma',
  'Presenting the design flow',
]

const heroImage = computed(
  () =>
    props.task?.image ||
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
)

const progressValue = computed(() => props.task?.progress ?? 90)
const taskTitle = computed(
  () => props.task?.title || 'Creating Awesome Mobile Apps',
)
const taskCategory = computed(
  () => props.task?.category || 'UI/UX Design . Apps Design',
)
const taskDescription = computed(
  () =>
    props.task?.description ||
    'Follow the video tutorial above. Understand how to use each tool in the Figma application. Also learn how to make a good and correct design. Starting from spacing, typography, content, and many other design hierarchies. Then try to make it yourself with your imagination and inspiration.',
)
const taskDuration = computed(() => props.task?.duration || '1 Hour')
</script>

<template>
  <article class="detail-task">
    <div class="hero">
      <img :src="heroImage" alt="Design preview" />
      <div class="media-bar">
        <button class="media-btn" aria-label="Pause">
          <PauseIcon />
        </button>
        <div class="media-track">
          <span
            class="media-progress"
            :style="{ width: `${progressValue}%` }"
          ></span>
        </div>
        <span class="media-time">2:20/10:00</span>
        <div class="media-actions">
          <button class="media-icon" aria-label="Share">
            <ShareArrowIcon />
          </button>
          <button class="media-icon" aria-label="More">
            <MoreCircleIcon />
          </button>
          <button class="media-icon" aria-label="Volume">
            <VolumeIcon />
          </button>
        </div>
      </div>
    </div>

    <div class="content">
      <h2>{{ taskTitle }}</h2>
      <div class="meta-row">
        <span class="meta-pill">{{ taskCategory }}</span>
        <span class="divider" aria-hidden="true"></span>
        <p class="mentor-link">+ Get Mentors</p>
      </div>

      <div class="stats-row">
        <div class="stat-item">
          <UsersIcon />
          <span>200 Students Involved</span>
        </div>
        <div class="stat-item">
          <ClockIcon />
          <span>{{ taskDuration }}</span>
        </div>
      </div>

      <section class="detail-block">
        <h3>Description</h3>
        <p>{{ taskDescription }}</p>
      </section>

      <section class="detail-block">
        <h3>Essence of Assessments</h3>
        <ul class="checklist">
          <li v-for="item in assessments" :key="item">
            <span class="check" aria-hidden="true">
              <CheckIcon />
            </span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </section>
    </div>
  </article>
</template>

<style scoped>
.detail-task {
  width: 100%;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 18px 32px rgba(15, 18, 32, 0.06);
}

.hero {
  overflow: hidden;
  position: relative;
  background: #101622;
  height: 230px;
}

.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.media-bar {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
  background: #ffffff;
  border-radius: 14px;
  padding: 0.625rem 0.875rem;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 0.875rem;
  align-items: center;
  box-shadow: 0 12px 24px rgba(18, 22, 40, 0.18);
}

.media-btn,
.media-icon {
  border: none;
  background: transparent;
  padding: 0;
  display: grid;
  place-items: center;
  color: #1f2435;
  cursor: pointer;
}

.media-btn svg {
  width: 22px;
  height: 22px;
}

.media-track {
  height: 6px;
  border-radius: 999px;
  background: #e7eaf6;
  overflow: hidden;
}

.media-progress {
  display: block;
  height: 100%;
  background: #151a2d;
  border-radius: inherit;
}

.media-time {
  font-weight: 600;
  color: #1f2435;
}

.media-actions {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: #1f2435;
}

.media-icon svg {
  width: 18px;
  height: 18px;
}

.content {
  padding: 1.5rem 1.375rem 1.75rem;
  display: grid;
  gap: 1rem;
}

.content h2 {
  margin: 0;
  font-size: 1.8rem;
  color: #1c2031;
}

.meta-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  font-weight: 600;
  color: #5b5f7d;
}

.meta-pill {
  color: #6c7092;
}

.divider {
  width: 1px;
  height: 16px;
  background: rgba(91, 95, 125, 0.4);
}

.mentor-link {
  color: #2f69ff;
  text-decoration: none;
  font-weight: 600;
}

.stats-row {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  color: #1f2435;
  font-weight: 600;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.stat-item :deep(svg) {
  width: 18px;
  height: 18px;
  color: #5f6df8;
}

.detail-block {
  display: grid;
  gap: 0.625rem;
}

.detail-block h3 {
  margin: 0;
  font-size: 1.3rem;
  color: #1f2435;
}

.detail-block p {
  margin: 0;
  color: #5b5f7d;
  line-height: 1.6;
}

.checklist {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.875rem;
}

.checklist li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #1f2435;
  font-weight: 600;
}

.check {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #4b5fff;
  color: #ffffff;
  display: grid;
  place-items: center;
}

.check svg {
  width: 16px;
  height: 16px;
}

@media (max-width: 1050px) {
  .media-actions {
    justify-content: flex-end;
  }

  .content {
    padding: 1.375rem 1.25rem 1.625rem;
  }
}
</style>
