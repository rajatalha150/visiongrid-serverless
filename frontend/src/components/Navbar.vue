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
                <div class="nav-card-tagline">{{ card.tagline }}</div>
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
  tagline: string
  bgColor: string
  textColor: string
  links: AppLink[]
}

const appCards: AppCard[] = [
  {
    label: 'Camera Site Planner',
    tagline: 'Plan camera layouts',
    bgColor: '#003366',
    textColor: '#ffffff',
    links: [
      { label: 'Web App', href: 'https://siteplanner.visiongrid.net', external: true, ariaLabel: 'Open Camera Site Planner web app' },
      { label: 'Download Setup', href: 'https://downloads.visiongrid.net', external: true, ariaLabel: 'Download Camera Site Planner' }
    ]
  },
  {
    label: 'Business Tools',
    tagline: 'Invoicing & PDF tools',
    bgColor: '#004e98',
    textColor: '#ffffff',
    links: [
      { label: 'Invoice Generator', href: 'https://invoice.visiongrid.net/', external: true, ariaLabel: 'Open Invoice Generator' }
    ]
  },
  {
    label: 'EZ Solutions',
    tagline: 'Bank statements → Excel',
    bgColor: '#f8fafc',
    textColor: '#0f172a',
    links: [
      { label: 'EZ-Summary', href: 'https://ez.visiongrid.net', external: true, ariaLabel: 'Open EZ Solutions — bank statements to Excel in one click', badge: 'New' }
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
  width: 360px;
  max-width: calc(100vw - 2rem);
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

/* CardNav-style bento panel — stacked vertically */
.dropdown-cards {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: stretch;
}

.nav-card {
  flex: 1 1 auto;
  min-width: 0;
  width: 100%;
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

.nav-card-tagline {
  font-size: 0.78rem;
  font-weight: var(--font-weight-normal);
  opacity: 0.75;
  margin-top: -0.15rem;
  line-height: 1.3;
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
    padding: 0.85rem;
    gap: 0.4rem;
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    max-height: calc(100vh - 70px); /* Prevent overflow on small screens */
    max-height: calc(100dvh - 70px); /* dynamic viewport for mobile */
    overflow-y: auto;
    overscroll-behavior: contain;
  }

  .navbar-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  /* ============================================ */
  /* Mobile dropdown: stays inside the drawer      */
  /* ============================================ */
  .dropdown-container {
    width: 100%;
    flex-direction: column;
    height: auto;
    align-items: stretch;
  }

  .dropdown-toggle {
    width: 100%;
    justify-content: space-between;
    padding: 0.85rem 1rem;
    min-height: 48px;
    font-size: 1.05rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
  }

  .dropdown-toggle .dropdown-icon {
    margin-left: auto;
  }

  /* Use a high-specificity selector to defeat any desktop overrides */
  .navbar-menu .dropdown-menu.dropdown-menu {
    position: static;
    top: auto;
    left: auto;
    right: auto;
    transform: none;
    width: 100%;
    max-width: none;
    box-shadow: none;
    border: none;
    background: transparent;
    padding: 0;
    margin: 0.6rem 0 0;
    display: block;
    opacity: 1;
    visibility: visible;
    overflow: visible;
  }

  .navbar-menu .dropdown-menu.dropdown-menu > * {
    min-height: 0;
  }

  .navbar-menu .dropdown-menu.dropdown-menu.show {
    transform: none;
    grid-template-rows: auto;
  }

  /* Cards are already stacked vertically by default */
  .dropdown-cards {
    padding: 0.25rem 0 0.5rem;
  }

  .nav-card {
    min-width: 0;
    width: 100%;
    padding: 1rem 1.1rem;
    border-radius: var(--radius-lg);
    animation: nav-card-in 0.32s ease both;
  }

  .nav-card:nth-child(1) { animation-delay: 0.05s; }
  .nav-card:nth-child(2) { animation-delay: 0.12s; }
  .nav-card:nth-child(3) { animation-delay: 0.19s; }

  @keyframes nav-card-in {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .nav-card-label {
    font-size: 0.95rem;
  }

  .nav-card-tagline {
    font-size: 0.82rem;
  }

  .nav-card-link {
    font-size: 0.95rem;
    padding: 0.7rem 0.5rem;
    min-height: 48px; /* iOS / WCAG tap target */
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0;
  }

  .nav-card-link:first-child {
    border-top: none;
    padding-top: 0.55rem;
  }

  .nav-card-link-badge {
    font-size: 0.65rem;
  }

  .navbar-actions {
    order: -1;
    margin-bottom: 1rem;
    justify-content: center;
  }

  .navbar-link {
    padding: 0.85rem 1rem;
    width: 100%;
    text-align: center;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
  }

  .navbar-link:hover,
  .navbar-link.router-link-active {
    background: var(--bg-secondary);
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
