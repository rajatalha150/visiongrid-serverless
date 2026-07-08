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
          <div class="dropdown-container" @mouseleave="closeDropdowns">
            <button class="navbar-link dropdown-toggle" @click="toggleDropdown" @mouseenter="isDropdownOpen = true">
              Applications
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="dropdown-icon" :class="{ 'rotate': isDropdownOpen }">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div class="dropdown-menu" :class="{ 'show': isDropdownOpen }">
              <div 
                class="dropdown-item submenu-trigger" 
                @mouseenter="isPlannerOpen = true" 
                @mouseleave="isPlannerOpen = false" 
                @click.stop="togglePlanner"
              >
                <div class="submenu-label">
                  <span class="item-icon">📷</span>
                  <span>Camera Site Planner</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="submenu-arrow" :class="{ 'open': isPlannerOpen }">
                  <polyline points="9 6 15 12 9 18"></polyline>
                </svg>
                <div class="submenu" :class="{ 'show': isPlannerOpen }">
                  <a href="https://siteplanner.visiongrid.net" class="submenu-item" target="_blank" rel="noopener noreferrer" @click="closeMenu">
                    Web App
                  </a>
                  <a href="https://downloads.visiongrid.net" class="submenu-item" target="_blank" rel="noopener noreferrer" @click="closeMenu">
                    Download Setup
                  </a>
                </div>
              </div>
              <a href="https://invoice.visiongrid.net/" class="dropdown-item" target="_blank" rel="noopener noreferrer" @click="closeMenu">
                <span class="item-icon">📄</span>
                Invoice Generator
              </a>
            </div>
          </div>

          <RouterLink to="/contact" class="navbar-link" @click="closeMenu">Contact</RouterLink>
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

const isMenuOpen = ref(false)
const isDropdownOpen = ref(false)
const isPlannerOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const togglePlanner = () => {
  isPlannerOpen.value = !isPlannerOpen.value
  // Ensure parent dropdown stays open when toggling submenu on mobile
  if (!isDropdownOpen.value) {
    isDropdownOpen.value = true
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  isDropdownOpen.value = false
  isPlannerOpen.value = false
}

const closeDropdowns = () => {
  isDropdownOpen.value = false
  isPlannerOpen.value = false
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

.submenu-trigger {
  position: relative;
  justify-content: space-between;
  cursor: pointer;
}

.submenu-label {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.submenu-arrow {
  transition: transform 0.2s ease;
}

.submenu-arrow.open {
  transform: rotate(90deg);
}

.submenu {
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 8px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 0.5rem;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.2s ease;
  z-index: 1002;
}

.submenu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.submenu-item {
  display: block;
  padding: 0.65rem 0.85rem;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: var(--transition);
  font-size: 0.95rem;
  white-space: nowrap;
}

.submenu-item:hover {
  background-color: var(--bg-secondary);
  color: var(--color-primary);
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

  .submenu {
    position: static;
    margin: 0.35rem 0 0.35rem 0;
    border: 1px solid var(--border-color);
    box-shadow: none;
    transform: none;
    width: 100%;
    opacity: 0;
    visibility: hidden;
    display: none;
  }

  .submenu-trigger {
    flex-direction: column;
    align-items: stretch;
    gap: 0.35rem;
  }

  .submenu-label {
    justify-content: center;
  }

  .submenu-arrow {
    display: none;
  }

  .submenu.show {
    opacity: 1;
    visibility: visible;
    display: block;
  }
}
</style>
