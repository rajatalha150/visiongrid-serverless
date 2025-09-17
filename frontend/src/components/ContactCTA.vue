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
            <span class="feature-icon">📞</span>
            <span>Free Consultation</span>
          </div>
          <div class="cta-feature">
            <span class="feature-icon">💰</span>
            <span>Competitive Pricing</span>
          </div>
          <div class="cta-feature">
            <span class="feature-icon">⚡</span>
            <span>Quick Response</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.contact-cta {
  background: linear-gradient(135deg, var(--color-primary) 0%, #e6ac37 100%);
  color: var(--color-dark);
  text-align: center;
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
}

.cta-feature span:last-child {
  font-weight: 600;
  color: var(--color-dark);
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