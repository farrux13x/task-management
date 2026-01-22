import { ref } from 'vue'

type NotificationSettings = {
  message: boolean
  taskUpdate: boolean
  taskDeadline: boolean
  mentorHelp: boolean
}

export function useSettingsPage() {
  const languageOptions = ['English (Default)', 'Arabic', 'Spanish']
  const timezoneOptions = ['English (Default)', 'UTC', 'GMT +1']
  const timeFormatOptions = ['24 Hours', '12 Hours']

  const language = ref(languageOptions[0])
  const timezone = ref(timezoneOptions[0])
  const timeFormat = ref(timeFormatOptions[0])

  const notifications = ref<NotificationSettings>({
    message: true,
    taskUpdate: false,
    taskDeadline: true,
    mentorHelp: false,
  })

  return {
    languageOptions,
    timezoneOptions,
    timeFormatOptions,
    language,
    timezone,
    timeFormat,
    notifications,
  }
}
