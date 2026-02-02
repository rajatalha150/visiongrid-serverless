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
          
          <!-- Applications Dropdown -->
          <div class="dropdown-container" @mouseleave="isDropdownOpen = false">
            <button class="navbar-link dropdown-toggle" @click="toggleDropdown" @mouseenter="isDropdownOpen = true">
              Applications
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dropdown-icon" :class="{ 'rotate': isDropdownOpen }">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="dropdown-menu" :class="{ 'show': isDropdownOpen }">
              <a href="https://downloads.visiongrid.net" class="dropdown-item" target="_blank" rel="noopener noreferrer" @click="closeMenu">
                <span class="item-icon">📷</span>
                Camera Site Planner
              </a>
              <a href="https://invoice.visiongrid.net/" class="dropdown-item" target="_blank" rel="noopener noreferrer" @click="closeMenu">
                <span class="item-icon">📄</span>
                Invoice Generator
              </a>
            </div>
          </div>

          <RouterLink to="/contact" class="navbar-link" @click="closeMenu">Contact</RouterLink>
        </div>
        
        <div class="navbar-actions">
          <button 
            class="theme-toggle badge-style" 
            @click="toggleDarkMode"
            :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
            :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
          >
            <div class="toggle-content">
              <!-- If current is NOT dark (Light mode), show Dark option -->
              <div v-if="!isDark" class="mode-indicator dark">
                <svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                <span class="mode-text">Dark</span>
              </div>
              <!-- If current IS dark (Dark mode), show Light option -->
              <div v-else class="mode-indicator light">
                <svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <span class="mode-text">Light</span>
              </div>
            </div>
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
const isDropdownOpen = ref(false)
const { isDark, toggleDarkMode } = useDarkMode()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
  isDropdownOpen.value = false
}
</script>

<style scoped>
.navbar {
  background-color: #cbd5e1; /* Set to specific color as requested */
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  height: 70px; /* Ensure fixed height */
}

/* Explicitly target dark mode to override the hardcoded light mode color */
:root[class~="dark"] .navbar {
  background-color: var(--bg-primary);
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
  transition: var(--transition);
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
  font-size: 1rem;
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

.theme-toggle.badge-style {
  width: auto;
  min-width: 80px;
  height: 32px;
  border-radius: 9999px;
  padding: 0 12px;
  background: var(--bg-tertiary); /* Changed from bg-secondary for better contrast */
  border: 1px solid var(--border-color);
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  color: var(--color-text); /* Ensure base text color is set */
}

/* Explicitly target dark mode to ensure visibility */
:root[class~="dark"] .theme-toggle.badge-style {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.theme-toggle.badge-style:hover {
  background: var(--bg-secondary); /* Darker on hover */
  border-color: var(--color-primary);
  transform: translateY(-1px);
}

.toggle-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.mode-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
}

.theme-icon {
  width: 16px;
  height: 16px;
  color: var(--color-primary);
}

.mode-text {
  color: var(--color-primary); /* Changed from var(--color-text) to match icon */
  font-size: 0.85rem;
  letter-spacing: 0.3px;
}

/* Dropdown Styles */
.dropdown-container {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.dropdown-toggle {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0;
  font-family: inherit;
  font-size: 1rem;
}

.dropdown-icon {
  transition: transform 0.2s ease;
}

.dropdown-icon.rotate {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 0.5rem;
  min-width: 220px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 1001;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: var(--transition);
  font-size: 0.95rem;
  font-weight: 500;
  white-space: nowrap;
}

.dropdown-item:hover {
  background-color: var(--bg-secondary);
  color: var(--color-primary);
}

.item-icon {
  font-size: 1.1rem;
}

/* Dark mode overrides for dropdown */
:root[class~="dark"] .dropdown-menu {
  background-color: var(--bg-primary);
  border-color: rgba(255, 255, 255, 0.1);
}

:root[class~="dark"] .dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.05);
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
    max-height: 80vh; /* Prevent overflow on small screens */
    overflow-y: auto;
  }
  
  .dropdown-container {
    width: 100%;
    flex-direction: column;
    height: auto;
  }

  .dropdown-toggle {
    width: 100%;
    justify-content: center;
    padding: 0.5rem 0;
  }

  .dropdown-menu {
    position: static;
    transform: none;
    width: 100%;
    box-shadow: none;
    border: none;
    background: transparent;
    padding: 0;
    margin-top: 0.5rem;
    display: none; /* Hide by default on mobile */
    opacity: 1;
    visibility: visible;
  }

  .dropdown-menu.show {
    display: flex;
    flex-direction: column;
    transform: none;
  }

  .dropdown-item {
    justify-content: center;
    padding: 0.75rem;
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