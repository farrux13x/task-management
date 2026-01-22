<script setup lang="ts">
import Button from 'primevue/button'
import TaskSquareIcon from '../icons/TaskSquareIcon.vue'
import StarFilledIcon from '../icons/StarFilledIcon.vue'

type Mentor = {
  name: string
  role: string
  tasks: number
  rating: string
  reviews: number
  image: string
  isFollowed?: boolean
}

const props = defineProps<{
  mentor: Mentor
}>()
</script>

<template>
  <article class="mentor-card">
    <div class="mentor-header">
      <img
        class="mentor-avatar"
        :src="props.mentor.image"
        :alt="props.mentor.name"
      />
      <div>
        <h3>{{ props.mentor.name }}</h3>
        <p>{{ props.mentor.role }}</p>
      </div>
      <Button
        :label="props.mentor.isFollowed ? 'Followed' : '+ Follow'"
        :severity="props.mentor.isFollowed ? 'secondary' : 'primary'"
        text
      />
    </div>

    <div class="mentor-meta">
      <div class="meta-item">
        <span class="meta-icon" aria-hidden="true">
          <TaskSquareIcon />
        </span>
        <span>{{ props.mentor.tasks }} Task</span>
      </div>
      <div class="meta-item">
        <span class="meta-icon star" aria-hidden="true">
          <StarFilledIcon />
        </span>
        <span
          >{{ props.mentor.rating }} ({{ props.mentor.reviews }} Reviews)</span
        >
      </div>
    </div>
  </article>
</template>

<style scoped>
.mentor-card {
  background: #ffffff;
  border-radius: 24px;
  padding: 20px 22px;
  display: grid;
  gap: 16px;
  margin: 10px;
}

.mentor-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
}

.mentor-avatar {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 16px rgba(18, 22, 40, 0.14);
}

.mentor-header h3 {
  margin: 0;
  font-size: 1.1rem;
  color: var(--text-strong);
}

.mentor-header p {
  margin: 6px 0 0;
  color: #7f86a8;
  font-weight: 500;
}

.mentor-meta {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  color: var(--text-strong);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
}

.meta-icon {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid #e6e9f5;
  color: #5f668a;
}

.meta-icon :deep(svg) {
  width: 18px;
  height: 18px;
}

.meta-icon.star {
  border-color: transparent;
  color: #f7a442;
}

@media (max-width: 600px) {
  .mentor-card {
    margin: 6px 0;
  }

  .mentor-header {
    grid-template-columns: auto 1fr;
  }
}
</style>
