<script setup lang="ts">
import { onMounted } from 'vue'
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
import Toast from 'primevue/toast'

const {
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
} = useSettingsPage()

onMounted(() => {
  applyStoredSettings()
})
</script>

<template>
  <section class="settings">
    <Toast />
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
              <Button
                label="Save Changes"
                @click="saveGeneral"
                severity="primary"
              />
            </div>
          </TabPanel>
          <TabPanel value="1">
            <div class="notification-list">
              <div v-for="value in notifications" class="notification-item">
                <ToggleSwitch
                  v-model="value.toggle"
                  inputId="notify-message"
                />
                <label for="notify-message">{{value.name}}</label>
              </div>
              <Button
                label="Save Changes"
                severity="primary"
                @click="saveNotifications"
              />
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
  padding: 2rem;
}

.settings-card {
  border-radius: 10px;
  background: #ffffff;
  padding: 1.2500rem 1.5000rem 1.7500rem;
  box-shadow: 0 18px 32px rgba(15, 18, 32, 0.06);
}

.settings-form {
  display: grid;
  gap: 1.3750rem;
  max-width: 420px;
  padding: 0.5000rem 0.2500rem 0;
}

.field {
  display: grid;
  gap: 0.6250rem;
}

.field-label {
  font-weight: 600;
  color: var(--text-strong);
}

.notification-list {
  display: grid;
  gap: 1.1250rem;
  max-width: 420px;
  padding: 0.5000rem 0.2500rem 0;
}

.notification-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  color: var(--text-strong);
}

.notification-item label {
  cursor: pointer;
}

@media (max-width: 1050px) {
  .settings-card {
    padding: 0.5000rem 1.1250rem 1.5000rem;
  }

  .settings-form {
    max-width: 100%;
  }
}
</style>
