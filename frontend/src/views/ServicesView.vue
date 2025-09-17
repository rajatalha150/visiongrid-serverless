<template>
  <div class="services-page">
    <div class="page-hero">
      <div class="container">
        <h1 class="page-title">Our Services</h1>
        <p class="page-subtitle">Comprehensive security solutions for every need</p>
      </div>
    </div>
    
    <section class="section">
      <div class="container">
        <div class="services-detailed">
          <div class="service-detail" v-for="service in services" :key="service.id" :id="service.slug">
            <div class="service-content grid grid-2">
              <div class="service-info">
                <div class="service-icon">{{ service.icon }}</div>
                <h2>{{ service.title }}</h2>
                <p class="service-description">{{ service.description }}</p>
                
                <h4>Key Features:</h4>
                <ul class="service-features">
                  <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
                </ul>
                
                <h4>Benefits:</h4>
                <ul class="service-benefits">
                  <li v-for="benefit in service.benefits" :key="benefit">{{ benefit }}</li>
                </ul>
                
                <div class="service-action">
                  <RouterLink to="/contact" class="btn btn-primary">Get Quote</RouterLink>
                </div>
              </div>
              
              <div class="service-visual">
                <div class="service-image-container">
                  <img 
                    :src="`/media/services/${service.slug}.${service.imageExt || 'jpg'}`" 
                    :alt="service.title"
                    class="service-image"
                    @error="handleImageError"
                  />
                  <div class="image-placeholder" v-show="false" ref="placeholder">
                    <span>{{ service.title }} Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section bg-light">
      <div class="container">
        <div class="process-section">
          <h2 class="section-title">Our Installation Process</h2>
          <div class="process-steps grid grid-4">
            <div class="step-item" v-for="step in process" :key="step.id">
              <div class="step-number">{{ step.id }}</div>
              <div class="step-icon">{{ step.icon }}</div>
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { onMounted, nextTick } from 'vue'

// Handle image loading errors
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  const container = img.parentElement
  if (container) {
    img.style.display = 'none'
    const placeholder = container.querySelector('.image-placeholder') as HTMLElement
    if (placeholder) {
      placeholder.style.display = 'flex'
    }
  }
}

onMounted(async () => {
  await nextTick()
  // Handle anchor navigation
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
})

const services = [
  {
    id: 1,
    slug: 'camera-installation',
    icon: '📹',
    title: 'Camera Installation',
    description: 'Professional security camera installation with optimal positioning and configuration for maximum coverage and effectiveness.',
    features: [
      'Indoor and outdoor camera options',
      'HD, 4K, and night vision capabilities',
      'Motion detection and smart alerts',
      'Remote viewing via mobile apps',
      'Cloud and local storage solutions'
    ],
    benefits: [
      '24/7 property monitoring',
      'Deterrent effect on potential intruders',
      'Evidence collection capability',
      'Insurance benefits and discounts',
      'Peace of mind for property owners'
    ]
  },
  {
    id: 2,
    slug: 'networking-solutions',
    icon: '🌐',
    title: 'Networking Solutions',
    description: 'Complete network infrastructure design and implementation for reliable connectivity and optimal performance across your property.',
    features: [
      'Network design and planning',
      'Wi-Fi optimization and coverage',
      'Cable management and installation',
      'Network security configuration',
      'Performance monitoring and maintenance'
    ],
    benefits: [
      'Improved internet speed and reliability',
      'Seamless connectivity throughout property',
      'Enhanced security system performance',
      'Future-ready infrastructure',
      'Reduced connectivity issues'
    ]
  },
  {
    id: 3,
    slug: 'home-security',
    icon: '🏠',
    title: 'Home Security',
    description: 'Comprehensive residential security systems designed to protect your family and property with modern technology and smart integration.',
    features: [
      'Motion sensors and door/window contacts',
      'Smart home integration',
      'Mobile app control and alerts',
      'Professional monitoring options',
      'Backup power systems'
    ],
    benefits: [
      'Enhanced family safety and security',
      'Lower home insurance premiums',
      'Increased property value',
      'Remote monitoring capabilities',
      'Quick emergency response'
    ]
  },
  {
    id: 4,
    slug: 'business-security',
    imageExt: 'png',
    icon: '🏢',
    title: 'Business Security',
    description: 'Enterprise-grade security solutions tailored for commercial properties with advanced features and compliance support.',
    features: [
      'Multi-location monitoring',
      'Access control systems',
      'Advanced video analytics',
      'Integration with existing systems',
      'Compliance and reporting tools'
    ],
    benefits: [
      'Protection of business assets',
      'Employee and customer safety',
      'Compliance with regulations',
      'Operational insights and analytics',
      'Reduced security-related losses'
    ]
  },
  {
    id: 5,
    slug: 'audio-video-systems',
    icon: '🎵',
    title: 'Audio & Video Systems',
    description: 'We take care of the design, installation, and setup so you can enjoy flawless performance from day one.',
    features: [
      'High-quality speakers for home entertainment',
      'Conference room audio & video systems',
      'Projection systems for events and training',
      'Professional installation and calibration',
      'Integration with existing smart home systems'
    ],
    benefits: [
      'Crystal clear audio and video quality',
      'Enhanced communication in meetings',
      'Professional presentation capabilities',
      'Seamless system integration',
      'Ongoing technical support and maintenance'
    ]
  }
]

const process = [
  {
    id: 1,
    icon: '📋',
    title: 'Consultation',
    description: 'Free assessment of your security needs and property evaluation.'
  },
  {
    id: 2,
    icon: '📐',
    title: 'Design',
    description: 'Custom security system design and detailed installation plan.'
  },
  {
    id: 3,
    icon: '🔧',
    title: 'Installation',
    description: 'Professional installation by certified technicians.'
  },
  {
    id: 4,
    icon: '✅',
    title: 'Support',
    description: 'Ongoing maintenance and 24/7 technical support.'
  }
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--color-dark) 0%, #2c3e50 100%);
  color: var(--color-white);
  padding: 120px 0 80px;
  text-align: center;
  margin-top: 70px;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
}

.service-detail {
  margin-bottom: 4rem;
  padding-bottom: 4rem;
  padding-top: 2rem;
  border-bottom: 1px solid var(--color-gray-light);
  scroll-margin-top: 100px;
}

.service-detail:last-child {
  border-bottom: none;
}

.service-content {
  align-items: flex-start;
  gap: 3rem;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-info h2 {
  font-size: 2.5rem;
  color: var(--color-dark);
  margin-bottom: 1rem;
}

.service-description {
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--color-gray);
  margin-bottom: 2rem;
}

.service-info h4 {
  font-size: 1.3rem;
  color: var(--color-dark);
  margin: 2rem 0 1rem;
}

.service-features,
.service-benefits {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.service-features li,
.service-benefits li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  color: var(--color-gray-dark);
  line-height: 1.6;
}

.service-features li::before,
.service-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

.service-action {
  margin-top: 2rem;
}

.service-visual {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.service-image-container {
  width: 100%;
  height: 300px;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
}

.service-image-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

.image-placeholder {
  width: 100%;
  height: 300px;
  background: var(--color-gray-light);
  border-radius: 12px;
  display: none;
  align-items: center;
  justify-content: center;
  color: var(--color-gray);
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  left: 0;
}

.bg-light {
  background-color: var(--color-gray-light);
}

.process-steps {
  margin-top: 2rem;
}

.step-item {
  text-align: center;
  position: relative;
}

.step-number {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  background-color: var(--color-primary);
  color: var(--color-dark);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
}

.step-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.step-item h4 {
  font-size: 1.3rem;
  color: var(--color-dark);
  margin-bottom: 1rem;
}

.step-item p {
  color: var(--color-gray);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .service-content {
    gap: 2rem;
  }
  
  .service-info h2 {
    font-size: 2rem;
  }
  
  .service-image-container,
  .image-placeholder {
    height: 200px;
  }
  
  .process-steps {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>