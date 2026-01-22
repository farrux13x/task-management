import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

type ChatItem = {
  id: number
  name: string
  message: string
  time: string
  avatar: string
  unread?: boolean
  showCheck?: boolean
  accentMessage?: boolean
}

export function useMessagePage() {
  const search = ref('')
  const router = useRouter()
  const chats: ChatItem[] = [
    {
      id: 1,
      name: 'Angelie Crison',
      message: "Thank you very much. I'm glad ...",
      time: '1m Ago',
      avatar: 'https://i.pravatar.cc/100?img=47',
      unread: true,
    },
    {
      id: 2,
      name: 'Jakob Saris',
      message: 'You: Sure! let me tell you about w...',
      time: '2m Ago',
      avatar: 'https://i.pravatar.cc/100?img=12',
      showCheck: true,
      accentMessage: true,
    },
    {
      id: 3,
      name: 'Emery Korsgard',
      message: "Thank's. You are very helpful...",
      time: '3m Ago',
      avatar: 'https://i.pravatar.cc/100?img=32',
      unread: true,
    },
    {
      id: 4,
      name: 'Jeremy Zucker',
      message: 'You: Sure! let me teach you about ...',
      time: '4m Ago',
      avatar: 'https://i.pravatar.cc/100?img=14',
      showCheck: true,
      accentMessage: true,
    },
    {
      id: 5,
      name: 'Nadia Lauren',
      message: 'Is there anything I can help? Just ...',
      time: '5m Ago',
      avatar: 'https://i.pravatar.cc/100?img=29',
      unread: true,
    },
    {
      id: 6,
      name: 'Jason Statham',
      message: 'You: Sure! let me share about...',
      time: '6m Ago',
      avatar: 'https://i.pravatar.cc/100?img=40',
      showCheck: true,
      accentMessage: true,
    },
    {
      id: 7,
      name: 'Angel Kimberly',
      message: 'Okay. I know very well about it...',
      time: '7m Ago',
      avatar: 'https://i.pravatar.cc/100?img=21',
      unread: true,
    },
    {
      id: 8,
      name: 'Jason Momoa',
      message: 'You: Sure! let me tell you about...',
      time: '7m Ago',
      avatar: 'https://i.pravatar.cc/100?img=56',
      showCheck: true,
      accentMessage: true,
    },
  ]

  const openChat = function (id: number) {
    router.push({ name: 'chat', params: { id: id } })
  }

  const filteredChats = computed(() => {
    const term = search.value.trim().toLowerCase()
    if (!term) {
      return chats
    }
    return chats.filter((chat) => chat.name.toLowerCase().includes(term))
  })

  return {
    search,
    filteredChats,
    openChat,
  }
}
