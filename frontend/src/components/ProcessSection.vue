<template>
  <section class="process-section section">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title">Deployment Process</h2>
        <p class="section-subtitle">
          Our proven workflow ensures seamless integration and minimal downtime
        </p>
      </div>

      <div class="process-steps">
        <div class="process-step animate-on-scroll" v-for="(step, index) in steps" :key="step.id" :style="`animation-delay: ${index * 0.1}s`">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-content">
            <div class="step-icon" v-html="step.icon"></div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
          <div class="step-connector" v-if="index < steps.length - 1"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { reinitializeAnimation } = useScrollAnimation()

onMounted(() => {
  reinitializeAnimation()
})

const icons = {
  survey: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  install: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
  config: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  support: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`
}

const steps = [
  {
    id: 1,
    icon: icons.survey,
    title: 'Site Survey & Design',
    description: 'We conduct a comprehensive analysis of your facility to design a custom infrastructure plan that meets your specific operational needs.'
  },
  {
    id: 2,
    icon: icons.install,
    title: 'Professional Installation',
    description: 'Our certified technicians handle the physical deployment, including structured cabling, hardware mounting, and electrical integration.'
  },
  {
    id: 3,
    icon: icons.config,
    title: 'Network Configuration',
    description: 'We configure all systems for optimal performance, security, and redundancy, ensuring your network is robust and secure.'
  },
  {
    id: 4,
    icon: icons.support,
    title: '24/7 Support & Maintenance',
    description: 'Ongoing monitoring and maintenance ensure your systems remain operational, with rapid response teams available around the clock.'
  }
]
</script>

<style scoped>
.process-section {
  background: var(--bg-primary);
  padding-bottom: 6rem;
}

.mb-5 {
  margin-bottom: 4rem;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
}

.process-step {
  position: relative;
  text-align: center;
  z-index: 2;
  padding: 0 1rem;
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--bg-primary);
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold);
  margin: 0 auto 1.5rem;
  position: relative;
  z-index: 2;
}

.step-content {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: var(--transition);
  height: 100%;
}

.process-step:hover .step-content {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-light);
}

.process-step:hover .step-number {
  background: var(--color-primary);
  color: var(--color-white);
}

.step-icon {
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.step-title {
  font-size: 1.1rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.step-description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.step-connector {
  position: absolute;
  top: 20px;
  left: 50%;
  width: 100%;
  height: 2px;
  background: var(--border-color);
  z-index: 1;
}

@media (max-width: 992px) {
  .process-steps {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
  }

  .step-connector {
    display: none; /* Hide connector lines on tablet/mobile for simplicity */
  }
}

@media (max-width: 576px) {
  .process-steps {
    grid-template-columns: 1fr;
  }
}
</style>
