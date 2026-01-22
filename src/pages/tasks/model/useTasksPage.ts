import { computed, ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import { useRouter } from 'vue-router'

type CarouselInstance = {
  navForward: () => void
  navBackward: () => void
}

export function useTasksPage() {
  const router = useRouter()
  const search = ref('')

  const avatars = [
    'https://i.pravatar.cc/100?img=12',
    'https://i.pravatar.cc/100?img=32',
    'https://i.pravatar.cc/100?img=48',
    'https://i.pravatar.cc/100?img=56',
    'https://i.pravatar.cc/100?img=68',
  ]

  const teamMembers = avatars.map((image, index) => ({
    name: `Member ${index + 1}`,
    image,
  }))

  const timeLimitCarousel = ref<CarouselInstance | null>(null)
  const newTaskCarousel = ref<CarouselInstance | null>(null)

  const triggerNext = (target: CarouselInstance | null, event?: Event) => {
    if (!event) {
      return
    }
    //@ts-expect-error
    target?.navForward(event)
  }

  const triggerPrev = (target: CarouselInstance | null, event?: Event) => {
    if (!event) {
      return
    }
    //@ts-expect-error
    target?.navBackward(event)
  }

  const tasksStore = useTasksStore()

  const filteredTasks = computed(() => {
    const term = search.value.trim().toLowerCase()
    if (!term) {
      return tasksStore.tasks
    }
    return tasksStore.tasks.filter((task) =>
      task.title.toLowerCase().includes(term),
    )
  })

  const carouselKey = computed(
    () => `${search.value.trim().toLowerCase()}-${filteredTasks.value.length}`,
  )

  const responsiveOptions = [
    {
      breakpoint: '1300px',
      numVisible: 1,
      numScroll: 1,
    },
  ]

  const openTask = function (id: number) {
    router.push({ name: 'task', params: { id: id } })
  }

  return {
    search,
    teamMembers,
    timeLimitCarousel,
    newTaskCarousel,
    triggerNext,
    triggerPrev,
    filteredTasks,
    carouselKey,
    responsiveOptions,
    openTask,
  }
}
