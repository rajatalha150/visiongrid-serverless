<template>
  <div class="contact-page">
    <div class="page-hero">
      <div class="container">
        <h1 class="page-title">Contact VisionGrid</h1>
        <p class="page-subtitle">Initiate a consultation for your enterprise infrastructure</p>
      </div>
    </div>
    
    <section class="section">
      <div class="container">
        <div class="contact-content grid grid-2">
          <div class="contact-info">
            <h2>Connect With Our Engineers</h2>
            <p class="contact-description">
              Ready to upgrade your operational security? Our certified specialists are available 
              to architect a solution tailored to your specific infrastructure requirements. 
              Request a technical consultation today.
            </p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon" v-html="icons.phone"></div>
                <div class="method-info">
                  <h4>Technical Support & Sales</h4>
                  <p><a href="tel:862-235-4618">(862) 235-4618</a></p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon" v-html="icons.email"></div>
                <div class="method-info">
                  <h4>General Inquiries</h4>
                  <p><a href="mailto:info@visiongrid.net">info@visiongrid.net</a></p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon" v-html="icons.clock"></div>
                <div class="method-info">
                  <h4>Operational Hours</h4>
                  <p>Mon - Fri: 08:00 - 18:00 EST<br>Weekend: By Appointment Only</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon" v-html="icons.zap"></div>
                <div class="method-info">
                  <h4>SLA Response Time</h4>
                  <p>Standard: < 24 Hours<br>Critical: Same Day Dispatch</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="contact-form-section">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
    
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Technical FAQ</h2>
        <div class="faq-grid grid grid-2">
          <div class="faq-item" v-for="faq in faqs" :key="faq.id">
            <h4>{{ faq.question }}</h4>
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue'

const icons = {
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
}

const faqs = [
  {
    id: 1,
    question: 'What is the typical deployment timeline?',
    answer: 'Standard commercial deployments are executed within 4-8 hours. Complex enterprise integration timelines are established during the initial site architecture review.'
  },
  {
    id: 2,
    question: 'Are hardware warranties included?',
    answer: 'Yes, we provide comprehensive enterprise-grade warranties on all hardware and installation labor, typically ranging from 2-5 years based on the component tier.'
  },
  {
    id: 3,
    question: 'Is remote fleet management supported?',
    answer: 'Absolutely. All our ecosystems are engineered with secure, encrypted remote access for real-time fleet monitoring and management via our dedicated mobile and web portals.'
  },
  {
    id: 4,
    question: 'Do you offer post-deployment support SLAs?',
    answer: 'We offer tiered support SLAs including 24/7 critical response and predictive maintenance packages to ensure 99.9% system uptime.'
  },
  {
    id: 5,
    question: 'Can you integrate with legacy infrastructure?',
    answer: 'Our engineering team specializes in hybrid environments, capable of retrofitting and integrating modern intelligent sensors with existing analog or IP-based legacy systems.'
  },
  {
    id: 6,
    question: 'What is your service territory?',
    answer: 'We provide comprehensive coverage for residential and commercial clients throughout the greater metropolitan region. Please contact our dispatch team for specific site eligibility.'
  }
]
</script>

<style scoped>
.contact-page {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr; /* Give form slightly more space (was 1fr 1fr or flex) */
  gap: 3rem; /* Reduce gap to fit both side-by-side */
  align-items: flex-start;
}

.contact-info {
  width: 100%;
  text-align: left; /* Reset text align */
  max-width: none;
  margin: 0;
}

.contact-info h2 {
  font-size: 2rem; /* Reduced from 2.5rem */
  color: var(--color-text);
  margin-bottom: 0.5rem; /* Reduced from 1rem */
}

.contact-description {
  font-size: 1rem; /* Reduced from 1.2rem */
  line-height: 1.5; /* Reduced from 1.7 */
  color: var(--color-gray);
  margin-bottom: 1.5rem; /* Reduced from 2rem */
}

.contact-methods {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  gap: 1.25rem; /* Reduced from 2rem */
  margin-top: 1rem; /* Reduced from 2rem */
}

.contact-method {
  flex: auto;
  display: flex; /* Changed from flex-direction: row + flex: auto */
  flex-direction: row;
  align-items: flex-start;
  text-align: left;
}

.method-icon {
  width: 32px; /* Fixed width for alignment */
  height: 32px; /* Fixed height */
  flex-shrink: 0; /* Prevent shrinking */
  margin-right: 1rem; /* Spacing */
  margin-top: 0.25rem; /* Slight top offset to align with line-height */
  color: var(--color-primary);
  display: flex;
  align-items: flex-start; /* Align to top */
  justify-content: center;
}

.method-icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.method-info h4 {
  font-size: 1.1rem; /* Reduced from 1.2rem */
  color: var(--color-text);
  margin-bottom: 0.25rem; /* Reduced from 0.5rem */
  font-weight: 700;
}

.method-info p {
  color: var(--color-gray);
  line-height: 1.4; /* Reduced from 1.5 */
  font-size: 0.95rem; /* Slightly smaller text */
  margin: 0;
}

.method-info a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.method-info a:hover {
  text-decoration: underline;
}

.contact-form-section {
  width: 100%;
  max-width: none;
  margin: 0;
  background: transparent;
  padding: 0;
  box-shadow: none;
}

.bg-light {
  background-color: var(--bg-primary); /* Changed for contrast */
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: var(--color-text);
  font-weight: 700;
}

.faq-grid {
  margin-top: 2rem;
  gap: 2rem;
}

.faq-item {
  background: #cbd5e1; /* Set to specific color as requested */
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

/* Explicitly target dark mode to ensure readability */
:root[class~="dark"] .faq-item {
  background: var(--bg-card);
}

.faq-item:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.faq-item h4 {
  color: var(--color-text);
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.faq-item p {
  color: var(--color-gray);
  line-height: 1.6;
}

@media (max-width: 992px) { /* Breakpoint for side-by-side layout */
  .contact-content {
    grid-template-columns: 1fr; /* Stack on smaller screens */
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .contact-content {
    gap: 2rem;
  }
  
  .contact-form-section {
    padding: 1.5rem;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>