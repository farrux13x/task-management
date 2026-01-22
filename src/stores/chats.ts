import { defineStore } from 'pinia'

export type ChatItem = {
  id: number
  name: string
  message: string
  time: string
  status: string
  avatar: string
  unread?: boolean
  showCheck?: boolean
  accentMessage?: boolean
  messages: Message[]
}

export type Message = {
  id: number
  type?: string
  text?: string
  time?: string
  image?: string
  caption?: string
}

const storageKey = 'task-management:chats'

const mockChats: ChatItem[] = [
  {
    id: 1,
    status: 'Online',
    name: 'Angelie Crison',
    message: "Thank you very much. I'm glad ...",
    time: '1m Ago',
    avatar: 'https://i.pravatar.cc/100?img=47',
    unread: true,
    messages: [
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
    ],
  },
  {
    id: 2,
    status: 'Online',
    name: 'Jakob Saris',
    message: 'You: Sure! let me tell you about w...',
    time: '2m Ago',
    avatar: 'https://i.pravatar.cc/100?img=12',
    showCheck: true,
    accentMessage: true,
    messages: [
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
    ],
  },
  {
    id: 3,
    status: 'Online',
    name: 'Emery Korsgard',
    message: "Thank's. You are very helpful...",
    time: '3m Ago',
    avatar: 'https://i.pravatar.cc/100?img=32',
    unread: true,
    messages: [
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
    ],
  },
  {
    id: 4,
    status: 'Online',
    name: 'Jeremy Zucker',
    message: 'You: Sure! let me teach you about ...',
    time: '4m Ago',
    avatar: 'https://i.pravatar.cc/100?img=14',
    showCheck: true,
    accentMessage: true,
    messages: [
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
    ],
  },
  {
    id: 5,
    status: 'Online',
    name: 'Nadia Lauren',
    message: 'Is there anything I can help? Just ...',
    time: '5m Ago',
    avatar: 'https://i.pravatar.cc/100?img=29',
    unread: true,
    messages: [
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
    ],
  },
  {
    id: 6,
    status: 'Online',
    name: 'Jason Statham',
    message: 'You: Sure! let me share about...',
    time: '6m Ago',
    avatar: 'https://i.pravatar.cc/100?img=40',
    showCheck: true,
    accentMessage: true,
    messages: [
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
    ],
  },
  {
    id: 7,
    status: 'Online',
    name: 'Angel Kimberly',
    message: 'Okay. I know very well about it...',
    time: '7m Ago',
    avatar: 'https://i.pravatar.cc/100?img=21',
    unread: true,
    messages: [
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
    ],
  },
  {
    id: 8,
    status: 'Online',
    name: 'Jason Momoa',
    message: 'You: Sure! let me tell you about...',
    time: '7m Ago',
    avatar: 'https://i.pravatar.cc/100?img=56',
    showCheck: true,
    accentMessage: true,
    messages: [
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
    ],
  },
]

const loadStoredChats = () => {
  try {
    const raw = localStorage.getItem(storageKey)
    if (!raw) {
      return null
    }
    const parsed = JSON.parse(raw) as ChatItem[]
    if (!Array.isArray(parsed)) {
      return null
    }
    return parsed
  } catch {
    return null
  }
}

export const useChatsStore = defineStore('chats', {
  state: () => ({
    chats: loadStoredChats() ?? [...mockChats],
  }),
  actions: {
    sendMsg(id: number, message: string) {
      this.chats.forEach((chat) => {
        if (chat.id === id) {
          const time = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })
          chat.message = `You: ${message}`
          chat.time = 'Just now'
          chat.unread = false

          chat.messages.push({
            id: Math.floor(Math.random() * 999),
            type: 'outgoing',
            text: message,
            time: `Today ${time}`,
          })
        }
      })
      localStorage.setItem(storageKey, JSON.stringify(this.chats))
    }
  }
})
