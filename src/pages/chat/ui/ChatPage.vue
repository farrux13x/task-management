<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import ChatHeader from '@components/chat/ChatHeader.vue'
import ChatMessages from '@components/chat/ChatMessages.vue'
import ChatComposer from '@components/chat/ChatComposer.vue'

import { useChatsStore } from '@/stores/chats'

const route = useRoute()
const chatsStore = useChatsStore()
const storageKey = 'task-management:chats'

const handleSend = (text: string) => {
  const messageText = text.trim()
  if (!messageText) {
    return
  }

  const chat = activeChat.value
  if (!chat) {
    return
  }
  chatsStore.changee(activeChat.value.id, messageText)
}

const activeChat = computed(() => {
  return chatsStore.chats.find((i) => i.id == Number(route.params.id))
})
</script>

<template>
  <section class="chat-view" v-if="activeChat">
    <ChatHeader
      :name="activeChat?.name"
      :status="activeChat?.status"
      :avatar="activeChat?.avatar"
    />
    <ChatMessages :messages="activeChat?.messages ?? []" />
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
