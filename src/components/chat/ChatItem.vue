<script setup lang="ts">
import DoubleCheckIcon from '../icons/DoubleCheckIcon.vue'

defineProps<{
  name: string
  message: string
  time: string
  avatar: string
  unread?: boolean
  showCheck?: boolean
  accentMessage?: boolean
}>()
</script>

<template>
  <article class="chat-item">
    <img class="avatar" :src="avatar" :alt="name" />
    <div class="content">
      <div class="top-row">
        <h3>{{ name }}</h3>
        <span class="time">{{ time }}</span>
      </div>
      <div class="bottom-row">
        <p :class="{ accent: accentMessage }">{{ message }}</p>
        <span v-if="unread" class="unread-dot" aria-hidden="true"></span>
        <DoubleCheckIcon v-else-if="showCheck" class="double-check" />
      </div>
    </div>
  </article>
</template>

<style scoped>
.chat-item {
  cursor: pointer;
  display: flex;
  gap: 1rem;
  padding: 1rem 1.1250rem;
  background: #ffffff;
  box-shadow: 0 16px 28px rgba(18, 20, 34, 0.06);
}

.avatar {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;
}

.content {
  flex: 1;
  display: grid;
  gap: 0.3750rem;
}

.top-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: baseline;
}

.top-row h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #1e2233;
}

.time {
  color: #a5aac2;
  font-size: 0.95rem;
  white-space: nowrap;
}

.bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.7500rem;
}

.bottom-row p {
  margin: 0;
  color: #30364a;
  max-width: 360px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.bottom-row p.accent {
  color: #5f6df8;
}

.unread-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #f35c5c;
  flex-shrink: 0;
}

.double-check {
  width: 22px;
  height: 22px;
  color: #4aa9ff;
  flex-shrink: 0;
}
</style>
