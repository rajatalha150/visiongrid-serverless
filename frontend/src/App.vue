<template>
  <div id="app">
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
    <Chatbot />
    <CookieConsent />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Chatbot from './components/Chatbot.vue'
import CookieConsent from './components/CookieConsent.vue'
import { useScrollAnimation } from './composables/useScrollAnimation'

// Initialize scroll animations
useScrollAnimation()
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