<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <RouterLink to="/" class="navbar-brand">
          <img src="/logo.png" alt="VisionGrid Logo" class="logo" />
          <span class="brand-text">VisionGrid</span>
        </RouterLink>
        
        <div class="navbar-menu" :class="{ active: isMenuOpen }">
          <RouterLink to="/" class="navbar-link" @click="closeMenu">Home</RouterLink>
          <RouterLink to="/about" class="navbar-link" @click="closeMenu">About</RouterLink>
          <RouterLink to="/services" class="navbar-link" @click="closeMenu">Services</RouterLink>
          <RouterLink to="/contact" class="navbar-link" @click="closeMenu">Contact</RouterLink>
        </div>
        
        <div class="navbar-actions">
          <button 
            class="theme-toggle" 
            @click="toggleDarkMode"
            :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
            :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
          >
            <svg v-if="!isDark" class="theme-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.53 15.93C20.08 17.38 18.05 18.15 15.97 17.97C11.94 17.61 8.68 14.35 8.32 10.32C8.14 8.24 8.91 6.21 10.36 4.76C10.75 4.37 10.65 3.74 10.18 3.47C6.07 1.32 1.07 3.36 1.07 8.5C1.07 14.85 6.22 20 12.57 20C17.71 20 19.75 14.79 17.6 10.68C17.33 10.21 16.7 10.11 16.31 10.5C15.45 11.36 14.36 11.93 13.18 12.05C12 12.17 10.8 11.83 9.85 11.13C8.9 10.43 8.24 9.42 8.04 8.27C7.84 7.12 8.12 5.94 8.82 4.99L21.53 15.93Z" fill="currentColor"/>
            </svg>
            <svg v-else class="theme-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM2 13H4C4.55 13 5 12.55 5 12C5 11.45 4.55 11 4 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13ZM20 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H20C19.45 11 19 11.45 19 12C19 12.55 19.45 13 20 13ZM11 2V4C11 4.55 11.45 5 12 5C12.55 5 13 4.55 13 4V2C13 1.45 12.55 1 12 1C11.45 1 11 1.45 11 2ZM11 20V22C11 22.55 11.45 23 12 23C12.55 23 13 22.55 13 22V20C13 19.45 12.55 19 12 19C11.45 19 11 19.45 11 20ZM5.99 4.58C5.6 4.19 4.96 4.19 4.58 4.58C4.19 4.96 4.19 5.61 4.58 5.99L5.64 7.05C6.03 7.44 6.67 7.44 7.05 7.05C7.44 6.67 7.44 6.03 7.05 5.64L5.99 4.58ZM18.36 16.95C17.97 16.56 17.33 16.56 16.95 16.95C16.56 17.33 16.56 17.97 16.95 18.36L18.01 19.42C18.39 19.8 19.04 19.8 19.42 19.42C19.8 19.04 19.8 18.39 19.42 18.01L18.36 16.95ZM19.42 5.99C19.8 5.61 19.8 4.96 19.42 4.58C19.04 4.19 18.39 4.19 18.01 4.58L16.95 5.64C16.56 6.03 16.56 6.67 16.95 7.05C17.33 7.44 17.97 7.44 18.36 7.05L19.42 5.99ZM7.05 16.95C7.44 17.33 7.44 17.97 7.05 18.36L5.99 19.42C5.61 19.8 4.96 19.8 4.58 19.42C4.19 19.04 4.19 18.39 4.58 18.01L5.64 16.95C6.03 16.56 6.67 16.56 7.05 16.95Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        
        <button class="mobile-menu-toggle" :class="{ active: isMenuOpen }" @click="toggleMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useDarkMode } from '../composables/useDarkMode'

const isMenuOpen = ref(false)
const { isDark, toggleDarkMode } = useDarkMode()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  background-color: var(--bg-primary);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.logo {
  height: 32px;
  width: auto;
  margin-right: 0.75rem;
  object-fit: contain;
  transition: var(--transition);
}

.navbar-brand:hover .logo {
  transform: scale(1.05);
}

.brand-text {
  color: var(--text-primary);
}

.navbar-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.navbar-link {
  text-decoration: none;
  color: var(--text-primary);
  font-weight: 500;
  transition: var(--transition);
  position: relative;
}

.navbar-link:hover,
.navbar-link.router-link-active {
  color: var(--color-primary);
}

.navbar-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-primary);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  justify-content: center;
  gap: 4px;
}

.mobile-menu-toggle span {
  width: 100%;
  height: 2px;
  background-color: var(--text-primary);
  transition: var(--transition);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: var(--radius-full);
  background: var(--bg-secondary);
  color: var(--text-primary);
  cursor: pointer;
  transition: var(--transition-bounce);
  position: relative;
  overflow: hidden;
}

.theme-toggle::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-primary);
  opacity: 0;
  transition: var(--transition);
  border-radius: inherit;
}

.theme-toggle:hover::before {
  opacity: 0.1;
}

.theme-toggle:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-md);
}

.theme-toggle:active {
  transform: scale(0.95);
}

.theme-icon {
  width: 20px;
  height: 20px;
  transition: var(--transition);
  position: relative;
  z-index: 1;
}

.theme-toggle:hover .theme-icon {
  transform: rotate(180deg);
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }
  
  .navbar-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--bg-primary);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-color);
    flex-direction: column;
    padding: 1rem;
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }
  
  .navbar-actions {
    order: -1;
    margin-bottom: 1rem;
    justify-content: center;
  }
  
  .navbar-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .navbar-link {
    padding: 0.5rem 0;
    width: 100%;
    text-align: center;
  }
  
  .mobile-menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }
  
  .mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
}
</style>