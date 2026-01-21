<template>
  <section class="hero">
    <div class="hero-bg">
      <div class="hero-network-grid"></div>
    </div>
    <div class="hero-gradient-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title animate-fade-in-up">
          Enterprise-Grade 
          <span class="highlight">Network & Security Infrastructure</span>
        </h1>
        <p class="hero-subtitle animate-fade-in-up" style="animation-delay: 0.2s">
          Complete office IT solutions, structured cabling, and advanced security systems designed for reliability and scalability.
        </p>
        <div class="hero-actions animate-fade-in-up" style="animation-delay: 0.4s">
          <RouterLink to="/contact" class="btn btn-primary btn-lg shadow-glow">
            <span>Request Consultation</span>
            <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </RouterLink>
          <RouterLink to="/services" class="btn btn-glass btn-lg">
            <span>Explore Solutions</span>
          </RouterLink>
        </div>
        <div class="hero-features animate-fade-in-up" style="animation-delay: 0.6s">
          <div class="feature-item hover-float" v-for="(feature, index) in features" :key="feature.id" :style="`animation-delay: ${0.8 + index * 0.1}s`">
            <div class="feature-icon" v-html="feature.icon"></div>
            <span>{{ feature.label }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-scroll-indicator">
      <div class="scroll-arrow"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

// SVG Icons for professional look
const icons = {
  server: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  network: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="6" height="6" rx="1" ry="1"></rect><rect x="9" y="16" width="6" height="6" rx="1" ry="1"></rect><rect x="16" y="2" width="6" height="6" rx="1" ry="1"></rect><line x1="5" y1="8" x2="5" y2="12"></line><line x1="12" y1="12" x2="12" y2="16"></line><line x1="19" y1="8" x2="19" y2="12"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`
}

const features = [
  { id: 1, icon: icons.network, label: 'Infrastructure' },
  { id: 2, icon: icons.shield, label: 'Security' },
  { id: 3, icon: icons.server, label: 'Support 24/7' }
]
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  background: var(--gradient-hero);
  overflow: hidden;
  margin-top: 70px;
  padding: 4rem 0;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: var(--bg-primary);
}

.hero-network-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at center, #ffffff 0%, transparent 70%); /* White glow for silver theme */
  opacity: 0.5;
  mix-blend-mode: overlay; /* Overlay works great for metallic effect */
  background-size: cover;
}

.hero-gradient-overlay {
  display: none; /* Removed to allow soft yellow glow to show */
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  color: var(--color-white);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #0f172a; /* Explicit very dark slate for title */
  letter-spacing: -0.02em;
}

.highlight {
  position: relative;
  display: inline-block;
  color: #1e3a8a; /* Deep blue for high contrast against silver */
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--color-primary);
  border-radius: var(--radius-sm);
  opacity: 0.8;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #334155; /* Dark slate gray for subtitle */
  font-weight: var(--font-weight-medium); /* Increased weight for readability */
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.btn-icon {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  transition: var(--transition);
}

.btn:hover .btn-icon {
  transform: translateX(4px);
}

.hero-features {
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  background: #f8fafc; /* Pure white/lightest gray card background */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid #cbd5e1; /* Distinct border */
  transition: var(--transition);
  min-width: 160px; 
}

.feature-item:hover {
  transform: translateY(-5px);
  background: #ffffff;
  border-color: var(--color-primary);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  color: var(--color-primary); 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #e2e8f0; /* Light gray circle bg */
  border-radius: 50%;
}

.feature-item span {
  font-weight: var(--font-weight-bold); /* Bold text */
  color: #1e293b; /* Dark Slate */
  font-size: 1.05rem; 
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: 6rem 0 4rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .hero-features {
    gap: 1rem;
  }
  
  .feature-item {
    min-width: 100px;
    padding: 1rem;
  }
}
</style>
