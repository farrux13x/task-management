<script setup lang="ts">
import ChatHeader from './ChatHeader.vue'
import ChatMessages from './ChatMessages.vue'
import ChatComposer from './ChatComposer.vue'
import { ref, watch } from 'vue'

const profile = {
  name: 'Angelie Crison',
  status: 'Online',
  avatar: 'https://i.pravatar.cc/100?img=47',
}

type ChatMessage = {
  id: number
  type: 'badge' | 'outgoing' | 'incoming'
  text?: string
  time?: string
  image?: string
  caption?: string
}

const storageKey = 'task-management:chat-messages'

const defaultMessages: ChatMessage[] = [
  {
    id: 1,
    type: 'badge',
    text: 'Today',
  },
  {
    id: 2,
    type: 'outgoing',
    text: 'Morning Angelie, I have question about My Task',
    time: 'Today 11:52',
  },
  {
    id: 3,
    type: 'incoming',
    text: 'Yes sure, Any problem with your assignment?',
    time: 'Today 11:53',
  },
  {
    id: 4,
    type: 'outgoing',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
    caption: 'How to make a responsive display from the dashboard?',
    time: 'Today 11:52',
  },
  {
    id: 5,
    type: 'outgoing',
    text: 'Is there a plugin to do this task?',
    time: 'Today 11:52',
  },
  {
    id: 6,
    type: 'incoming',
    text: 'No plugins. You just have to make it smaller according to the size of the phone.',
  },
  {
    id: 7,
    type: 'incoming',
    text: "Thank you very much. I'm glad you asked about the assignment",
    time: 'Today 11:53',
  },
]

const loadStoredMessages = () => {
  try {
    const raw = localStorage.getItem(storageKey)
    if (!raw) {
      return null
    }
    const parsed = JSON.parse(raw) as ChatMessage[]
    if (!Array.isArray(parsed)) {
      return null
    }
    return parsed.filter((message) => typeof message?.id === 'number')
  } catch {
    return null
  }
}

const messages = ref<ChatMessage[]>(loadStoredMessages() ?? defaultMessages)

const nextMessageId = ref(
  messages.value.reduce((maxId, message) => Math.max(maxId, message.id), 0) + 1,
)

const handleSend = (text: string) => {
  const time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })

  messages.value.push({
    id: nextMessageId.value++,
    type: 'outgoing',
    text,
    time: `Today ${time}`,
  })

  localStorage.setItem(storageKey, JSON.stringify(messages.value))
}
</script>

<template>
  <section class="chat-view">
    <ChatHeader
      :name="profile.name"
      :status="profile.status"
      :avatar="profile.avatar"
    />
    <ChatMessages :messages="messages" />
    <ChatComposer @send="handleSend" />
  </section>
</template>

<style scoped>
.chat-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
