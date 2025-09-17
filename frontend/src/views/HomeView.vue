<template>
  <div class="home">
    <HeroSection />
    <ServicesOverview />
    <AboutSection />
    <ContactCTA />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import ServicesOverview from '@/components/ServicesOverview.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactCTA from '@/components/ContactCTA.vue'
</script>

<style scoped>
.home {
  overflow-x: hidden;
}
</style>