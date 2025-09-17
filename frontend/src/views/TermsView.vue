<template>
  <div class="terms-page">
    <div class="container">
      <div class="terms-content">
        <div class="terms-header">
          <h1 class="page-title">Terms of Service</h1>
          <p class="last-updated">Last Updated: {{ lastUpdated }}</p>
        </div>

        <div class="terms-body">
          <section class="terms-section">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using VisionGrid's website and services, you accept and agree to be bound by 
              these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section class="terms-section">
            <h2>Services Description</h2>
            <p>
              VisionGrid provides professional security camera installation, networking solutions, and related 
              technical services for residential and commercial properties. Our services include:
            </p>
            <ul>
              <li>Security camera system design and installation</li>
              <li>Network infrastructure setup and optimization</li>
              <li>System maintenance and technical support</li>
              <li>24/7 monitoring and emergency response coordination</li>
              <li>Equipment sales and consultation</li>
            </ul>
          </section>

          <section class="terms-section">
            <h2>User Responsibilities</h2>
            <p>As a user of our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information during service requests</li>
              <li>Allow reasonable access to your property for installation and maintenance</li>
              <li>Use installed systems in accordance with manufacturer guidelines</li>
              <li>Maintain proper network security and access controls</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not interfere with system operation or attempt unauthorized modifications</li>
            </ul>
          </section>

          <section class="terms-section">
            <h2>Service Limitations</h2>
            <h3>System Performance</h3>
            <p>
              While we strive to provide reliable security systems, we cannot guarantee uninterrupted operation. 
              System performance may be affected by factors beyond our control, including internet connectivity, 
              power outages, and environmental conditions.
            </p>
            
            <h3>Monitoring Services</h3>
            <p>
              Our monitoring services are designed to enhance security but do not guarantee prevention of all 
              security incidents. Response times may vary based on circumstances and emergency service availability.
            </p>
          </section>

          <section class="terms-section">
            <h2>Payment Terms</h2>
            <ul>
              <li>Installation fees are due upon completion of work unless otherwise agreed</li>
              <li>Monthly service fees are billed in advance and due by the specified date</li>
              <li>Late payments may incur additional charges as specified in service agreements</li>
              <li>Disputed charges must be reported within 30 days of billing</li>
              <li>Services may be suspended for non-payment after proper notice</li>
            </ul>
          </section>

          <section class="terms-section">
            <h2>Equipment and Warranty</h2>
            <h3>Equipment Ownership</h3>
            <p>
              Equipment purchased becomes your property upon full payment. Leased or financed equipment 
              remains our property until all payments are completed.
            </p>
            
            <h3>Warranty Coverage</h3>
            <p>
              We provide warranty coverage as specified in individual service agreements. Warranty does not 
              cover damage from misuse, environmental factors, or unauthorized modifications.
            </p>
          </section>

          <section class="terms-section">
            <h2>Privacy and Data Protection</h2>
            <p>
              We are committed to protecting your privacy. Please review our Privacy Policy for detailed 
              information about how we collect, use, and protect your personal information and system data.
            </p>
          </section>

          <section class="terms-section">
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, VisionGrid shall not be liable for:
            </p>
            <ul>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages resulting from system failures during emergencies</li>
              <li>Third-party actions or equipment failures</li>
              <li>Acts of nature or circumstances beyond our reasonable control</li>
            </ul>
            <p>
              Our total liability is limited to the amount paid for services in the 12 months preceding any claim.
            </p>
          </section>

          <section class="terms-section">
            <h2>Service Termination</h2>
            <h3>By You</h3>
            <p>
              You may terminate services with 30 days written notice. Early termination may result in 
              cancellation fees as specified in your service agreement.
            </p>
            
            <h3>By Us</h3>
            <p>
              We may terminate services for non-payment, breach of terms, or other reasonable cause with 
              appropriate notice as required by law.
            </p>
          </section>

          <section class="terms-section">
            <h2>Intellectual Property</h2>
            <p>
              All website content, system configurations, and proprietary technologies remain our intellectual 
              property. You may not reproduce, distribute, or create derivative works without written permission.
            </p>
          </section>

          <section class="terms-section">
            <h2>Dispute Resolution</h2>
            <p>
              Any disputes will be resolved through binding arbitration in accordance with applicable arbitration 
              rules. You waive the right to participate in class action lawsuits against us.
            </p>
          </section>

          <section class="terms-section">
            <h2>Governing Law</h2>
            <p>
              These terms are governed by applicable federal and state laws. If any provision is found 
              unenforceable, the remaining terms will continue in full effect.
            </p>
          </section>

          <section class="terms-section">
            <h2>Changes to Terms</h2>
            <p>
              We may update these terms periodically. Continued use of our services after changes constitutes 
              acceptance of the updated terms. Material changes will be communicated with reasonable notice.
            </p>
          </section>

          <section class="terms-section">
            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us:
            </p>
            <div class="contact-info">
              <p><strong>VisionGrid</strong></p>
              <p>Email: legal@visiongrid.net</p>
              <p>Phone: (862) 235-4618</p>
              <p>Address: Available upon request for legal matters</p>
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
.terms-page {
  padding: 120px 0 60px;
  background: var(--color-background);
  min-height: 100vh;
}

.terms-content {
  max-width: 800px;
  margin: 0 auto;
  background: var(--color-card);
  border-radius: var(--radius-lg);
  padding: 3rem;
  box-shadow: var(--shadow-card);
}

.terms-header {
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

.terms-body {
  color: var(--color-text);
  line-height: 1.8;
}

.terms-section {
  margin-bottom: 3rem;
}

.terms-section:last-child {
  margin-bottom: 0;
}

.terms-section h2 {
  font-size: 1.8rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-border);
}

.terms-section h3 {
  font-size: 1.4rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  margin: 2rem 0 1rem 0;
}

.terms-section p {
  margin-bottom: 1rem;
  color: var(--color-text-secondary);
}

.terms-section ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.terms-section li {
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
  .terms-page {
    padding: 100px 1rem 60px;
  }
  
  .terms-content {
    padding: 2rem;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .terms-section h2 {
    font-size: 1.5rem;
  }
  
  .terms-section h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .terms-content {
    padding: 1.5rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style>