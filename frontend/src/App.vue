<template>
  <div id="app">
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
    <Chatbot />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Chatbot from './components/Chatbot.vue'
import { useScrollAnimation } from './composables/useScrollAnimation'
import { useDarkMode } from './composables/useDarkMode'

// Initialize scroll animations
useScrollAnimation()

// Initialize dark mode
useDarkMode()
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>