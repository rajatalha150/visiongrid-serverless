<template>
  <div v-if="isOpen" class="cookie-consent-overlay">
    <div class="cookie-consent-container glass-effect">
      <!-- Initial View -->
      <div v-if="!showCustomize" class="cookie-content">
        <div class="cookie-header">
          <div class="cookie-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
              <path d="M8.5 8.5v.01"></path>
              <path d="M16 15.5v.01"></path>
              <path d="M12 12v.01"></path>
              <path d="M11 17v.01"></path>
              <path d="M7 14v.01"></path>
            </svg>
          </div>
          <h3>We Value Your Privacy</h3>
        </div>
        <p class="cookie-text">
          We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
          By clicking "Accept All", you consent to our use of cookies.
        </p>
        <div class="cookie-actions">
          <button @click="showCustomize = true" class="btn btn-outline">Customize</button>
          <button @click="rejectAll" class="btn btn-secondary">Reject All</button>
          <button @click="acceptAll" class="btn btn-primary">Accept All</button>
        </div>
      </div>

      <!-- Customize View -->
      <div v-else class="cookie-customize">
        <div class="cookie-header">
          <h3>Cookie Preferences</h3>
          <button @click="showCustomize = false" class="close-btn" aria-label="Close customization">✕</button>
        </div>
        <p class="customize-text">Manage your cookie settings. Essential cookies are always enabled.</p>
        
        <div class="cookie-toggles">
          <div class="cookie-option">
            <div class="option-header">
              <label class="switch disabled">
                <input type="checkbox" checked disabled>
                <span class="slider round"></span>
              </label>
              <div class="option-info">
                <h4>Essential Cookies</h4>
                <p>Necessary for the website to function properly. Cannot be disabled.</p>
              </div>
            </div>
          </div>

          <div class="cookie-option">
            <div class="option-header">
              <label class="switch">
                <input type="checkbox" v-model="preferences.analytics">
                <span class="slider round"></span>
              </label>
              <div class="option-info">
                <h4>Analytics Cookies</h4>
                <p>Help us understand how visitors interact with our website.</p>
              </div>
            </div>
          </div>

          <div class="cookie-option">
            <div class="option-header">
              <label class="switch">
                <input type="checkbox" v-model="preferences.marketing">
                <span class="slider round"></span>
              </label>
              <div class="option-info">
                <h4>Marketing Cookies</h4>
                <p>Used to track visitors across websites to display relevant ads.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cookie-actions">
          <button @click="savePreferences" class="btn btn-primary full-width">Save Preferences</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'

const isOpen = ref(false)
const showCustomize = ref(false)

const preferences = reactive({
  essential: true,
  analytics: true,
  marketing: false
})

onMounted(() => {
  // Check if user has already made a choice
  const savedConsent = localStorage.getItem('visiongrid-cookie-consent')
  if (!savedConsent) {
    // Wait a moment before showing to not overwhelm user immediately
    setTimeout(() => {
      isOpen.value = true
    }, 1000)
  } else {
    // Load saved preferences
    try {
      const parsed = JSON.parse(savedConsent)
      preferences.analytics = parsed.analytics
      preferences.marketing = parsed.marketing
    } catch (e) {
      console.error('Error parsing cookie preferences', e)
    }
  }
})

const saveToStorage = (settings: typeof preferences) => {
  localStorage.setItem('visiongrid-cookie-consent', JSON.stringify(settings))
  isOpen.value = false
  
  // Here you would trigger actual cookie logic
  if (settings.analytics) {
    console.log('Analytics cookies enabled')
    // Initialize analytics...
  }
  if (settings.marketing) {
    console.log('Marketing cookies enabled')
    // Initialize marketing scripts...
  }
}

const acceptAll = () => {
  preferences.analytics = true
  preferences.marketing = true
  saveToStorage(preferences)
}

const rejectAll = () => {
  preferences.analytics = false
  preferences.marketing = false
  saveToStorage(preferences)
}

const savePreferences = () => {
  saveToStorage(preferences)
}
</script>

<style scoped>
.cookie-consent-overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  z-index: 9999;
  display: flex;
  justify-content: center;
  pointer-events: none; /* Let clicks pass through overlay area */
}

.cookie-consent-container {
  pointer-events: auto; /* Re-enable clicks for the container */
  width: 100%;
  max-width: 600px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 2rem;
  box-shadow: var(--shadow-xl);
  animation: slideUp 0.5s ease-out;
  backdrop-filter: blur(20px);
}

@keyframes slideUp {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.cookie-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;
}

.cookie-header h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
}

.cookie-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  background: var(--bg-tertiary);
  padding: 8px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.cookie-text {
  color: var(--color-gray);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.cookie-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.cookie-actions .btn {
  flex: 1;
  white-space: nowrap;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--color-gray);
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
}

.close-btn:hover {
  color: var(--color-text);
}

/* Customize View Styles */
.customize-text {
  color: var(--color-gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.cookie-toggles {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.cookie-option {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.cookie-option:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.option-header {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.option-info h4 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.option-info p {
  font-size: 0.85rem;
  color: var(--color-gray);
  line-height: 1.4;
  margin: 0;
}

/* Toggle Switch */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
  flex-shrink: 0;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bg-tertiary);
  transition: .4s;
  border: 1px solid var(--border-color);
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--color-primary);
}

input:checked + .slider:before {
  transform: translateX(24px);
}

.switch.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.switch.disabled .slider {
  cursor: not-allowed;
}

/* Round sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.full-width {
  width: 100%;
}

@media (max-width: 600px) {
  .cookie-consent-overlay {
    padding: 1rem;
  }
  
  .cookie-actions {
    flex-direction: column;
  }
  
  .cookie-actions .btn {
    width: 100%;
  }
}
</style>