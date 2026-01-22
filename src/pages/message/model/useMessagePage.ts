import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useChatsStore } from '@/stores/chats'

export function useMessagePage() {
  const search = ref('')
  const router = useRouter()
  const chatsStore = useChatsStore()
  const { chats } = storeToRefs(chatsStore)

  const openChat = function (id: number) {
    router.push({ name: 'chat', params: { id: id } })
  }

  const filteredChats = computed(() => {
    const term = search.value.trim().toLowerCase()
    if (!term) {
      return chats.value
    }
    return chats.value.filter((chat) => chat.name.toLowerCase().includes(term))
  })

  return {
    search,
    filteredChats,
    openChat,
  }
}
