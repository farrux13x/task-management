<script setup lang="ts">
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import PaperclipIcon from '../icons/PaperclipIcon.vue'
import SendIcon from '../icons/SendIcon.vue'

const emit = defineEmits<{
  (event: 'send', message: string): void
}>()

const draft = ref('')

const submitMessage = () => {
  const trimmed = draft.value.trim()
  if (!trimmed) {
    return
  }
  emit('send', trimmed)
  draft.value = ''
}
</script>

<template>
  <div class="composer">
    <InputText
      v-model="draft"
      placeholder="Send your message..."
      class="w-full border-none shadow-none"
      @keyup.enter="submitMessage"
    />
    <div class="d-flex gap-20">
      <Button
        type="button"
        text
        rounded
        severity="secondary"
        aria-label="Attach file"
      >
        <template #icon>
          <PaperclipIcon />
        </template>
      </Button>
      <Button
        type="button"
        :severity="draft.length > 0 ? 'primary' : 'secondary'"
        aria-label="Send message"
        @click="submitMessage"
      >
        <template #icon>
          <SendIcon />
        </template>
      </Button>
    </div>
  </div>
</template>

<style scoped>
.composer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.7500rem;
  padding: 1rem 1.1250rem;
  background: #ffffff;
  box-shadow: 0 16px 28px rgba(18, 20, 34, 0.06);
}
</style>
