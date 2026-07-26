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
            <div class="dropdown-menu dropdown-cards" :class="{ 'show': isDropdownOpen }">
              <div
                v-for="card in appCards"
                :key="card.label"
                class="nav-card"
                :style="{ backgroundColor: card.bgColor, color: card.textColor }"
              >
                <div class="nav-card-label">{{ card.label }}</div>
                <div class="nav-card-links">
                  <a
                    v-for="link in card.links"
                    :key="link.label"
                    :href="link.href"
                    :target="link.external ? '_blank' : undefined"
                    rel="noopener noreferrer"
                    class="nav-card-link"
                    :aria-label="link.ariaLabel || link.label"
                    @click="closeMenu"
                  >
                    <svg class="nav-card-link-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                    <span>{{ link.label }}</span>
                    <span v-if="link.badge" class="nav-card-link-badge">{{ link.badge }}</span>
                  </a>
                </div>
              </div>
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

const closeDropdowns = () => {
  isDropdownOpen.value = false
}

// Bento cards for the Applications dropdown
// Themed to match VisionGrid: deep navy + silver/blue gradient on white surface
interface AppLink {
  label: string
  href: string
  external: boolean
  ariaLabel?: string
  badge?: string
}

interface AppCard {
  label: string
  bgColor: string
  textColor: string
  links: AppLink[]
}

const appCards: AppCard[] = [
  {
    label: 'Camera Site Planner',
    bgColor: '#003366',
    textColor: '#ffffff',
    links: [
      { label: 'Web App', href: 'https://siteplanner.visiongrid.net', external: true, ariaLabel: 'Open Camera Site Planner web app' },
      { label: 'Download Setup', href: 'https://downloads.visiongrid.net', external: true, ariaLabel: 'Download Camera Site Planner' }
    ]
  },
  {
    label: 'Business Tools',
    bgColor: '#004e98',
    textColor: '#ffffff',
    links: [
      { label: 'Invoice Generator', href: 'https://invoice.visiongrid.net/', external: true, ariaLabel: 'Open Invoice Generator' }
    ]
  },
  {
    label: 'EZ Solutions',
    bgColor: '#f8fafc',
    textColor: '#0f172a',
    links: [
      { label: 'EZ-Summary', href: 'https://ez.visiongrid.net', external: true, ariaLabel: 'Open EZ Solutions', badge: 'New' }
    ]
  }
]
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
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background-color: var(--color-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  padding: 0.5rem;
  width: max-content;
  max-width: 720px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease;
  z-index: 1001;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

/* CardNav-style bento panel */
.dropdown-cards {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: stretch;
}

.nav-card {
  flex: 1 1 0;
  min-width: 160px;
  border-radius: var(--radius-lg);
  padding: 1rem 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  user-select: none;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.nav-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
}

.nav-card-label {
  font-weight: var(--font-weight-semibold);
  font-size: 0.95rem;
  letter-spacing: -0.01em;
  opacity: 0.95;
}

.nav-card-links {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.nav-card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: var(--font-weight-medium);
  color: inherit;
  text-decoration: none;
  padding: 0.3rem 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  opacity: 0.92;
}

.nav-card-link:hover {
  opacity: 1;
  transform: translateX(2px);
}

.nav-card-link-icon {
  flex-shrink: 0;
  opacity: 0.7;
}

.nav-card-link:hover .nav-card-link-icon {
  opacity: 1;
}

.nav-card-link-badge {
  margin-left: auto;
  font-size: 0.6rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.1rem 0.45rem;
  border-radius: 999px;
  line-height: 1.5;
  background: var(--color-primary);
  color: var(--color-white);
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
    max-width: none;
  }

  .dropdown-menu.show {
    display: flex;
    transform: none;
  }

  /* Stack cards vertically on mobile */
  .dropdown-cards {
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav-card {
    min-width: 0;
    width: 100%;
    padding: 0.85rem 1rem;
  }

  .nav-card-label {
    font-size: 0.85rem;
  }

  .nav-card-link {
    font-size: 0.9rem;
    padding: 0.35rem 0;
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
