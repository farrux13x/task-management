<script setup lang="ts">
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Dropdown from 'primevue/dropdown'
import SelectButton from 'primevue/selectbutton'
import ToggleSwitch from 'primevue/toggleswitch'
import Button from 'primevue/button'
import { useSettingsPage } from '../model/useSettingsPage'

const {
  languageOptions,
  timezoneOptions,
  timeFormatOptions,
  language,
  timezone,
  timeFormat,
  notifications,
} = useSettingsPage()
</script>

<template>
  <section class="settings">
    <div class="settings-card">
      <Tabs value="0">
        <TabList>
          <Tab value="0">General</Tab>
          <Tab value="1">Notification</Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="0">
            <div class="settings-form">
              <div class="field">
                <label class="field-label" for="language">Language</label>
                <Dropdown
                  id="language"
                  v-model="language"
                  :options="languageOptions"
                  placeholder="Select language"
                />
              </div>

              <div class="field">
                <label class="field-label" for="timezone">Timezone</label>
                <Dropdown
                  id="timezone"
                  v-model="timezone"
                  :options="timezoneOptions"
                  placeholder="Select timezone"
                />
              </div>

              <div class="field">
                <span class="field-label">Timezone</span>
                <SelectButton
                  v-model="timeFormat"
                  :options="timeFormatOptions"
                />
              </div>

              <Button label="Save Changes" severity="primary" />
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="notification-list">
              <div class="notification-item">
                <ToggleSwitch
                  v-model="notifications.message"
                  inputId="notify-message"
                />
                <label for="notify-message">Message</label>
              </div>
              <div class="notification-item">
                <ToggleSwitch
                  v-model="notifications.taskUpdate"
                  inputId="notify-task-update"
                />
                <label for="notify-task-update">Task Update</label>
              </div>
              <div class="notification-item">
                <ToggleSwitch
                  v-model="notifications.taskDeadline"
                  inputId="notify-task-deadline"
                />
                <label for="notify-task-deadline">Task Deadline</label>
              </div>
              <div class="notification-item">
                <ToggleSwitch
                  v-model="notifications.mentorHelp"
                  inputId="notify-mentor-help"
                />
                <label for="notify-mentor-help">Mentor Help</label>
              </div>
              <Button label="Save Changes" severity="primary" />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </section>
</template>

<style scoped>
.settings {
  width: 100%;
}

.settings-card {
  background: #ffffff;
  padding: 20px 24px 28px;
  box-shadow: 0 18px 32px rgba(15, 18, 32, 0.06);
}

.settings-form {
  display: grid;
  gap: 22px;
  max-width: 420px;
  padding: 8px 4px 0;
}

.field {
  display: grid;
  gap: 10px;
}

.field-label {
  font-weight: 600;
  color: var(--text-strong);
}

.notification-list {
  display: grid;
  gap: 18px;
  max-width: 420px;
  padding: 8px 4px 0;
}

.notification-item {
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 600;
  color: var(--text-strong);
}

.notification-item label {
  cursor: pointer;
}

@media (max-width: 900px) {
  .settings-card {
    padding: 18px 18px 24px;
  }

  .settings-form {
    max-width: 100%;
  }
}
</style>
