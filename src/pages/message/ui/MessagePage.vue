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
      <h2 class="message-title">Message</h2>
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
}

.message-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.chat-list {
  overflow: auto;
  /* display: grid; */
  gap: 6px;
  flex: 1;
}

.message-detail {
  border-left: 1px solid #eef0f5;
  width: 100%;
  background: #f8f9ff;
}

.message-title {
  margin: 0;
  font-size: 1.8rem;
  color: var(--text-strong);
  display: none;
}

@media (max-width: 980px) {
  .message-layout {
    grid-template-columns: 1fr;
    height: auto;
  }

  .message-title {
    display: block;
  }

  .message-list {
    padding: 8px 18px 24px;
    gap: 16px;
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
