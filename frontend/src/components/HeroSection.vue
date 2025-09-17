<template>
  <section class="hero">
    <div class="hero-bg">
      <div class="hero-particles">
        <div class="particle" v-for="n in 50" :key="n" :style="getParticleStyle()"></div>
      </div>
    </div>
    <div class="hero-gradient-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title animate-fade-in-up">
          Secure Your Space with 
          <span class="highlight gradient-text">VisionGrid</span>
        </h1>
        <p class="hero-subtitle animate-fade-in-up" style="animation-delay: 0.2s">
          Expert camera and networking solutions for homes and businesses. 
          Professional installations, ongoing support, and customized security systems.
        </p>
        <div class="hero-actions animate-fade-in-up" style="animation-delay: 0.4s">
          <RouterLink to="/contact" class="btn btn-primary btn-lg shadow-glow">
            <span>Get Started</span>
            <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </RouterLink>
          <RouterLink to="/services" class="btn btn-glass btn-lg">
            <span>Our Services</span>
          </RouterLink>
        </div>
        <div class="hero-features animate-fade-in-up" style="animation-delay: 0.6s">
          <div class="feature-item hover-float" v-for="(feature, index) in features" :key="feature.id" :style="`animation-delay: ${0.8 + index * 0.1}s`">
            <div class="feature-icon animate-pulse">{{ feature.icon }}</div>
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

const features = [
  { id: 3, icon: '📞', label: '24/7 Support' }
]

const getParticleStyle = () => ({
  left: Math.random() * 100 + '%',
  animationDelay: Math.random() * 3 + 's',
  animationDuration: (3 + Math.random() * 4) + 's'
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--gradient-hero);
  overflow: hidden;
  margin-top: 70px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.hero-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--color-primary);
  border-radius: 50%;
  opacity: 0.6;
  animation: floatUp 6s infinite ease-in-out;
}

@keyframes floatUp {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

.hero-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(33, 45, 69, 0.4) 100%);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  color: #e2e8f0;
}

.hero-title {
  font-size: 4rem;
  font-weight: var(--font-weight-black);
  line-height: 1.1;
  margin-bottom: 2rem;
  color: #cbd5e1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.highlight {
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
  border-radius: var(--radius-sm);
  animation: expandWidth 1s ease-out 0.5s both;
}

@keyframes expandWidth {
  from {
    width: 0;
    left: 50%;
  }
  to {
    width: 100%;
    left: 0;
  }
}

.hero-subtitle {
  font-size: 1.4rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  color: rgba(255, 255, 255, 0.95);
  font-weight: var(--font-weight-normal);
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
  width: 16px;
  height: 16px;
  margin-left: 8px;
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
  background: var(--glass-bg);
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
  transition: var(--transition-bounce);
}

.feature-item:hover {
  transform: translateY(-10px) scale(1.05);
  background: rgba(255, 255, 255, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0 4px 8px rgba(255, 192, 61, 0.3));
}

.feature-item span {
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);
  font-size: 1.1rem;
  letter-spacing: 0.5px;
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}

.scroll-arrow {
  width: 2px;
  height: 30px;
  background: var(--color-primary);
  position: relative;
  animation: scrollBounce 2s infinite;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: -6px;
  width: 14px;
  height: 14px;
  border-right: 2px solid var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
  transform: rotate(45deg);
}

@keyframes scrollBounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  40% {
    transform: translateY(-10px);
    opacity: 0.7;
  }
  60% {
    transform: translateY(-5px);
    opacity: 0.9;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 80vh;
    padding: 2rem 0;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  .hero-actions {
    gap: 1rem;
  }
  
  .hero-features {
    gap: 2rem;
  }
  
  .feature-icon {
    font-size: 2.5rem;
  }
  
  .feature-item {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-features {
    gap: 1.5rem;
    grid-template-columns: 1fr;
  }
}
</style>