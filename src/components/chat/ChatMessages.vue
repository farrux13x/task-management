<script setup lang="ts">
type ChatMessage = {
  id: number
  type: 'badge' | 'outgoing' | 'incoming'
  text?: string
  time?: string
  image?: string
  caption?: string
}

defineProps<{
  messages: ChatMessage[]
}>()
</script>

<template>
  <div class="messages">
    <div v-for="message in messages" :key="message.id" class="message-row">
      <div v-if="message.type === 'badge'" class="day-badge">
        {{ message.text }}
      </div>

      <div v-else :class="['bubble', `bubble--${message.type}`]">
        <template v-if="message.image">
          <img class="bubble-image" :src="message.image" alt="Shared image" />
          <p class="bubble-text">{{ message.caption }}</p>
        </template>
        <template v-else>
          <p class="bubble-text">{{ message.text }}</p>
        </template>
        <span v-if="message.time" class="bubble-time">{{ message.time }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.messages {
  overflow: auto;
  display: grid;
  gap: 18px;
  padding: 10px 6px 6px;
}

.message-row {
  display: flex;
  justify-content: center;
}

.day-badge {
  padding: 6px 14px;
  border-radius: 12px;
  background: #151828;
  color: #ffffff;
  font-size: 0.9rem;
}

.bubble {
  max-width: 420px;
  display: grid;
  gap: 8px;
  padding: 12px 14px;
  border-radius: 14px;
  position: relative;
}

.bubble--outgoing {
  margin-left: auto;
  background: #5f73ff;
  color: #ffffff;
}

.bubble--incoming {
  margin-right: auto;
  background: #ffffff;
  color: #1f2435;
  box-shadow: 0 12px 24px rgba(18, 20, 34, 0.06);
}

.bubble-text {
  margin: 0;
  line-height: 1.4;
}

.bubble-image {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
}

.bubble-time {
  justify-self: end;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
}

.bubble--incoming .bubble-time {
  color: #a4a9bf;
  justify-self: start;
}

.bubble--incoming .bubble-text {
  color: #2b3147;
}
</style>
