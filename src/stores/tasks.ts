import { defineStore } from 'pinia'
import axios from 'axios'

export type TaskItem = {
  id: string
  title: string
  category: string
  description: string
  duration: string
  progress: number
  status: string
  image: string
}

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as TaskItem[],
    loading: false,
    error: '' as string,
  }),
  actions: {
    async fetchTasks() {
      this.loading = true
      this.error = ''
      try {
        const response = await axios.get<TaskItem[]>(
          import.meta.env.VITE_API_URL + '/eil',
        )
        this.tasks = response.data
      } catch (err) {
        this.error = 'Failed to load tasks.'
        this.tasks = []
      } finally {
        this.loading = false
      }
    },
  },
})
