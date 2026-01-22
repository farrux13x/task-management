<script setup lang="ts">
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import NotificationIcon from './icons/NotificationIcon.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const pageName = computed(() => route.meta.title)
</script>

<template>
  <header class="top-header">
    <h2 v-if="pageName != 'Overview'" class="header-title">{{ pageName }}</h2>
    <div v-else>
      <h2 class="header-title">Hi, Dennis Nzioki</h2>
      <p>Let's finish your task today!</p>
    </div>
    <div class="header-actions">
      <Button
        type="button"
        aria-label="Notifications"
        text
        rounded
        severity="secondary"
      >
        <template #icon>
          <NotificationIcon />
        </template>
      </Button>
      <Avatar
        image="https://i.pravatar.cc/100?img=32"
        shape="circle"
        size="large"
        aria-label="Profile photo"
      />
    </div>
  </header>
</template>

<style scoped>
.top-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  padding: 16px 22px;
}

.header-title {
  margin: 0;
  font-size: 1.4rem;
  color: var(--text-strong);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

@media (max-width: 900px) {
  .top-header {
    padding: 12px 16px;
  }

  .header-title {
    font-size: 1.1rem;
  }
}
</style>
