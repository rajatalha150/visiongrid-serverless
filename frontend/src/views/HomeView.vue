<template>
  <div class="home">
    <HeroSection />
    <EZProductsSection />
    <ServicesOverview />
    <ProcessSection />
    <AboutSection />
    <ContactCTA />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import EZProductsSection from '@/components/EZProductsSection.vue'
import ServicesOverview from '@/components/ServicesOverview.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactCTA from '@/components/ContactCTA.vue'
import { useRouteSEO } from '@/composables/useSEO'

const route = useRoute()

useRouteSEO(route, () => ({
  title: 'VisionGrid — Network, Security & EZ Solutions',
  description:
    'VisionGrid delivers enterprise network, security, and infrastructure solutions — and EZ Solutions, a suite of PDF tools for accountants and small businesses: EZ-Summary (PDF bank statements to Excel) and EZ-Extract (universal PDF field extractor).',
  keywords:
    'VisionGrid, EZ Solutions, EZ-Summary, EZ-Extract, bank statement to Excel, PDF to Excel, PDF field extractor, accountant tools, bookkeeping software, network infrastructure, security camera installation, structured cabling',
  canonical: 'https://visiongrid.net/',
  ogImage: 'https://visiongrid.net/logo.png',
  ogType: 'website',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'VisionGrid',
      url: 'https://visiongrid.net',
      logo: 'https://visiongrid.net/logo.png',
      email: 'info@visiongrid.net',
      sameAs: [],
      subOrganization: {
        '@type': 'Organization',
        name: 'EZ Solutions by VisionGrid',
        url: 'https://ez.visiongrid.net'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'VisionGrid',
      url: 'https://visiongrid.net/',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://visiongrid.net/?s={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  ]
}))
</script>

<style scoped>
.home {
  overflow-x: hidden;
}
</style>
