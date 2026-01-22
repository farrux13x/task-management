<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useTasksStore, TaskItem } from '@/stores/tasks'

import ClockIcon from '@/components/icons/ClockIcon.vue'
import MoreCircleIcon from '@/components/icons/MoreCircleIcon.vue'

const tasksStore = useTasksStore()
const route = useRoute()
const task = ref<TaskItem | null>(null)

const detailSteps = [
  'Understanding the tools in Figma',
  'Understand the basics of making designs',
  'Design a mobile application with figma',
]

const teamMembers = [
  { name: 'Ari', image: 'https://i.pravatar.cc/100?img=15' },
  { name: 'Nia', image: 'https://i.pravatar.cc/100?img=32' },
  { name: 'Sam', image: 'https://i.pravatar.cc/100?img=47' },
  { name: 'Jo', image: 'https://i.pravatar.cc/100?img=56' },
  { name: 'Lee', image: 'https://i.pravatar.cc/100?img=64' },
]

const heroImage = computed(
  () =>
    task.value?.image ||
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
)

const progressValue = computed(() => task.value?.progress ?? 90)
const categoryLabel = computed(() => task.value?.category || 'UI/UX Designer')

onMounted(() => {
  task.value = tasksStore.tasks.find((i) => i.id === route.params?.id) || null
})
</script>

<template>
  <article class="detail-task-card">
    <header class="card-header">
      <h3>Task Today</h3>
      <button class="more-btn" aria-label="More options">
        <MoreCircleIcon />
      </button>
    </header>

    <div class="hero-image">
      <img :src="heroImage" :alt="task?.title || 'Task preview'" />
    </div>

    <div class="detail-body">
      <div class="title-block">
        <h2>{{ task?.title || 'Creating Awesome Mobile Apps' }}</h2>
        <p>{{ categoryLabel }}</p>
      </div>

      <div class="progress-row">
        <span>Progress</span>
        <strong>{{ progressValue }}%</strong>
      </div>

      <div class="progress-track" role="presentation" aria-hidden="true">
        <span
          class="progress-fill"
          :style="{ width: `${progressValue}%` }"
        ></span>
        <span
          class="progress-thumb"
          :style="{ left: `calc(${progressValue}% - 9px)` }"
        ></span>
      </div>

      <div class="detail-meta">
        <div class="time-badge">
          <ClockIcon />
          <span>{{ task?.duration || '1 Hour' }}</span>
        </div>

        <div class="avatars" aria-label="Assigned team members">
          <img
            v-for="member in teamMembers"
            :key="member.name"
            :src="member.image"
            :alt="member.name"
          />
        </div>
      </div>

      <div class="section-divider" aria-hidden="true"></div>

      <div class="detail-header">
        <h4>Detail Task</h4>
        <span class="detail-role">{{ categoryLabel }}</span>
      </div>

      <ol class="detail-list">
        <li v-for="(step, index) in detailSteps" :key="step">
          <span class="step-number">{{ index + 1 }}</span>
          <span class="step-text">{{ step }}</span>
        </li>
      </ol>

      <button class="detail-btn" type="button">Go To Detail</button>
    </div>
  </article>
</template>

<style scoped>
.detail-task-card {
  width: 100%;
  background: #ffffff;
  border-radius: 26px;
  padding: 20px;
  display: grid;
  gap: 18px;
  box-shadow: 0 18px 36px rgba(17, 20, 38, 0.08);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #1c2031;
}

.more-btn {
  border: none;
  background: transparent;
  padding: 0;
  color: #1c2031;
  cursor: pointer;
}

.more-btn :deep(svg) {
  width: 22px;
  height: 22px;
}

.hero-image {
  overflow: hidden;
  border-radius: 20px;
  height: 240px;
  background: #eef1ff;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.detail-body {
  display: grid;
  gap: 16px;
}

.title-block h2 {
  margin: 0;
  font-size: 1.6rem;
  color: #1b1f2e;
}

.title-block p {
  margin: 6px 0 0;
  color: #5b5f7d;
  font-weight: 600;
}

.progress-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  color: #1c2031;
}

.progress-row strong {
  color: #5f6df8;
}

.progress-track {
  position: relative;
  height: 10px;
  border-radius: 999px;
  background: #e7e9ff;
}

.progress-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #5f6df8, #7b87ff);
}

.progress-thumb {
  position: absolute;
  top: 50%;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #5f6df8;
  border: 3px solid white;
  transform: translateY(-50%);
  box-shadow: 0 10px 16px rgba(95, 109, 248, 0.25);
}

.detail-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.time-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  color: #1c2031;
}

.avatars {
  display: flex;
  align-items: center;
}

.avatars img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  margin-left: -10px;
  box-shadow: 0 8px 14px rgba(18, 22, 40, 0.14);
}

.avatars img:first-child {
  margin-left: 0;
}

.section-divider {
  height: 1px;
  background: rgba(187, 190, 210, 0.4);
  margin: 4px 0;
}

.detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.detail-header h4 {
  margin: 0;
  font-size: 1.2rem;
  color: #1c2031;
}

.detail-role {
  color: #5b5f7d;
  font-weight: 600;
}

.detail-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.detail-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  color: #1c2031;
}

.step-number {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: #f3f4f7;
  display: grid;
  place-items: center;
  font-weight: 700;
}

.step-text {
  color: #3b3f57;
}

.detail-btn {
  border: none;
  border-radius: 18px;
  background: #5f6df8;
  color: #ffffff;
  font-weight: 600;
  padding: 14px 18px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 14px 22px rgba(95, 109, 248, 0.35);
}

@media (max-width: 700px) {
  .detail-task-card {
    padding: 18px;
  }

  .hero-image {
    height: 190px;
  }

  .detail-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
