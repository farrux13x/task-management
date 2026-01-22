import { computed, onMounted, ref } from 'vue'
import { useMentorsStore } from '../../../stores/mentors'

type CarouselInstance = {
  navForward: () => void
  navBackward: () => void
}

export function useMentorsPage() {
  const mentorsStore = useMentorsStore()

  const mentorsCompact = computed(() => mentorsStore.mentors.slice(0, 4))
  const mentorsDetailed = computed(() => mentorsStore.mentors.slice(2))

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

  const mentorsRef = ref<CarouselInstance | null>(null)

  const triggerNext = (target: CarouselInstance | null) => {
    target?.navForward()
  }

  const triggerPrev = (target: CarouselInstance | null) => {
    target?.navBackward()
  }

  onMounted(() => {
    if (!mentorsStore.mentors.length) {
      mentorsStore.fetchMentors()
    }
  })

  return {
    mentorsCompact,
    mentorsDetailed,
    responsiveOptions,
    mentorsRef,
    triggerNext,
    triggerPrev,
  }
}
