<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-brand">
            <span class="brand-text">VisionGrid</span>
            <p class="footer-tagline">Secure Your Space with Expert Solutions</p>
          </div>
          <p class="footer-description">
            Professional camera installation and networking solutions for homes and businesses.
            Your security is our priority.
          </p>
        </div>
        
        <div class="footer-section">
          <h4>Services</h4>
          <ul class="footer-links">
            <li><RouterLink to="/services#camera-installation">Camera Installation</RouterLink></li>
            <li><RouterLink to="/services#networking-solutions">Networking Solutions</RouterLink></li>
            <li><RouterLink to="/services#home-security">Home Security</RouterLink></li>
            <li><RouterLink to="/services#business-security">Business Security</RouterLink></li>
            <li><RouterLink to="/services#audio-video-systems">Audio & Video Systems</RouterLink></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Company</h4>
          <ul class="footer-links">
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><RouterLink to="/services">Our Services</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
            <li><RouterLink to="/careers">Careers</RouterLink></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Get in Touch</h4>
          <div class="contact-info">
            <p><strong>Phone:</strong> (862) 235-4618</p>
            <p><strong>Email:</strong> info@visiongrid.net</p>
            <p><strong>Hours:</strong> Mon-Fri 8AM-6PM</p>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} VisionGrid. All rights reserved.</p>
        <div class="footer-legal">
          <RouterLink to="/privacy">Privacy Policy</RouterLink>
          <RouterLink to="/terms">Terms of Service</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  padding: 3rem 0 1rem;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  color: var(--color-primary);
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.footer-brand .brand-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
}

.footer-tagline {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0.5rem 0 1rem;
}

.footer-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--color-gray-dark); /* Readable links */
  text-decoration: none;
  transition: var(--transition);
  font-weight: 500;
}

.footer-links a:hover {
  color: var(--color-primary);
}

.contact-info p {
  color: var(--color-gray-dark);
  margin-bottom: 0.5rem;
}

.contact-info strong {
  color: var(--color-text);
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-legal {
  display: flex;
  gap: 1rem;
}

.footer-legal a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: var(--transition);
}

.footer-legal a:hover {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>