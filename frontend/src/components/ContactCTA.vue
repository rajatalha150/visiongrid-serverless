<template>
  <section class="contact-cta section">
    <div class="container">
      <div class="cta-content">
        <h2 class="cta-title">Ready to Secure Your Space?</h2>
        <p class="cta-subtitle">
          Get a free consultation and quote for your security needs. 
          Our experts are ready to help you find the perfect solution.
        </p>
        
        <div class="cta-actions">
          <RouterLink to="/contact" class="btn btn-primary btn-lg">Get Free Quote</RouterLink>
          <a href="tel:862-235-4618" class="btn btn-secondary btn-lg">Call Now</a>
        </div>
        
        <div class="cta-features">
          <div class="cta-feature">
            <span class="feature-icon" v-html="icons.phone"></span>
            <span>Free Consultation</span>
          </div>
          <div class="cta-feature">
            <span class="feature-icon" v-html="icons.price"></span>
            <span>Competitive Pricing</span>
          </div>
          <div class="cta-feature">
            <span class="feature-icon" v-html="icons.response"></span>
            <span>Quick Response</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const icons = {
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  price: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
  response: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
}
</script>

<style scoped>
.contact-cta {
  background: var(--bg-tertiary); /* Use theme tertiary background */
  color: var(--color-text);
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* Optional: Add a subtle overlay or pattern if desired, but keep it clean */
.contact-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);
  pointer-events: none;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-dark);
}

.cta-subtitle {
  font-size: 1.3rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  color: rgba(33, 45, 69, 0.8);
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn-lg {
  padding: 15px 40px;
  font-size: 1.1rem;
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-dark);
  border: 2px solid var(--color-dark);
}

.btn-secondary:hover {
  background-color: var(--color-dark);
  color: var(--color-white);
}

.cta-features {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.cta-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary); /* Ensure SVG icons use primary color */
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-feature span:last-child {
  font-weight: 600;
  color: var(--color-text); /* Theme aware */
}

@media (max-width: 768px) {
  .cta-title {
    font-size: 2.2rem;
  }
  
  .cta-subtitle {
    font-size: 1.1rem;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-features {
    gap: 2rem;
  }
  
  .feature-icon {
    font-size: 1.5rem;
  }
}
</style>