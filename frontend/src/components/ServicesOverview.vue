<template>
  <section class="services-overview section">
    <div class="container">
      <h2 class="section-title">Our Services</h2>
      <p class="section-subtitle">
        Enterprise-grade infrastructure solutions tailored for modern businesses
      </p>
      
      <div class="services-grid grid">
        <div class="service-card card card-hover-lift animate-on-scroll" v-for="service in services" :key="service.id">
          <div class="service-icon-wrapper">
            <div class="service-icon hover-scale" v-html="service.icon"></div>
            <div class="service-icon-bg"></div>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">
              <span class="feature-check">✓</span>
              {{ feature }}
            </li>
          </ul>
          <div class="service-action">
            <RouterLink :to="`/services#${service.slug}`" class="btn btn-secondary">
              Learn More
            </RouterLink>
          </div>
        </div>
      </div>
      
      <div class="services-cta">
        <RouterLink to="/services" class="btn btn-primary">View Full Service Catalog</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

// Ensure scroll animations are initialized for this component
const { reinitializeAnimation } = useScrollAnimation()

onMounted(() => {
  // Re-initialize scroll animations when component mounts
  reinitializeAnimation()
})

// Professional SVG Icons
const icons = {
  camera: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>`,
  network: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="6" height="6" rx="1" ry="1"></rect><rect x="9" y="16" width="6" height="6" rx="1" ry="1"></rect><rect x="16" y="2" width="6" height="6" rx="1" ry="1"></rect><line x1="5" y1="8" x2="5" y2="12"></line><line x1="12" y1="12" x2="12" y2="16"></line><line x1="19" y1="8" x2="19" y2="12"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  conference: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
  server: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`
}

const services = [
  {
    id: 1,
    slug: 'network-infrastructure',
    icon: icons.network,
    title: 'Structured Cabling & Network Design',
    description: 'Complete office network infrastructure setup including Cat6/Fiber cabling, server rack installation, and enterprise-grade WiFi configuration.',
    features: [
      'Professional structured cabling',
      'Server room organization',
      'Enterprise WiFi coverage',
      'Fiber optic termination'
    ]
  },
  {
    id: 2,
    slug: 'surveillance-systems',
    icon: icons.camera,
    title: 'Commercial Surveillance Systems',
    description: 'High-definition security camera systems with remote monitoring capabilities and reliable 24/7 recording storage.',
    features: [
      '4K IP camera systems',
      'NVR storage solutions',
      'Remote mobile viewing',
      'License plate recognition'
    ]
  },
  {
    id: 3,
    slug: 'cyber-security',
    icon: icons.shield,
    title: 'Cyber Security & Endpoint Management',
    description: 'Comprehensive local application security, network strengthening, and endpoint management for resilient infrastructure.',
    features: [
      'Endpoint protection',
      'Network hardening',
      'Local app security',
      'Threat mitigation'
    ]
  },
  {
    id: 4,
    slug: 'conference-solutions',
    icon: icons.conference,
    title: 'Corporate Conference Solutions',
    description: 'Modern conference room setups with integrated audio/video systems for seamless presentations and video calls.',
    features: [
      'Zoom/Teams room integration',
      'Wireless presentation systems',
      'Professional audio distribution',
      'Video wall installation'
    ]
  }
]
</script>

<style scoped>
.services-overview {
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

.services-overview::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 40%;
  height: 200%;
  background: radial-gradient(ellipse, rgba(0, 78, 152, 0.05) 0%, transparent 70%);
  transform: rotate(15deg);
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.services-grid {
  margin-bottom: 4rem;
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.service-card {
  text-align: center;
  position: relative;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-light);
}

.service-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
}

.service-icon {
  position: relative;
  z-index: 2;
  transition: var(--transition);
}

.service-icon-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 70px;
  background: var(--color-primary);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.05;
  transition: var(--transition);
}

.service-card:hover .service-icon-bg {
  transform: translate(-50%, -50%) scale(1.1);
  opacity: 0.1;
}

.service-title {
  font-size: 1.4rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text); /* Theme aware */
  margin-bottom: 1rem;
}

.service-description {
  color: var(--color-gray); /* Readable description */
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 0.95rem;
  flex-grow: 1;
}

.service-features {
  list-style: none;
  padding: 0;
  text-align: left;
  margin-bottom: 2rem;
  background: var(--bg-secondary); /* Contrast against card bg */
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color); /* Add border for definition */
}

.service-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: var(--color-gray-dark); /* Darker text for readability */
  font-size: 0.9rem;
  font-weight: 500;
}

.service-features li:last-child {
  margin-bottom: 0;
}

.feature-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: 50%;
  font-size: 0.65rem;
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
  margin-top: 3px;
}

.service-action {
  margin-top: auto;
}

.services-cta {
  text-align: center;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
