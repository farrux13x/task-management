<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ChatItem from '@components/chat/ChatItem.vue'
import SearchBar from '@components/SearchBar.vue'
import { useMessagePage } from '../model/useMessagePage'

const { search, filteredChats, openChat } = useMessagePage()
const route = useRoute()
const isChatView = computed(() => route.name === 'chat')
</script>

<template>
  <section class="message-layout" :class="{ 'is-chat': isChatView }">
    <aside class="message-list">
      <SearchBar v-model="search" />
      <div class="chat-list">
        <ChatItem
          v-for="chat in filteredChats"
          :key="chat.id"
          :name="chat.name"
          :message="chat.message"
          :time="chat.time"
          :avatar="chat.avatar"
          :unread="chat.unread"
          :show-check="chat.showCheck"
          :accent-message="chat.accentMessage"
          @click="openChat(chat.id)"
        />
      </div>
    </aside>
    <div class="message-detail">
      <RouterView />
    </div>
  </section>
</template>

<style scoped>
.message-layout {
  overflow: hidden;
  display: flex;
  height: 100%;
  background-color: white;
}

.message-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.chat-list {
  overflow: auto;
  gap: 0.375rem;
  flex: 1;
}

.message-detail {
  border-left: 1px solid #eef0f5;
  width: 100%;
  height: 100%;
  background: #f8f9ff;
}

@media (max-width: 980px) {
  .message-layout {
    grid-template-columns: 1fr;
  }

  .message-list {
    padding: 0.5rem 1.125rem 1.5rem;
    gap: 1rem;
  }

  .message-detail {
    border-left: none;
    background: #ffffff;
  }

  .message-layout.is-chat .message-list {
    display: none;
  }

  .message-layout:not(.is-chat) .message-detail {
    display: none;
  }
}
</style>
