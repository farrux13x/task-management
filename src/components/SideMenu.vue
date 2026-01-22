<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Button from 'primevue/button'
import BrandIcon from './icons/BrandIcon.vue'
import OverviewIcon from './icons/OverviewIcon.vue'
import TaskIcon from './icons/TaskIcon.vue'
import MentorsIcon from './icons/MentorsIcon.vue'
import MessageIcon from './icons/MessageIcon.vue'
import SettingsIcon from './icons/SettingsIcon.vue'

const navItems = [
  {
    id: 'overview',
    label: 'Overview',
    icon: OverviewIcon,
    routeName: 'overview',
  },
  {
    id: 'tasks',
    label: 'Task',
    icon: TaskIcon,
    routeName: 'tasks',
  },
  {
    id: 'mentors',
    label: 'Mentors',
    icon: MentorsIcon,
    routeName: 'mentors',
  },
  {
    id: 'message-empty',
    label: 'Message',
    icon: MessageIcon,
    routeName: 'message-empty',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: SettingsIcon,
    routeName: 'settings',
  },
]

const route = useRoute()
const router = useRouter()

const activeId = computed(() => route.meta?.menuId ?? route.name)

const handleNavigate = (routeName: string) => {
  router.push({ name: routeName })
}
</script>

<template>
  <aside class="sidebar">
    <div class="brand">
      <BrandIcon class="brand-icon-svg" />
      <span class="fs-32 fw-600">DNX</span>
    </div>

    <nav class="nav">
      <Button
        v-for="item in navItems"
        :key="item.id"
        type="button"
        :label="item.label"
        severity="secondary"
        class="menu-button"
        :text="item.routeName !== activeId"
        @click="handleNavigate(item.routeName)"
        raised
      >
        <template #icon>
          <component :is="item.icon" class="nav-icon" />
        </template>
      </Button>
    </nav>

    <div class="help-card">
      <div class="help-orb">?</div>
      <div class="help-body">
        <h3>Help Center</h3>
        <p>Having trouble in learning. Please contact us for more questions.</p>
      </div>
      <Button
        class="w-full"
        type="button"
        label="Go To Help Center"
        severity="secondary"
      />
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 260px;
  background: var(--sidebar-bg);
  padding: 1.7500rem 1.2500rem 1.5000rem;
  box-shadow: 0 24px 40px rgba(20, 24, 44, 0.08);
  display: flex;
  flex-direction: column;
  position: relative;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.7500rem;
  padding: 0.2500rem 0.3750rem 1.1250rem;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 0.7500rem;
  padding: 0.7500rem 0.2500rem;
}

.help-card {
  margin-top: auto;
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(255, 255, 255, 0.08),
      transparent 45%
    ),
    var(--card-bg);
  color: #eef0ff;
  border-radius: 18px;
  padding: 2rem 1.1250rem 1.1250rem;
  position: relative;
}

.help-orb {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #111424;
  border: 3px solid #ffffff;
  display: grid;
  place-items: center;
  font-weight: 700;
  color: #ffffff;
  box-shadow: 0 12px 24px rgba(10, 12, 20, 0.35);
}

.help-body h3 {
  text-align: center;
  margin: 0.3750rem 0 0.5000rem;
  font-size: 1.05rem;
}

.help-body p {
  text-align: center;
  margin: 0 0 1rem;
  font-size: 0.86rem;
  line-height: 1.4;
}

.menu-button {
  border-color: white;
  box-shadow: none;
  justify-content: start;
  padding: 0.6250rem 1.2500rem;
}
@media (max-width: 1050px) {
  .sidebar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 72px;
    padding: 0.6250rem 1rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0 -12px 30px rgba(18, 22, 40, 0.12);
    z-index: 20;
  }

  .brand,
  .help-card {
    display: none;
  }

  .nav {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5000rem;
    padding: 0;
    width: 100%;
  }

  .menu-button {
    flex: 1;
    justify-content: center;
    padding: 0.6250rem 0.5000rem;
    border-radius: 16px;
  }

  .menu-button :deep(.p-button-label) {
    display: none;
  }

  .menu-button :deep(.p-button-icon) {
    margin: 0;
  }
}
</style>
