<script setup lang="ts">
import Button from 'primevue/button'
import { useRouter } from 'vue-router'
import ArrowLeftIcon from '../icons/ArrowLeftIcon.vue'
import VideoCallIcon from '../icons/VideoCallIcon.vue'
import PhoneIcon from '../icons/PhoneIcon.vue'

defineProps<{
  name: string
  status: string
  avatar: string
}>()

const router = useRouter()

const handleBack = () => {
  router.push({ name: 'message-empty' })
}
</script>

<template>
  <header class="chat-header">
    <div class="profile">
      <div class="d-flex-center gap-20">
        <Button
          type="button"
          text
          class="back-btn"
          @click="handleBack"
          rounded
          severity="secondary"
          aria-label="Video call"
        >
          <template #icon>
            <ArrowLeftIcon />
          </template>
        </Button>
        <img class="avatar" :src="avatar" :alt="name" />
      </div>
      <div>
        <h3>{{ name }}</h3>
        <div class="status">
          <span class="status-dot" aria-hidden="true"></span>
          <span>{{ status }}</span>
        </div>
      </div>
    </div>
    <div class="actions">
      <Button
        type="button"
        text
        rounded
        severity="secondary"
        aria-label="Video call"
      >
        <template #icon>
          <VideoCallIcon />
        </template>
      </Button>
      <Button
        type="button"
        text
        rounded
        severity="secondary"
        aria-label="Phone call"
      >
        <template #icon>
          <PhoneIcon />
        </template>
      </Button>
    </div>
  </header>
</template>

<style scoped>
.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.1250rem;
  background: #ffffff;
  box-shadow: 0 16px 28px rgba(18, 20, 34, 0.06);
}

.back-btn {
  display: none;
}

.profile {
  display: flex;
  align-items: center;
  gap: 0.8750rem;
}

.avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
}

.profile h3 {
  margin: 0;
  color: #1f2435;
}

.status {
  display: flex;
  align-items: center;
  gap: 0.5000rem;
  color: #8b90a8;
  font-size: 0.92rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #30c58d;
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.7500rem;
}
@media (max-width: 980px) {
  .chat-header {
    padding: 0.8750rem 1rem;
    box-shadow: none;
    border-bottom: 1px solid #eff1f7;
  }

  .back-btn {
    display: grid;
  }

  .avatar {
    width: 46px;
    height: 46px;
  }
}
</style>
