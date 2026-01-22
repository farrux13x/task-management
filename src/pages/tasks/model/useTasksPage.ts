import { computed, onMounted, ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import { useRouter } from 'vue-router'

type CarouselInstance = {
  navForward: () => void
  navBackward: () => void
}

export function useTasksPage() {
  const router = useRouter()

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

  const triggerNext = (target: CarouselInstance | null) => {
    target?.navForward()
  }

  const triggerPrev = (target: CarouselInstance | null) => {
    target?.navBackward()
  }

  const tasksStore = useTasksStore()

  const timeLimitTasks = computed(() =>
    tasksStore.tasks.map((task, index) => ({
      title: task.title,
      id: task.id,
      category: task.category,
      progress: task.progress,
      timeLabel: task.duration,
      image: task.image,
    })),
  )

  const newTasks = computed(() =>
    tasksStore.tasks.map((task, index) => ({
      title: task.title,
      id: task.id,
      category: task.category,
      progress: task.progress,
      timeLabel: task.duration,
      image: task.image,
    })),
  )

  const responsiveOptions = [
    {
      breakpoint: '1200px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '900px',
      numVisible: 1,
      numScroll: 1,
    },
  ]

  const openTask = function (id: number) {
    router.push({ name: 'task', params: { id: id } })
  }

  onMounted(() => {
    if (!tasksStore.tasks.length) {
      tasksStore.fetchTasks()
    }
  })

  return {
    teamMembers,
    timeLimitCarousel,
    newTaskCarousel,
    triggerNext,
    triggerPrev,
    timeLimitTasks,
    newTasks,
    responsiveOptions,
    openTask,
  }
}
