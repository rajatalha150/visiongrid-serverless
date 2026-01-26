<template>
  <div class="about-page">
    <div class="page-hero">
      <div class="container">
        <h1 class="page-title">About VisionGrid</h1>
        <p class="page-subtitle">Pioneering Intelligent Security & Infrastructure Solutions</p>
      </div>
    </div>
    
    <section class="section">
      <div class="container">
        <div class="content-grid grid grid-2">
          <div class="content-text">
            <h2>Our Mission</h2>
            <p>
              At VisionGrid, we are dedicated to revolutionizing the security landscape through innovative technology. 
              Our mission is to protect what matters most by deploying predictive, intelligent, and automated solutions 
              that go beyond traditional surveillance.
            </p>
            <p>
              We bridge the gap between physical security and digital intelligence, offering enterprise-grade 
              infrastructure that adapts to modern threats. From smart camera ecosystems to self-healing networks, 
              we build the foundation for a safer, smarter future.
            </p>
            <p>
              Our commitment extends beyond installation; we partner with our clients to ensure their systems 
              evolve with their needs, delivering unmatched reliability and peace of mind.
            </p>
          </div>
          
          <div class="content-image">
            <div class="image-placeholder">
              <div class="placeholder-content">
                <div class="placeholder-icon" v-html="icons.building"></div>
                <span>VisionGrid Headquarters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Core Values</h2>
        <div class="values-grid grid grid-3">
          <div class="value-card card" v-for="value in values" :key="value.id">
            <div class="value-icon" v-html="value.icon"></div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <h2 class="section-title">Why Partner With Us</h2>
        <div class="benefits-grid grid grid-2">
          <div class="benefit-item" v-for="benefit in benefits" :key="benefit.id">
            <div class="benefit-icon" v-html="benefit.icon"></div>
            <div class="benefit-content">
              <h4>{{ benefit.title }}</h4>
              <p>{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const icons = {
  building: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="22.01"></line><line x1="15" y1="22" x2="15" y2="22.01"></line><line x1="12" y1="22" x2="12" y2="22.01"></line><rect x="9" y="8" width="2" height="2"></rect><rect x="9" y="12" width="2" height="2"></rect><rect x="9" y="16" width="2" height="2"></rect><rect x="13" y="8" width="2" height="2"></rect><rect x="13" y="12" width="2" height="2"></rect><rect x="13" y="16" width="2" height="2"></rect></svg>`,
  innovation: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  cert: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
  headset: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>`
}

const values = [
  {
    id: 1,
    icon: icons.innovation,
    title: 'Innovation First',
    description: 'Pioneering the future of security with intelligent analytics and smart integration.'
  },
  {
    id: 2,
    icon: icons.shield,
    title: 'Unwavering Integrity',
    description: 'Building trust through transparent solutions and a commitment to absolute safety.'
  },
  {
    id: 3,
    icon: icons.users,
    title: 'Client-Centric',
    description: 'Designing bespoke systems that perfectly align with your unique operational needs.'
  }
]

const benefits = [
  {
    id: 1,
    icon: icons.cert,
    title: 'Elite Certified Engineers',
    description: 'Our team comprises industry-vetted experts with top-tier certifications in security and networking.'
  },
  {
    id: 2,
    icon: icons.zap,
    title: 'Rapid Deployment',
    description: 'Streamlined installation protocols ensure your system is active with minimal operational disruption.'
  },
  {
    id: 3,
    icon: icons.cpu,
    title: 'Next-Gen Technology',
    description: 'Deploying advanced neural processing hardware for real-time threat detection and analytics.'
  },
  {
    id: 4,
    icon: icons.headset,
    title: '24/7 Critical Support',
    description: 'Round-the-clock technical assistance and predictive maintenance to keep your systems online.'
  }
]
</script>

<style scoped>
.about-page {
  background-color: var(--bg-secondary);
}

.page-hero {
  background: var(--bg-secondary); /* Changed from gradient-hero to match Services */
  color: var(--color-white);
  padding: 120px 0 80px;
  text-align: center;
  margin-top: 70px;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text); /* Use theme text color instead of hardcoded #0f172a */
}

.page-subtitle {
  font-size: 1.3rem;
  color: var(--color-gray-dark); /* Use theme gray instead of hardcoded #334155 */
  font-weight: 500;
}

.content-grid {
  align-items: center;
  gap: 4rem;
}

.content-text h2 {
  font-size: 2.2rem;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.content-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-gray);
  margin-bottom: 1.5rem;
}

.content-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  height: 400px;
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg);
}

.placeholder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: var(--color-primary);
}

.placeholder-content span {
  color: var(--color-text);
  font-weight: 600;
}

.bg-light {
  background-color: var(--bg-primary); /* Changed to create slight contrast against page background */
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: var(--color-text);
  font-weight: 700;
}

.values-grid {
  margin-top: 2rem;
}

.value-card {
  text-align: center;
  padding: 2rem;
  background: #cbd5e1; /* Set to specific color as requested */
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

/* Explicitly target dark mode to ensure readability */
:root[class~="dark"] .value-card {
  background: var(--bg-card);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.value-icon {
  margin-bottom: 1.5rem;
  color: var(--color-primary);
  display: inline-flex;
  padding: 1rem;
  background: var(--bg-secondary);
  border-radius: 50%;
}

.value-card h3 {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.value-card p {
  color: var(--color-gray);
  line-height: 1.6;
}

.benefits-grid {
  margin-top: 2rem;
  gap: 2rem;
}

.benefit-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 1.5rem;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.benefit-item:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.benefit-icon {
  flex-shrink: 0;
  color: var(--color-primary);
  background: var(--bg-secondary);
  padding: 0.75rem;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-content h4 {
  font-size: 1.2rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.benefit-content p {
  color: var(--color-gray);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .content-grid {
    gap: 2rem;
  }
  
  .image-placeholder {
    height: 250px;
  }
  
  .benefit-item {
    flex-direction: column;
    text-align: left;
    gap: 1rem;
  }
}
</style>