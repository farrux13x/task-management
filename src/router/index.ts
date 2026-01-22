import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'overview',
      meta: {
        title: 'Overview',
        menuId: 'overview',
      },
      component: () => import('@pages/overview/ui/OverviewPage.vue'),
    },
    {
      path: '/tasks',
      name: 'tasks',
      meta: {
        title: 'Tasks',
        menuId: 'tasks',
      },
      component: () => import('@pages/tasks/ui/TasksPage.vue'),
    },
    {
      path: '/task/:id',
      name: 'task',
      meta: {
        title: 'Task Detail',
        menuId: 'tasks',
      },
      component: () => import('@pages/task/ui/TaskPage.vue'),
    },
    {
      path: '/mentors',
      name: 'mentors',
      meta: {
        title: 'Mentors',
        menuId: 'mentors',
      },
      component: () => import('@pages/mentor/ui/MentorsPage.vue'),
    },
    {
      path: '/message',
      name: 'message',
      meta: {
        title: 'Messages',
        menuId: 'message-empty',
      },
      component: () => import('@pages/message/ui/MessagePage.vue'),
      children: [
        {
          path: '',
          name: 'message-empty',
          meta: {
            title: 'Messages',
            menuId: 'message-empty',
          },
          component: () => import('@pages/chat/ui/NoChatSelectedPage.vue'),
        },
        {
          path: ':id',
          name: 'chat',
          meta: {
            title: 'Chat',
            menuId: 'message-empty',
          },
          component: () => import('@pages/chat/ui/ChatPage.vue'),
        },
      ],
    },
    {
      path: '/settings',
      name: 'settings',
      meta: {
        title: 'Settings',
        menuId: 'settings',
      },
      component: () => import('@pages/setting/ui/SettingsPage.vue'),
    },
  ],
})

export default router
