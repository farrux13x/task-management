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
  bio: string
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

    <p class="mentor-bio">{{ props.mentor.bio }}</p>

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
  padding: 1.2500rem 1.3750rem 1.3750rem;
  display: grid;
  gap: 1.1250rem;
}

.mentor-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
}

.mentor-avatar {
  width: 48px;
  height: 48px;
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
  margin: 0.3750rem 0 0;
  color: #7f86a8;
  font-weight: 500;
}

.mentor-bio {
  margin: 0;
  color: #9aa0b9;
  font-weight: 500;
  line-height: 1.6;
}

.mentor-meta {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: var(--text-strong);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5000rem;
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
    padding: 1.1250rem 1.1250rem 1.2500rem;
  }

  .mentor-header {
    grid-template-columns: auto 1fr;
  }
}
</style>
