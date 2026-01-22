<template>
  <div class="empty-state">
    <h3>Select a chat to start messaging</h3>
    <p>Choose from your existing conversations or start a new one.</p>
  </div>
</template>

<style scoped>
.empty-state {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f8fafc;
  color: #64748b;
}

h3 {
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1.2rem;
  color: #334155;
}

p {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  opacity: 0.8;
}
</style>
