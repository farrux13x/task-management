<script setup lang="ts">
import ClockIcon from './icons/ClockIcon.vue'

type TeamMember = {
  name: string
  image: string
}

const props = defineProps<{
  title: string
  category: string
  progress: number
  timeLabel: string
  image: string
  teamMembers: TeamMember[]
}>()
</script>

<template>
  <article class="task-card">
    <div class="task-hero">
      <img :src="props.image" :alt="props.title" />
    </div>

    <div class="task-body">
      <div class="task-heading">
        <h3>{{ props.title }}</h3>
        <p>{{ props.category }}</p>
      </div>

      <div class="progress-header">
        <span>Progress</span>
        <strong>{{ props.progress }}%</strong>
      </div>

      <div class="progress-track" role="presentation" aria-hidden="true">
        <span
          class="progress-fill"
          :style="{ width: `${props.progress}%` }"
        ></span>
        <span
          class="progress-thumb"
          :style="{ left: `calc(${props.progress}% - 9px)` }"
        ></span>
      </div>

      <div class="task-footer">
        <div class="deadline">
          <ClockIcon />
          <span>{{ props.timeLabel }}</span>
        </div>

        <div class="avatars" aria-label="Assigned team members">
          <img
            v-for="member in props.teamMembers"
            :key="member.name"
            :src="member.image"
            :alt="member.name"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.task-card {
  cursor: pointer;
  background: #ffffff;
  border-radius: 28px;
  overflow: hidden;
  display: grid;
}

.task-hero {
  height: 160px;
  background: linear-gradient(
    120deg,
    rgba(95, 109, 248, 0.22),
    rgba(255, 255, 255, 0.5)
  );
  position: relative;
}

.task-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.task-body {
  padding: 18px 20px 20px;
  display: grid;
  gap: 18px;
}

.task-heading h3 {
  margin: 0;
  font-size: 1.05rem;
  color: var(--text-strong);
}

.task-heading p {
  margin: 6px 0 0;
  color: var(--text-muted);
  font-weight: 500;
}

.progress-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-strong);
  font-weight: 600;
}

.progress-header span {
  color: var(--text-strong);
}

.progress-header strong {
  color: #6b7cff;
  font-size: 0.95rem;
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

.task-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.deadline {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  color: var(--text-strong);
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

@keyframes card-rise {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 600px) {
  .task-body {
    padding: 18px 18px 22px;
  }

  .task-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
