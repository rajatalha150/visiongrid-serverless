<template>
  <div class="privacy-page">
    <div class="container">
      <div class="privacy-content">
        <div class="privacy-header">
          <h1 class="page-title">Privacy Policy</h1>
          <p class="last-updated">Last Updated: {{ lastUpdated }}</p>
        </div>

        <div class="privacy-body">
          <section class="privacy-section">
            <h2>Introduction</h2>
            <p>
              At VisionGrid, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or use our security camera 
              installation and networking services.
            </p>
          </section>

          <section class="privacy-section">
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <ul>
              <li>Name and contact information (email, phone number, address)</li>
              <li>Property details for service assessments</li>
              <li>Communication preferences</li>
              <li>Service history and maintenance records</li>
            </ul>
            
            <h3>Technical Information</h3>
            <ul>
              <li>Website usage data and analytics</li>
              <li>Device information and IP addresses</li>
              <li>System performance data for maintenance purposes</li>
            </ul>
          </section>

          <section class="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our security services</li>
              <li>Communicate about appointments, service updates, and support</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>Send promotional communications (with your consent)</li>
            </ul>
          </section>

          <section class="privacy-section">
            <h2>Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information. We may share information only in the following circumstances:</p>
            <ul>
              <li>With service providers who assist in our operations</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section class="privacy-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet or 
              electronic storage is 100% secure.
            </p>
          </section>

          <section class="privacy-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and review your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section class="privacy-section">
            <h2>Cookies and Tracking</h2>
            <p>
              Our website uses cookies and similar technologies to enhance your experience, analyze usage, 
              and provide personalized content. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section class="privacy-section">
            <h2>Third-Party Services</h2>
            <p>
              Our website may contain links to third-party services. We are not responsible for their privacy 
              practices. We encourage you to review their privacy policies before providing any information.
            </p>
          </section>

          <section class="privacy-section">
            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect personal 
              information from children under 13. If we discover such information, we will delete it promptly.
            </p>
          </section>

          <section class="privacy-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be posted on this page with an 
              updated "Last Updated" date. Continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section class="privacy-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div class="contact-info">
              <p><strong>VisionGrid</strong></p>
              <p>Email: privacy@visiongrid.net</p>
              <p>Phone: (862) 235-4618</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const lastUpdated = computed(() => {
  return new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
})
</script>

<style scoped>
.privacy-page {
  padding: 120px 0 60px;
  background: var(--color-background);
  min-height: 100vh;
}

.privacy-content {
  max-width: 800px;
  margin: 0 auto;
  background: var(--color-card);
  border-radius: var(--radius-lg);
  padding: 3rem;
  box-shadow: var(--shadow-card);
}

.privacy-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--color-border);
}

.page-title {
  font-size: 3rem;
  font-weight: var(--font-weight-black);
  color: var(--color-text);
  margin-bottom: 1rem;
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.last-updated {
  color: var(--color-text-muted);
  font-size: 1rem;
  font-style: italic;
}

.privacy-body {
  color: var(--color-text);
  line-height: 1.8;
}

.privacy-section {
  margin-bottom: 3rem;
}

.privacy-section:last-child {
  margin-bottom: 0;
}

.privacy-section h2 {
  font-size: 1.8rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border);
}

.privacy-section h3 {
  font-size: 1.4rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin: 2rem 0 1rem 0;
}

.privacy-section p {
  margin-bottom: 1rem;
  color: var(--color-text-secondary);
}

.privacy-section ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.privacy-section li {
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
}

.contact-info {
  background: var(--color-background);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  border-left: 4px solid var(--color-primary);
  margin-top: 1rem;
}

.contact-info p {
  margin-bottom: 0.5rem;
}

.contact-info p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .privacy-page {
    padding: 100px 1rem 60px;
  }
  
  .privacy-content {
    padding: 2rem;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .privacy-section h2 {
    font-size: 1.5rem;
  }
  
  .privacy-section h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .privacy-content {
    padding: 1.5rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style>