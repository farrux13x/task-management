import { computed, ref } from 'vue'
import { useMentorsStore } from '@/stores/mentors'

type CarouselInstance = {
  navForward: () => void
  navBackward: () => void
}

export function useMentorsPage() {
  const mentorsStore = useMentorsStore()
  const search = ref('')

  const filteredMentors = computed(() => {
    const term = search.value.trim().toLowerCase()
    if (!term) {
      return mentorsStore.mentors
    }
    return mentorsStore.mentors.filter((mentor) =>
      mentor.name.toLowerCase().includes(term),
    )
  })

  const mentorsCompact = computed(() => mentorsStore.mentors.slice(0, 4))
  const mentorsDetailed = computed(() => filteredMentors.value)

  const responsiveOptions = [
    {
      breakpoint: '1200px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1050px',
      numVisible: 1,
      numScroll: 1,
    },
  ]

  const mentorsRef = ref<CarouselInstance | null>(null)

  const toggleFollow = (mentorId: number) => {
    mentorsStore.toggleFollow(mentorId)
  }

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

  return {
    search,
    mentorsCompact,
    mentorsDetailed,
    responsiveOptions,
    mentorsRef,
    triggerNext,
    triggerPrev,
    toggleFollow,
  }
}
