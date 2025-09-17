<template>
  <section class="about-section section">
    <div class="container">
      <div class="about-content grid grid-2">
        <div class="about-text">
          <h2 class="section-title text-left">About VisionGrid</h2>
          <p class="about-description">
            Founded with a mission to revolutionize security solutions, VisionGrid combines 
            cutting-edge technology with exceptional service to protect what matters most to you.
          </p>
          <p class="about-description">
            Our team of certified technicians brings years of experience in security systems, 
            networking, and customer service. We focus on delivering customized solutions 
            that meet your specific needs and budget.
          </p>
          
          <div class="about-stats">
            <div class="stat-item">
              <div class="stat-number">100+</div>
              <div class="stat-label">Installations</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">5+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Support</div>
            </div>
          </div>
          
          <div class="about-actions">
            <RouterLink to="/about" class="btn btn-primary">Learn More</RouterLink>
            <RouterLink to="/contact" class="btn btn-secondary">Get Quote</RouterLink>
          </div>
        </div>
        
        <div class="about-features">
          <h3>Why Choose VisionGrid?</h3>
          <div class="feature-list">
            <div class="feature-item" v-for="feature in features" :key="feature.id">
              <div class="feature-icon">{{ feature.icon }}</div>
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

const features = [
  {
    id: 1,
    icon: '⭐',
    title: 'Expert Installation',
    description: 'Certified technicians with years of experience in security systems.'
  },
  {
    id: 2,
    icon: '🎯',
    title: 'Customized Solutions',
    description: 'Tailored security systems designed to meet your specific requirements.'
  },
  {
    id: 3,
    icon: '🛠️',
    title: 'Ongoing Support',
    description: '24/7 technical support and maintenance services for peace of mind.'
  },
  {
    id: 4,
    icon: '💯',
    title: 'Quality Guarantee',
    description: 'Premium equipment and workmanship backed by comprehensive warranties.'
  }
]
</script>

<style scoped>
.about-section {
  background-color: var(--color-white);
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
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-gray);
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