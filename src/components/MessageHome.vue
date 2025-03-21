<script setup>

defineProps({
  name: String,
  funcao: String,
  description: String,
})

</script>

<template>
  <div class="message-home">
    <div class="content-message">
      <h1 class="title">{{ name }}</h1>
      <p>{{ funcao }}</p>
      <p class="text-color-muted">{{ description }}</p>
    </div>
  </div>

</template>

<style scoped>

.title {
  font-size: 2.5rem;
  font-weight: bold;
}

.text-color-muted {
  color: #626567;
  font-weight: bold;
}

.content-message {
  display: flex;
  gap: 1rem;
  width: 80%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.message-home {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}

</style>
