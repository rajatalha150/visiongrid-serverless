<template>
  <div class="about-page">
    <div class="page-hero">
      <div class="container">
        <h1 class="page-title">About VisionGrid</h1>
        <p class="page-subtitle">Your trusted partner in security solutions</p>
      </div>
    </div>
    
    <section class="section">
      <div class="container">
        <div class="content-grid grid grid-2">
          <div class="content-text">
            <h2>Our Story</h2>
            <p>
              VisionGrid was founded with a simple mission: to revolutionize security solutions 
              by combining cutting-edge technology with exceptional customer service. We believe 
              that everyone deserves to feel safe and secure in their home or business.
            </p>
            <p>
              Since our inception, we have been dedicated to providing customized security 
              solutions that meet the unique needs of each client. Our team of certified 
              technicians brings years of experience and a passion for excellence to every project.
            </p>
            <p>
              We focus on customer satisfaction and service excellence, ensuring that every 
              installation meets our high standards and exceeds our clients' expectations.
            </p>
          </div>
          
          <div class="content-image">
            <div class="image-placeholder">
              <span>Professional Team Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Our Values</h2>
        <div class="values-grid grid grid-3">
          <div class="value-card card" v-for="value in values" :key="value.id">
            <div class="value-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <h2 class="section-title">Why Choose Us</h2>
        <div class="benefits-grid grid grid-2">
          <div class="benefit-item" v-for="benefit in benefits" :key="benefit.id">
            <div class="benefit-icon">{{ benefit.icon }}</div>
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
const values = [
  {
    id: 1,
    icon: '🎯',
    title: 'Excellence',
    description: 'We strive for perfection in every installation and service we provide.'
  },
  {
    id: 2,
    icon: '🤝',
    title: 'Trust',
    description: 'Building lasting relationships through honest, reliable service.'
  },
  {
    id: 3,
    icon: '💡',
    title: 'Innovation',
    description: 'Staying ahead with the latest security technology and solutions.'
  }
]

const benefits = [
  {
    id: 1,
    icon: '🏆',
    title: 'Certified Technicians',
    description: 'Our team holds industry certifications and receives ongoing training.'
  },
  {
    id: 2,
    icon: '⚡',
    title: 'Quick Installation',
    description: 'Efficient installation process with minimal disruption to your routine.'
  },
  {
    id: 3,
    icon: '📱',
    title: 'Modern Technology',
    description: 'Latest security cameras and networking equipment for optimal performance.'
  },
  {
    id: 4,
    icon: '💬',
    title: 'Customer Support',
    description: '24/7 support available to help with any questions or issues.'
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

.content-grid {
  align-items: center;
  gap: 3rem;
}

.content-text h2 {
  font-size: 2rem;
  color: var(--color-dark);
  margin-bottom: 1.5rem;
}

.content-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-gray);
  margin-bottom: 1.5rem;
}

.content-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  height: 300px;
  background: var(--color-gray-light);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray);
  font-size: 1.2rem;
}

.bg-light {
  background-color: var(--color-gray-light);
}

.values-grid {
  margin-top: 2rem;
}

.value-card {
  text-align: center;
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  font-size: 1.5rem;
  color: var(--color-dark);
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
  gap: 1rem;
  align-items: flex-start;
}

.benefit-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.benefit-content h4 {
  font-size: 1.3rem;
  color: var(--color-dark);
  margin-bottom: 0.5rem;
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
    height: 200px;
  }
  
  .benefit-item {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
}
</style>