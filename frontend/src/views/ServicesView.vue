<template>
  <div class="services-page">
    <div class="page-hero">
      <div class="container">
        <h1 class="page-title">Our Services</h1>
        <p class="page-subtitle">Camera &amp; security, IT infrastructure, Pro AV, and custom app development — built and run by the team that ships EZ Solutions</p>
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
          <h2 class="section-title">How We Work</h2>
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

// Service icons (Feather-style line art, 48x48 to match the .service-icon CSS box)
const icons = {
  audio: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>`,
  server: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
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
    slug: 'camera-and-security',
    icon: icons.shield,
    title: 'Camera & Security',
    imageExt: 'jpg',
    description: 'End-to-end physical security — from a single home camera to multi-site commercial deployments. We design, install, and maintain the system; you get a single point of accountability.',
    features: [
      '4K IP camera systems with night vision and weatherproof housings',
      'NVR / hybrid recording with redundant cloud and edge storage',
      'Smart motion detection, license plate recognition, and behavioral analytics',
      'Centralized multi-site dashboard for residential and commercial properties',
      'Biometric and mobile access control, smart locks, and intercom integration',
      '24/7 monitoring partnerships and rapid emergency dispatch links',
      'Uninterruptible power supply and cellular failover for resilience'
    ],
    benefits: [
      'Single vendor for design, install, monitoring, and support',
      'Insurance compliance and premium discounts',
      'High-fidelity evidence retention for incidents',
      'Deterrence that pays for itself in reduced loss',
      'Remote visibility from anywhere on phone or desktop'
    ]
  },
  {
    id: 2,
    slug: 'it-infrastructure',
    icon: icons.server,
    title: 'IT Infrastructure',
    imageExt: 'jpg',
    description: 'The unglamorous backbone your business runs on — networks, servers, cloud, and endpoints. We build it right the first time, then keep it that way with managed support.',
    features: [
      'Structured cabling (Cat6 / Cat6A / fiber) with proper labeling and documentation',
      'Enterprise Wi-Fi 6/7 design with heat-mapped coverage and seamless roaming',
      'Server room build-out: racks, UPS, cooling, cable management, and labeling',
      'Network architecture: VLANs, firewalls, VPNs, and zero-trust segmentation',
      'Cloud and hybrid deployments: Microsoft 365, Google Workspace, Azure, AWS',
      'Endpoint management, patching, and asset inventory for every device',
      'Backup, disaster recovery, and business continuity planning'
    ],
    benefits: [
      'Fewer outages and faster recovery when something does fail',
      'Predictable monthly costs instead of surprise break-fix bills',
      'Built-in security baseline that satisfies customer and auditor requirements',
      'Scalable foundation that grows with the business',
      'A single accountable partner for everything network and server'
    ]
  },
  {
    id: 3,
    slug: 'audio-video-systems',
    icon: icons.audio,
    title: 'Pro AV Systems',
    imageExt: 'jpg',
    description: 'Conference rooms, training spaces, retail displays, and event venues — designed for clarity, reliability, and zero meeting-day friction.',
    features: [
      'High-fidelity acoustic arrays with room-specific calibration',
      'Zoom, Teams, and Google Meet room integration with one-touch join',
      'Wireless presentation systems (AirPlay, Miracast, HDMI over IP)',
      'Interactive displays, video walls, and digital signage',
      'Unified control: one tablet or panel for lights, shades, source switching',
      'Acoustic treatment and noise isolation for difficult rooms'
    ],
    benefits: [
      'Meetings that start on time and stay on track',
      'Cinema-grade audiovisuals for client-facing spaces',
      'Platform-agnostic — works with whatever your team already uses',
      'Dedicated technical support and remote diagnostics',
      'Spaces that impress clients and keep staff productive'
    ]
  },
  {
    id: 4,
    slug: 'app-development',
    icon: icons.code,
    title: 'App Development',
    imageExt: 'jpg',
    description: 'Custom software built by people who have actually shipped and run production systems. From internal tools that save hours every week, to full SaaS products — including the EZ Solutions suite.',
    features: [
      'Web applications: Vue, React, Next.js, with type-safe TypeScript end to end',
      'Cross-platform desktop apps: Electron and Tauri for Windows / macOS / Linux',
      'Serverless backends on Vercel, Cloudflare, and AWS Lambda',
      'Database design, migrations, and long-term schema evolution',
      'Authentication, billing, and subscription integrations (Stripe, etc.)',
      'AI integrations: LLM orchestration, vector search, and chat assistants',
      'Ongoing maintenance, monitoring, and incremental feature development'
    ],
    benefits: [
      'A working team that ships, not a slide deck',
      'Honest scope, honest timelines, honest pricing',
      'Code that your team (or another vendor) can actually read later',
      'Built-in security, observability, and the boring things that prevent fires',
      'We have done this for ourselves: ez.visiongrid.net is our own product'
    ]
  }
]

const process = [
  {
    id: 1,
    icon: icons.consult,
    title: 'Discover',
    description: 'We learn how you actually work — site walk, interviews, and a written scope so there are no surprises.'
  },
  {
    id: 2,
    icon: icons.design,
    title: 'Design',
    description: 'A clear plan with deliverables, timeline, and price. Hardware specs, drawings, or wireframes — whatever fits the job.'
  },
  {
    id: 3,
    icon: icons.install,
    title: 'Build & Deploy',
    description: 'Installation, configuration, code, or all three. Tested before we hand it back to you.'
  },
  {
    id: 4,
    icon: icons.support,
    title: 'Support',
    description: 'Ongoing monitoring, maintenance, and a real human to call when something needs attention.'
  }
]

import { useRoute } from 'vue-router'
import { useRouteSEO } from '@/composables/useSEO'

const route = useRoute()

useRouteSEO(route, () => ({
  title: 'Services — Camera & Security, IT Infrastructure, Pro AV, App Development',
  description: 'VisionGrid services: camera and physical security (residential and commercial), IT infrastructure (cabling, networking, servers, cloud, endpoints), professional AV systems, and custom app development (the same team ships EZ Solutions at ez.visiongrid.net). Free consultation, professional delivery, ongoing support.',
  keywords: 'VisionGrid, security camera installation, network infrastructure, structured cabling, server room build-out, managed IT, professional AV, conference room installation, custom app development, EZ Solutions',
  canonical: 'https://visiongrid.net/services',
  ogImage: 'https://visiongrid.net/logo.png',
  ogType: 'website'
}))

</script>

<style scoped>
.services-page {
  background-color: var(--bg-secondary);
}

.page-hero {
  background: var(--bg-secondary);
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
  background-color: var(--bg-primary); /* Changed for contrast */
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