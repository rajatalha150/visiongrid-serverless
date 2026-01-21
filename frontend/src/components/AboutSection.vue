<template>
  <section class="about-section section">
    <div class="container">
      <div class="about-content grid grid-2">
        <div class="about-text">
          <h2 class="section-title text-left">About VisionGrid</h2>
          <p class="about-description">
            Founded with a mission to deliver enterprise-grade infrastructure solutions, VisionGrid combines 
            certified expertise with reliable technology to build the foundation of your business operations.
          </p>
          <p class="about-description">
            Our team of certified engineers brings years of experience in structured cabling, 
            network design, and security systems. We focus on delivering scalable solutions 
            that grow with your business needs, ensuring maximum uptime and security.
          </p>
          
          <div class="about-stats">
            <div class="stat-item">
              <div class="stat-number">500+</div>
              <div class="stat-label">Projects Completed</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Critical Support</div>
            </div>
          </div>
          
          <div class="about-actions">
            <RouterLink to="/about" class="btn btn-primary">Our Company</RouterLink>
            <RouterLink to="/contact" class="btn btn-secondary">Request Quote</RouterLink>
          </div>
        </div>
        
        <div class="about-features">
          <h3>Why Choose VisionGrid?</h3>
          <div class="feature-list">
            <div class="feature-item" v-for="feature in features" :key="feature.id">
              <div class="feature-icon" v-html="feature.icon"></div>
              <div class="feature-content">
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const icons = {
  cert: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  scale: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
  support: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  guarantee: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
}

const features = [
  {
    id: 1,
    icon: icons.cert,
    title: 'Certified Technicians',
    description: 'Licensed professionals with industry certifications for all installation types.'
  },
  {
    id: 2,
    icon: icons.scale,
    title: 'Scalable Solutions',
    description: 'Infrastructure designed to grow with your business without costly overhauls.'
  },
  {
    id: 3,
    icon: icons.support,
    title: 'Reliable Support',
    description: 'Dedicated support teams available 24/7 to ensure your systems never fail.'
  },
  {
    id: 4,
    icon: icons.guarantee,
    title: 'Quality Guarantee',
    description: 'We stand by our work with comprehensive warranties on parts and labor.'
  }
]
</script>

<style scoped>
.about-section {
  background-color: var(--bg-primary); /* Use theme background instead of white */
}

.about-content {
  align-items: center;
  gap: 4rem;
}

.about-text {
  max-width: none;
}

.section-title {
  margin-bottom: 2rem;
  color: var(--color-text); /* Ensure readable title */
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-gray-dark); /* Darker gray for better contrast */
  margin-bottom: 1.5rem;
}

.about-stats {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.stat-label {
  color: var(--color-gray);
  font-weight: 500;
  margin-top: 0.5rem;
}

.about-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.about-features h3 {
  font-size: 1.8rem;
  color: var(--color-dark);
  margin-bottom: 2rem;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.feature-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  color: var(--color-primary); /* Ensure icon is visible */
}

.feature-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
}

.feature-content p {
  color: var(--color-gray);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .about-content {
    gap: 2rem;
  }
  
  .about-stats {
    justify-content: space-around;
    gap: 1rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .about-actions {
    justify-content: center;
  }
  
  .feature-item {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
  
  .feature-icon {
    font-size: 2rem;
  }
}
</style>