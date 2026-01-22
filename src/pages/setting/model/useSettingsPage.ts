import { ref, reactive } from 'vue'
import { useToast } from 'primevue/usetoast'

type NotificationSettings = {
  name: string
  toggle: boolean
  id: number
}

export function useSettingsPage() {
  const storageKey = 'task-management:settings'
  const languageOptions = ['English (Default)', 'Arabic', 'Spanish']
  const timezoneOptions = ['English (Default)', 'UTC', 'GMT +1']
  const timeFormatOptions = ['24 Hours', '12 Hours']

  const language = ref(languageOptions[0])
  const timezone = ref(timezoneOptions[0])
  const timeFormat = ref(timeFormatOptions[0])

  const notifications = reactive<NotificationSettings[]>([
    {
      name: 'Message',
      toggle: false,
      id: 1
    },
    {
      name: 'Task Update',
      toggle: false,
      id: 2
    },
    {
      name: 'Task Deadline',
      toggle: true,
      id: 3
    },
    {
      name: 'Mentor Help',
      toggle: false,
      id: 4
    }
  ])

  const toast = useToast()

  const loadStoredSettings = () => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (!raw) {
        return null
      }
      return JSON.parse(raw) as {
        language?: string
        timezone?: string
        timeFormat?: string
        notifications?: Array<{ id: number; toggle: boolean }>
      }
    } catch {
      return null
    }
  }

  const applyStoredSettings = () => {
    const stored = loadStoredSettings()
    if (!stored) {
      return
    }

    if (
      typeof stored.language === 'string' &&
      languageOptions.includes(stored.language)
    ) {
      language.value = stored.language
    }

    if (
      typeof stored.timezone === 'string' &&
      timezoneOptions.includes(stored.timezone)
    ) {
      timezone.value = stored.timezone
    }

    if (
      typeof stored.timeFormat === 'string' &&
      timeFormatOptions.includes(stored.timeFormat)
    ) {
      timeFormat.value = stored.timeFormat
    }

    if (Array.isArray(stored.notifications)) {
      const toggleMap = new Map(
        stored.notifications.map((item) => [item.id, item.toggle]),
      )
      notifications.forEach((item) => {
        const savedToggle = toggleMap.get(item.id)
        if (typeof savedToggle === 'boolean') {
          item.toggle = savedToggle
        }
      })
    }
  }

  const buildNotificationsPayload = () =>
    notifications.map((item) => ({
      id: item.id,
      toggle: item.toggle,
    }))

  const saveGeneral = () => {
    const stored = loadStoredSettings()
    const payload = {
      language: language.value,
      timezone: timezone.value,
      timeFormat: timeFormat.value,
      notifications: stored?.notifications ?? buildNotificationsPayload(),
    }

    localStorage.setItem(storageKey, JSON.stringify(payload))
    toast.add({ severity: 'success', summary: 'Success', life: 1000 })
  }

  const saveNotifications = () => {
    const stored = loadStoredSettings()
    const payload = {
      language: stored?.language ?? language.value,
      timezone: stored?.timezone ?? timezone.value,
      timeFormat: stored?.timeFormat ?? timeFormat.value,
      notifications: buildNotificationsPayload(),
    }

    localStorage.setItem(storageKey, JSON.stringify(payload))
    toast.add({ severity: 'success', summary: 'Success', life: 1000 })
  }

  return {
    applyStoredSettings,
    languageOptions,
    timezoneOptions,
    timeFormatOptions,
    language,
    timezone,
    timeFormat,
    notifications,
    saveGeneral,
    saveNotifications,
  }
}
