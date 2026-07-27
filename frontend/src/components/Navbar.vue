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
                <span class="item-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                    <circle cx="12" cy="13" r="3.5"></circle>
                  </svg>
                </span>
                <span class="item-text">
                  <span class="item-title">Camera Site Planner</span>
                  <span class="item-sub">Plan &amp; quote camera installations</span>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="submenu-arrow" :class="{ 'open': isPlannerOpen }">
                  <polyline points="9 6 15 12 9 18"></polyline>
                </svg>
                <div class="submenu" :class="{ 'show': isPlannerOpen }">
                  <a href="https://siteplanner.visiongrid.net" class="submenu-item" target="_blank" rel="noopener noreferrer" @click="closeMenu">
                    <span class="submenu-item-label">Web App</span>
                    <span class="submenu-item-sub">siteplanner.visiongrid.net</span>
                  </a>
                  <a href="https://downloads.visiongrid.net" class="submenu-item" target="_blank" rel="noopener noreferrer" @click="closeMenu">
                    <span class="submenu-item-label">Download</span>
                    <span class="submenu-item-sub">Windows installer</span>
                  </a>
                </div>
              </div>
              <a href="https://invoice.visiongrid.net/" class="dropdown-item" target="_blank" rel="noopener noreferrer" @click="closeMenu">
                <span class="item-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="8" y1="13" x2="16" y2="13"></line>
                    <line x1="8" y1="17" x2="14" y2="17"></line>
                  </svg>
                </span>
                <span class="item-text">
                  <span class="item-title">Invoice Generator</span>
                  <span class="item-sub">Create &amp; send professional invoices</span>
                </span>
              </a>
              <a href="https://ez.visiongrid.net" class="dropdown-item" target="_blank" rel="noopener noreferrer" @click="closeMenu">
                <span class="item-icon item-icon--accent" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </span>
                <span class="item-text">
                  <span class="item-title">EZ Solutions</span>
                  <span class="item-sub">PDF tools for accountants</span>
                </span>
                <span class="item-badge">New</span>
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
  padding: 0.7rem 0.85rem;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: var(--transition);
  position: relative;
}

.dropdown-item:hover {
  background-color: var(--bg-secondary);
  color: var(--color-primary);
}

.item-icon {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  color: var(--color-primary);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  transition: var(--transition);
}

.dropdown-item:hover .item-icon {
  background: var(--color-white);
  color: var(--color-primary);
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(0, 78, 152, 0.08);
}

.item-icon--accent {
  background: linear-gradient(135deg, rgba(0, 78, 152, 0.1), rgba(0, 78, 152, 0.04));
  color: var(--color-primary);
}

.item-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
}

.item-title {
  font-size: 0.92rem;
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
  color: var(--text-primary);
}

.dropdown-item:hover .item-title {
  color: var(--color-primary);
}

.item-sub {
  font-size: 0.74rem;
  font-weight: var(--font-weight-normal);
  line-height: 1.3;
  color: var(--color-gray);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

.item-badge {
  margin-left: auto;
  flex-shrink: 0;
  font-size: 0.62rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-white);
  background: var(--color-primary);
  padding: 0.18rem 0.5rem;
  border-radius: 999px;
  line-height: 1.4;
  box-shadow: 0 1px 3px rgba(0, 78, 152, 0.3);
}

.submenu-trigger {
  position: relative;
  justify-content: flex-start;
  cursor: pointer;
  padding-right: 0.6rem;
}

.submenu-arrow {
  margin-left: auto;
  flex-shrink: 0;
  color: var(--color-gray);
  transition: transform 0.2s ease, color 0.2s ease;
}

.dropdown-item:hover .submenu-arrow,
.submenu-trigger:hover .submenu-arrow {
  color: var(--color-primary);
}

.submenu-arrow.open {
  transform: rotate(90deg);
}

.submenu {
  position: absolute;
  top: -0.35rem;
  left: 100%;
  margin-left: 8px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 0.4rem;
  min-width: 220px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
  z-index: 1002;
}

.submenu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.submenu-item {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 0.55rem 0.75rem;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: var(--transition);
}

.submenu-item:hover {
  background-color: var(--bg-secondary);
  color: var(--color-primary);
}

.submenu-item-label {
  font-size: 0.9rem;
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
}

.submenu-item-sub {
  font-size: 0.72rem;
  color: var(--color-gray);
  line-height: 1.3;
}

.submenu-item:hover .submenu-item-sub {
  color: var(--color-primary);
  opacity: 0.75;
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
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    max-height: calc(100vh - 70px);
    max-height: calc(100dvh - 70px);
    overflow-y: auto;
  }

  .navbar-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .dropdown-container {
    width: 100%;
    flex-direction: column;
    height: auto;
  }

  .dropdown-toggle {
    width: 100%;
    justify-content: center;
    padding: 0.85rem 1rem;
    min-height: 48px;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
  }

  /* High-specificity override so the desktop absolute positioning
     doesn't leak onto phone */
  .navbar-menu .dropdown-menu.dropdown-menu {
    position: static;
    top: auto;
    left: auto;
    right: auto;
    transform: none;
    width: 100%;
    min-width: 0;
    box-shadow: none;
    border: none;
    background: transparent;
    padding: 0;
    margin-top: 0.5rem;
    display: none;
    opacity: 1;
    visibility: visible;
  }

  .navbar-menu .dropdown-menu.dropdown-menu.show {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    transform: none;
  }

  .dropdown-item {
    justify-content: flex-start;
    padding: 0.85rem 1rem;
    min-height: 56px;
    background: var(--color-white);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    width: 100%;
  }

  .dropdown-item:hover {
    background: var(--bg-secondary);
  }

  .item-icon {
    width: 36px;
    height: 36px;
  }

  .item-title {
    font-size: 0.95rem;
  }

  .item-sub {
    font-size: 0.78rem;
    max-width: none;
  }

  .item-badge {
    font-size: 0.65rem;
  }

  .submenu-trigger {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0;
    background: var(--color-white);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  .submenu-trigger .item-icon,
  .submenu-trigger .item-text,
  .submenu-trigger .submenu-arrow {
    padding: 0.85rem 1rem;
  }

  .submenu-trigger .item-text {
    padding-top: 0.85rem;
    padding-bottom: 0.85rem;
  }

  .submenu-trigger .item-icon {
    margin-left: 0.4rem;
  }

  .submenu-trigger:hover {
    background: var(--color-white);
    color: var(--text-primary);
  }

  .submenu-arrow {
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .submenu {
    position: static;
    margin: 0;
    border: none;
    border-top: 1px solid var(--border-color);
    border-radius: 0;
    box-shadow: none;
    transform: none;
    width: 100%;
    min-width: 0;
    opacity: 0;
    visibility: hidden;
    display: none;
    padding: 0.25rem;
    background: var(--bg-secondary);
  }

  .submenu.show {
    opacity: 1;
    visibility: visible;
    display: block;
  }

  .submenu-item {
    padding: 0.7rem 0.85rem 0.7rem 2.25rem;
    min-height: 48px;
    border-radius: var(--radius-sm);
  }

  .submenu-item-label {
    font-size: 0.92rem;
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
