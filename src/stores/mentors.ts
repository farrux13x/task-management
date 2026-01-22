import { defineStore } from 'pinia'
import axios from 'axios'

export type MentorItem = {
  id: string
  name: string
  role: string
  tasks: number
  rating: string
  reviews: number
  image: string
  bio: string
  isFollowed: boolean
  location: string
  website: string
}

type ApiMentor = {
  ID: string
  'Full Name': string
  Profession: string
  Bio: string
  'Tasks Count': string
  Rating: string
  'Reviews Count': string
  'Is Followed': string
  'Avatar URL': string
  'Website/Portfolio': string
  Location: string
}

const buildAvatarUrl = (url: string, index: number) => {
  if (url && /^https?:/i.test(url)) {
    return url
  }
  return `https://i.pravatar.cc/100?img=${(index % 70) + 1}`
}

export const useMentorsStore = defineStore('mentors', {
  state: () => ({
    mentors: [] as MentorItem[],
    loading: false,
    error: '' as string,
  }),
  actions: {
    async fetchMentors() {
      this.loading = true
      this.error = ''
      try {
        const response = await axios.get<ApiMentor[]>(
          import.meta.env.VITE_API_URL + '/ykz',
        )
        this.mentors = response.data.map((mentor, index) => ({
          id: mentor.ID,
          name: mentor['Full Name'],
          role: mentor.Profession,
          tasks: Number(mentor['Tasks Count']) || 0,
          rating: mentor.Rating,
          reviews: Number(mentor['Reviews Count']) || 0,
          image: buildAvatarUrl(mentor['Avatar URL'], index),
          bio: mentor.Bio,
          isFollowed: mentor['Is Followed'].toUpperCase() === 'TRUE',
          location: mentor.Location,
          website: mentor['Website/Portfolio'],
        }))
      } catch (err) {
        this.error = 'Failed to load mentors.'
        this.mentors = []
      } finally {
        this.loading = false
      }
    },
  },
})
