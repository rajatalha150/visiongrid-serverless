<template>
  <form @submit.prevent="submitForm" class="contact-form glass-effect">
    <div class="form-header">
      <h3 class="form-title gradient-text">Send us a message</h3>
      <p class="form-subtitle">We'll get back to you within 24 hours</p>
    </div>
    
    <div class="form-row">
      <div class="form-group">
        <label for="name" class="form-label">
          <span class="label-text">Full Name</span>
          <span class="required-indicator">*</span>
        </label>
        <div class="input-wrapper">
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            placeholder="Full name"
            class="form-input"
            :class="{ 'error': errors.name }"
            @blur="validateField('name')"
            @input="clearError('name')"
          />
          <div class="input-icon">👤</div>
        </div>
        <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
      </div>
      
      <div class="form-group">
        <label for="email" class="form-label">
          <span class="label-text">Email Address</span>
          <span class="required-indicator">*</span>
        </label>
        <div class="input-wrapper">
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="Email address"
            class="form-input"
            :class="{ 'error': errors.email }"
            @blur="validateField('email')"
            @input="clearError('email')"
          />
          <div class="input-icon">📧</div>
        </div>
        <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
      </div>
    </div>
    
    <div class="form-row three-col">
      <div class="form-group">
        <label for="phone" class="form-label">
          <span class="label-text">Phone</span>
        </label>
        <div class="input-wrapper">
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            placeholder="Phone number"
            class="form-input"
          />
          <div class="input-icon">📞</div>
        </div>
      </div>
      
      <div class="form-group">
        <label for="company" class="form-label">
          <span class="label-text">Company</span>
        </label>
        <div class="input-wrapper">
          <input
            id="company"
            v-model="form.company"
            type="text"
            placeholder="Company name"
            class="form-input"
          />
          <div class="input-icon">🏢</div>
        </div>
      </div>

      <div class="form-group">
        <label for="service" class="form-label">
          <span class="label-text">Service</span>
        </label>
        <div class="select-wrapper">
          <select id="service" v-model="form.service" class="form-select">
            <option value="">Select service</option>
            <option value="camera-installation">Camera Install</option>
            <option value="networking-solutions">Networking</option>
            <option value="home-security">Home Security</option>
            <option value="business-security">Biz Security</option>
            <option value="consultation">Consultation</option>
            <option value="other">Other</option>
          </select>
          <div class="select-arrow">▼</div>
        </div>
      </div>
    </div>
    
    <div class="form-group">
      <label for="message" class="form-label">
        <span class="label-text">Message</span>
        <span class="required-indicator">*</span>
      </label>
      <div class="textarea-wrapper">
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          required
          placeholder="Tell us about your security needs and how we can help..."
          class="form-textarea"
          :class="{ 'error': errors.message }"
          @blur="validateField('message')"
          @input="clearError('message')"
        ></textarea>
        <div class="textarea-counter">{{ form.message.length }}/500</div>
      </div>
      <div v-if="errors.message" class="error-message">{{ errors.message }}</div>
    </div>
    
    <div class="form-actions">
      <button type="submit" class="btn btn-primary btn-lg loading-shimmer" :disabled="isSubmitting">
        <span v-if="isSubmitting" class="btn-loading">
          <span class="loading-spinner"></span>
          Sending...
        </span>
        <span v-else class="btn-content">
          <span>Send Message</span>
          <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </span>
      </button>
    </div>
    
    <div v-if="submitMessage" class="submit-message animate-fade-in-scale" :class="submitStatus">
      <div class="message-icon">{{ submitStatus === 'success' ? '✅' : '❌' }}</div>
      <div class="message-text">{{ submitMessage }}</div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { getApiUrl, logApiUrl, testApiConnection } from '@/utils/api'

// Log API URL for debugging
logApiUrl()

// Test API connection on component mount
onMounted(async () => {
  await testApiConnection()
})

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')

const validateField = (fieldName: string) => {
  switch (fieldName) {
    case 'name':
      errors.name = form.name.length < 2 ? 'Name must be at least 2 characters' : ''
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      errors.email = !emailRegex.test(form.email) ? 'Please enter a valid email address' : ''
      break
    case 'message':
      errors.message = form.message.length < 10 ? 'Message must be at least 10 characters' : 
                     form.message.length > 500 ? 'Message must be less than 500 characters' : ''
      break
  }
}

const clearError = (fieldName: string) => {
  if (errors[fieldName as keyof typeof errors]) {
    errors[fieldName as keyof typeof errors] = ''
  }
}

const validateForm = () => {
  validateField('name')
  validateField('email')
  validateField('message')
  
  return !errors.name && !errors.email && !errors.message
}

const submitForm = async () => {
  if (!validateForm()) {
    submitMessage.value = 'Please fix the errors above before submitting.'
    submitStatus.value = 'error'
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    const apiUrl = getApiUrl()
    console.log(`[ContactForm] Submitting to: ${apiUrl}/contact`)
    
    const response = await fetch(`${apiUrl}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    
    if (response.ok) {
      submitMessage.value = 'Thank you for your message! We\'ll get back to you within 24 hours.'
      submitStatus.value = 'success'
      
      // Reset form
      Object.keys(form).forEach(key => {
        form[key as keyof typeof form] = ''
      })
      
      // Clear errors
      Object.keys(errors).forEach(key => {
        errors[key as keyof typeof errors] = ''
      })
    } else {
      const errorText = await response.text()
      console.error(`[ContactForm] HTTP Error: ${response.status} - ${errorText}`)
      throw new Error(`Server responded with ${response.status}: ${response.statusText}`)
    }
  } catch (error) {
    console.error('[ContactForm] Submission error:', error)
    
    // Fallback for local development
    console.log('[ContactForm] Using local development fallback')
    console.log('[ContactForm] Form data:', form)
    
    // Save to localStorage for local testing
    const existingInquiries = JSON.parse(localStorage.getItem('localInquiries') || '[]')
    const newInquiry = {
      id: Date.now(),
      ...form,
      created_at: new Date().toISOString(),
      status: 'new'
    }
    existingInquiries.push(newInquiry)
    localStorage.setItem('localInquiries', JSON.stringify(existingInquiries))
    
    submitMessage.value = 'LOCAL DEV: Form submitted successfully! Check admin panel to see your submission.'
    submitStatus.value = 'success'
    
    // Reset form in development mode too
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = ''
    })
    
    Object.keys(errors).forEach(key => {
      errors[key as keyof typeof errors] = ''
    })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-form {
  max-width: 100%; /* Changed from 700px to 100% to fill container */
  width: 100%;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-xl); 
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
}

.form-header {
  text-align: center;
  margin-bottom: 1.5rem; /* Reduced from var(--spacing-3xl) */
}

.form-title {
  font-size: 2rem; /* Reduced from 2.5rem */
  font-weight: var(--font-weight-black);
  margin-bottom: 0.5rem;
}

.form-subtitle {
  color: var(--color-gray);
  font-size: 1rem; /* Reduced from 1.1rem */
  font-weight: var(--font-weight-medium);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem; /* Reduced from var(--spacing-lg) */
  margin-bottom: 1rem; /* Reduced from var(--spacing-xl) */
}

.form-row.three-col {
  grid-template-columns: 1fr 1fr 1fr;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem; /* Reduced from var(--spacing-xl) */
}

.form-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-dark);
  margin-bottom: 0.25rem; /* Reduced from var(--spacing-sm) */
  font-size: 0.9rem; /* Slightly smaller */
}

.label-text {
  color: var(--color-dark);
}

.required-indicator {
  color: #e74c3c;
  font-weight: var(--font-weight-bold);
}

.optional-indicator {
  color: var(--color-gray);
  font-size: 0.85rem;
  font-weight: var(--font-weight-normal);
}

.input-wrapper,
.select-wrapper,
.textarea-wrapper {
  position: relative;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 10px 40px 10px 12px; /* Reduced padding */
  border: 2px solid #e9ecef;
  border-radius: var(--radius-lg);
  font-size: 0.95rem; /* Slightly smaller font */
  font-family: inherit;
  transition: var(--transition-bounce);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px rgba(255, 192, 61, 0.1);
  transform: translateY(-2px);
}

.form-input.error,
.form-textarea.error {
  border-color: #e74c3c;
  box-shadow: 0 0 0 4px rgba(231, 76, 60, 0.1);
}

.input-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  pointer-events: none;
  opacity: 0.6;
}

.select-wrapper {
  position: relative;
}

.form-select {
  appearance: none;
  cursor: pointer;
  padding-right: 48px;
}

.select-arrow {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--color-gray);
  font-size: 0.8rem;
  transition: var(--transition);
}

.select-wrapper:hover .select-arrow {
  color: var(--color-primary);
}

.form-textarea {
  resize: vertical;
  min-height: 100px; /* Reduced from 140px */
  padding-bottom: 30px;
}

.textarea-counter {
  position: absolute;
  bottom: 8px;
  right: 12px;
  font-size: 0.75rem;
  color: var(--color-gray);
  pointer-events: none;
}

.error-message {
  margin-top: 0.25rem;
  font-size: 0.8rem;
  color: #e74c3c;
  font-weight: var(--font-weight-medium);
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.error-message::before {
  content: '⚠️';
  font-size: 0.8rem;
}

.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem; /* Reduced from var(--spacing-3xl) */
}

.btn-loading {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.btn-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.btn-icon {
  width: 18px;
  height: 18px;
  transition: var(--transition);
}

.btn:hover .btn-icon {
  transform: translateX(4px);
}

.submit-message {
  margin-top: var(--spacing-xl);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-weight: var(--font-weight-semibold);
  border: 2px solid;
}

.submit-message.success {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  color: #155724;
  border-color: #28a745;
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.2);
}

.submit-message.error {
  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
  color: #721c24;
  border-color: #dc3545;
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.2);
}

.message-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.message-text {
  flex: 1;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .contact-form {
    padding: var(--spacing-xl);
  }
  
  .form-title {
    font-size: 2rem;
  }
  
  .form-row,
  .form-row.three-col {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .form-input,
  .form-select,
  .form-textarea {
    padding: 14px 16px;
  }
  
  .input-icon {
    display: none;
  }
}

@media (max-width: 1200px) and (min-width: 993px) {
  /* On medium screens where it's still side-by-side, 
     stack the 3-column row to prevent squishing */
  .form-row.three-col {
    grid-template-columns: 1fr; 
  }
}

@media (max-width: 480px) {
  .contact-form {
    padding: var(--spacing-lg);
  }
  
  .form-title {
    font-size: 1.8rem;
  }
}
</style>