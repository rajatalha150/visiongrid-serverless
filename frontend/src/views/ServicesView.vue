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
                <div class="service-icon" v-html="service.icon"></div>
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
                    <div class="placeholder-icon" v-html="service.icon"></div>
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
              <div class="step-icon" v-html="step.icon"></div>
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

const icons = {
  camera: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>`,
  network: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="6" height="6" rx="1" ry="1"></rect><rect x="9" y="16" width="6" height="6" rx="1" ry="1"></rect><rect x="16" y="2" width="6" height="6" rx="1" ry="1"></rect><line x1="5" y1="8" x2="5" y2="12"></line><line x1="12" y1="12" x2="12" y2="16"></line><line x1="19" y1="8" x2="19" y2="12"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
  business: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
  audio: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
  consult: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
  design: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  install: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
  support: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
}

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
    icon: icons.camera,
    title: 'Smart Camera Systems',
    description: 'Next-generation surveillance infrastructure with intelligent threat detection and automated response capabilities.',
    features: [
      'Indoor and outdoor smart sensors',
      '4K resolution with enhanced night vision',
      'Advanced motion tracking & analysis',
      'Secure remote access via mobile',
      'Redundant cloud & edge storage'
    ],
    benefits: [
      '24/7 autonomous monitoring',
      'Proactive threat deterrence',
      'High-fidelity evidence retention',
      'Insurance compliance & discounts',
      'Complete operational visibility'
    ]
  },
  {
    id: 2,
    slug: 'networking-solutions',
    icon: icons.network,
    title: 'Network Infrastructure',
    description: 'Enterprise-grade network architecture designed for zero-latency connectivity and maximum security throughput.',
    features: [
      'Strategic topology planning',
      'High-density Wi-Fi 6/7 deployment',
      'Structured cabling & management',
      'Advanced firewall & threat protection',
      'Real-time network health monitoring'
    ],
    benefits: [
      'Gigabit-speed reliability',
      'Seamless mesh connectivity',
      'Hardened security perimeter',
      'Scalable bandwidth capacity',
      'Zero-downtime architecture'
    ]
  },
  {
    id: 3,
    slug: 'home-security',
    icon: icons.home,
    title: 'Residential Protection',
    description: 'Integrated home defense ecosystems that blend advanced security protocols with smart home automation.',
    features: [
      'Smart perimeter breach detection',
      'Automated home integration',
      'Biometric & mobile access control',
      'Professional monitoring links',
      'Uninterruptible power supply'
    ],
    benefits: [
      'Comprehensive family safety',
      'Reduced insurance premiums',
      'Property value enhancement',
      'Remote estate management',
      'Rapid emergency dispatch'
    ]
  },
  {
    id: 4,
    slug: 'business-security',
    imageExt: 'png',
    icon: icons.business,
    title: 'Enterprise Security',
    description: 'Commercial security solutions engineered for regulatory compliance and multi-site asset protection.',
    features: [
      'Centralized multi-site command',
      'Role-based access control',
      'Predictive behavioral analytics',
      'Legacy system integration',
      'Automated compliance reporting'
    ],
    benefits: [
      'Asset & inventory protection',
      'Personnel safety assurance',
      'Regulatory audit readiness',
      'Operational intelligence data',
      'Loss prevention optimization'
    ]
  },
  {
    id: 5,
    slug: 'audio-video-systems',
    icon: icons.audio,
    title: 'Pro AV Systems',
    description: 'Professional audio-visual environments designed for immersive clarity and seamless communication.',
    features: [
      'High-fidelity acoustic arrays',
      'Smart conference automation',
      'Interactive display solutions',
      'Acoustic calibration & tuning',
      'Unified control interfaces'
    ],
    benefits: [
      'Cinema-grade audiovisuals',
      'Frictionless meeting experiences',
      'Impactful presentation tools',
      'Platform-agnostic integration',
      'Dedicated technical support'
    ]
  }
]

const process = [
  {
    id: 1,
    icon: icons.consult,
    title: 'Consultation',
    description: 'Comprehensive assessment of your security requirements and site architecture.'
  },
  {
    id: 2,
    icon: icons.design,
    title: 'System Design',
    description: 'Custom engineering of your security ecosystem with detailed coverage mapping.'
  },
  {
    id: 3,
    icon: icons.install,
    title: 'Deployment',
    description: 'Precision installation by expert engineers with rigorous testing protocols.'
  },
  {
    id: 4,
    icon: icons.support,
    title: 'Support',
    description: 'Continuous system optimization and 24/7 technical assistance.'
  }
]
</script>

<style scoped>
.page-hero {
  background: var(--gradient-hero);
  color: var(--color-white);
  padding: 120px 0 80px;
  text-align: center;
  margin-top: 70px;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.page-subtitle {
  font-size: 1.3rem;
  color: var(--color-gray-dark);
  font-weight: 500;
}

.service-detail {
  margin-bottom: 4rem;
  padding-bottom: 4rem;
  padding-top: 2rem;
  border-bottom: 1px solid var(--border-color);
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
  margin-bottom: 1rem;
  color: var(--color-primary);
  width: 64px;
  height: 64px;
}

.service-info h2 {
  font-size: 2.5rem;
  color: var(--color-text);
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
  color: var(--color-text);
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
  color: var(--color-gray);
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
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  border: 1px solid var(--border-color);
}

.service-image-container:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-placeholder {
  width: 100%;
  height: 300px;
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  display: none;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  position: absolute;
  top: 0;
  left: 0;
}

.placeholder-icon {
  width: 64px;
  height: 64px;
  color: var(--color-primary);
}

.bg-light {
  background-color: var(--bg-secondary);
}

.process-steps {
  margin-top: 2rem;
}

.step-item {
  text-align: center;
  position: relative;
  padding: 2rem;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.step-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.step-number {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 40px;
  height: 40px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: var(--shadow-sm);
  z-index: 2;
}

.step-icon {
  margin-bottom: 1.5rem;
  color: var(--color-primary);
  height: 48px;
  width: 48px;
  margin-left: auto;
  margin-right: auto;
}

.step-item h4 {
  font-size: 1.3rem;
  color: var(--color-text);
  margin-bottom: 1rem;
  font-weight: 600;
}

.step-item p {
  color: var(--color-gray);
  line-height: 1.6;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: var(--color-text);
  font-weight: 700;
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