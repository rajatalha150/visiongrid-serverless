<template>
  <div class="contact-page">
    <div class="page-hero">
      <div class="container">
        <h1 class="page-title">Contact Us</h1>
        <p class="page-subtitle">Get in touch for a free consultation</p>
      </div>
    </div>
    
    <section class="section">
      <div class="container">
        <div class="contact-content grid grid-2">
          <div class="contact-info">
            <h2>Get In Touch</h2>
            <p class="contact-description">
              Ready to secure your property? Our team is here to help you find the 
              perfect security solution. Contact us today for a free consultation and quote.
            </p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">📞</div>
                <div class="method-info">
                  <h4>Phone</h4>
                  <p><a href="tel:862-235-4618">(862) 235-4618</a></p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">📧</div>
                <div class="method-info">
                  <h4>Email</h4>
                  <p><a href="mailto:info@visiongrid.net">info@visiongrid.net</a></p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">🕒</div>
                <div class="method-info">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8AM - 6PM<br>Weekend: By appointment</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">⚡</div>
                <div class="method-info">
                  <h4>Response Time</h4>
                  <p>Within 24 hours<br>Emergency: Same day</p>
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
        <h2 class="section-title">Frequently Asked Questions</h2>
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

const faqs = [
  {
    id: 1,
    question: 'How long does installation take?',
    answer: 'Most installations are completed within 4-8 hours depending on the system complexity and property size.'
  },
  {
    id: 2,
    question: 'Do you offer warranties?',
    answer: 'Yes, we provide comprehensive warranties on all equipment and installation work, typically 2-5 years depending on the product.'
  },
  {
    id: 3,
    question: 'Can I monitor my system remotely?',
    answer: 'Absolutely! All our systems include mobile app access for remote monitoring and control from anywhere.'
  },
  {
    id: 4,
    question: 'What if I need support after installation?',
    answer: 'We provide 24/7 technical support and maintenance services to ensure your system operates at peak performance.'
  },
  {
    id: 5,
    question: 'Do you work with existing systems?',
    answer: 'Yes, we can upgrade and integrate with many existing security systems to enhance their capabilities.'
  },
  {
    id: 6,
    question: 'What areas do you serve?',
    answer: 'We serve residential and commercial customers throughout the metropolitan area. Contact us to confirm service in your location.'
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

.contact-content {
  align-items: flex-start;
  gap: 4rem;
}

.contact-info h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin-bottom: 1rem;
}

.contact-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-gray);
  margin-bottom: 2rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-method {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.method-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.method-info h4 {
  font-size: 1.2rem;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
}

.method-info p {
  color: var(--color-gray);
  line-height: 1.5;
}

.method-info a {
  color: var(--color-primary);
  text-decoration: none;
}

.method-info a:hover {
  text-decoration: underline;
}

.contact-form-section {
  background: var(--color-white);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.bg-light {
  background-color: var(--color-gray-light);
}

.faq-grid {
  margin-top: 2rem;
  gap: 2rem;
}

.faq-item {
  background: var(--color-white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.faq-item h4 {
  color: var(--color-dark);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.faq-item p {
  color: var(--color-gray);
  line-height: 1.6;
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