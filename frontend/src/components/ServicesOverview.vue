<template>
  <section class="services-overview section">
    <div class="container">
      <h2 class="section-title">Our Services</h2>
      <p class="section-subtitle">
        Comprehensive security solutions tailored to your needs
      </p>
      
      <div class="services-grid grid">
        <div class="service-card card card-hover-lift animate-on-scroll" v-for="service in services" :key="service.id">
          <div class="service-icon-wrapper">
            <div class="service-icon hover-scale">{{ service.icon }}</div>
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
        <RouterLink to="/services" class="btn btn-primary">View All Services</RouterLink>
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

const services = [
  {
    id: 1,
    slug: 'camera-installation',
    icon: '📹',
    title: 'Security Camera Systems',
    description: 'Advanced surveillance cameras with smart detection capabilities and high-definition recording for comprehensive security coverage.',
    features: [
      'Smart person & vehicle detection',
      'High-definition recording',
      'Motion tracking technology',
      'Real-time alerts'
    ]
  },
  {
    id: 2,
    slug: 'networking-solutions',
    icon: '🔒',
    title: 'Network Infrastructure',
    description: 'Secure networking solutions with intelligent monitoring and automated alerts for reliable connectivity.',
    features: [
      'Network optimization',
      'Intelligent bandwidth management',
      'Maintenance alerts',
      'Traffic analysis'
    ]
  },
  {
    id: 3,
    slug: 'home-security',
    icon: '🏠',
    title: 'Home Security Solutions',
    description: 'Complete residential protection with smart automation and intelligent alerts for peace of mind.',
    features: [
      'Smart pattern recognition',
      'Intruder detection',
      'Mobile alerts',
      'False alarm reduction'
    ]
  },
  {
    id: 4,
    slug: 'business-security',
    icon: '🏢',
    title: 'Enterprise Security',
    description: 'Scalable business security solutions with advanced analytics and intelligent monitoring for optimal protection.',
    features: [
      'Threat prediction',
      'Analytics dashboard',
      'Automated responses',
      'Anomaly detection'
    ]
  },
  {
    id: 5,
    slug: 'audio-video-systems',
    icon: '📡',
    title: 'AV & Communication',
    description: 'Professional audio/video systems with smart automation and seamless integration for modern workspaces.',
    features: [
      'Sound optimization',
      'Meeting room automation',
      'Voice controls',
      'Camera tracking'
    ]
  }
]
</script>

<style scoped>
.services-overview {
  background: var(--gradient-light);
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
  background: radial-gradient(ellipse, rgba(255, 192, 61, 0.1) 0%, transparent 70%);
  transform: rotate(15deg);
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.services-grid {
  margin-bottom: 4rem;
  gap: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-items: center;
}

.service-card {
  text-align: center;
  position: relative;
  background: var(--color-white);
  border: 1px solid rgba(255, 192, 61, 0.1);
  transition: var(--transition-bounce);
}

.service-card:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: var(--shadow-2xl);
  border-color: rgba(255, 192, 61, 0.3);
}

.service-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.service-icon {
  font-size: 4rem;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 4px 12px rgba(255, 192, 61, 0.3));
}

.service-icon-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
  transition: var(--transition-bounce);
}

.service-card:hover .service-icon-bg {
  transform: translate(-50%, -50%) scale(1.2);
  opacity: 0.2;
}

.service-title {
  font-size: 1.6rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-dark);
  margin-bottom: 1rem;
  position: relative;
}

.service-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: var(--gradient-primary);
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.service-card:hover .service-title::after {
  width: 100px;
}

.service-description {
  color: var(--color-gray);
  margin-bottom: 2rem;
  line-height: 1.7;
  font-weight: var(--font-weight-normal);
}

.service-features {
  list-style: none;
  padding: 0;
  text-align: left;
  margin-bottom: 2rem;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: var(--color-gray-dark);
  font-weight: var(--font-weight-medium);
}

.feature-check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background: var(--gradient-primary);
  color: var(--color-dark);
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
}

.service-action {
  margin-top: 1.5rem;
  opacity: 0;
  transform: translateY(10px);
  transition: var(--transition);
}

.service-card:hover .service-action {
  opacity: 1;
  transform: translateY(0);
}

.services-cta {
  text-align: center;
  margin-top: 3rem;
}

.services-cta .btn {
  padding: 18px 48px;
  font-size: 1.1rem;
}

@media (max-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .service-icon {
    font-size: 3rem;
  }
  
  .service-title {
    font-size: 1.4rem;
  }
  
  .service-card:hover {
    transform: translateY(-5px) scale(1.03);
  }
  
  .service-action {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>