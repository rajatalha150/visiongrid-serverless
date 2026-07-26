<template>
  <section class="ez-section section">
    <div class="container">
      <div class="ez-header">
        <span class="ez-eyebrow animate-on-scroll">Also from VisionGrid</span>
        <h2 class="section-title animate-on-scroll">EZ Solutions</h2>
        <p class="section-subtitle animate-on-scroll">
          Simple, honest tools for accountants and small businesses — built on the same VisionGrid engineering.
        </p>
      </div>

      <div class="ez-grid grid">
        <article
          v-for="(product, idx) in products"
          :key="product.id"
          class="ez-card card card-hover-lift animate-on-scroll"
          :style="`animation-delay: ${0.1 + idx * 0.1}s`"
        >
          <div class="ez-card-top">
            <div class="ez-icon-wrapper" v-html="product.icon"></div>
            <span class="ez-status" :class="`ez-status--${product.statusKey}`">
              {{ product.status }}
            </span>
          </div>

          <h3 class="ez-title">{{ product.title }}</h3>
          <p class="ez-tagline">{{ product.tagline }}</p>
          <p class="ez-description">{{ product.description }}</p>

          <ul class="ez-features">
            <li v-for="feature in product.features" :key="feature">
              <span class="ez-check" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <div class="ez-actions">
            <a
              :href="product.primaryHref"
              :target="product.external ? '_blank' : undefined"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              <span>{{ product.primaryLabel }}</span>
              <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a
              :href="product.secondaryHref"
              :target="product.external ? '_blank' : undefined"
              rel="noopener noreferrer"
              class="btn btn-glass"
            >
              {{ product.secondaryLabel }}
            </a>
          </div>
        </article>
      </div>

      <div class="ez-foot">
        <a
          href="https://ez.visiongrid.net"
          target="_blank"
          rel="noopener noreferrer"
          class="ez-foot-link"
        >
          Explore the full EZ suite
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { reinitializeAnimation } = useScrollAnimation()

onMounted(() => {
  reinitializeAnimation()
})

const icons = {
  summary: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="8" y1="13" x2="16" y2="13"></line><line x1="8" y1="17" x2="14" y2="17"></line><line x1="10" y1="9" x2="10" y2="9.01"></line></svg>`,
  extract: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h6l2 2h10v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"></path><path d="M8 12h8"></path><path d="M8 16h5"></path></svg>`
}

const products = [
  {
    id: 'ez-summary',
    icon: icons.summary,
    status: 'Ready',
    statusKey: 'live',
    title: 'EZ-Summary',
    tagline: 'Bank statements → Excel in one click',
    description:
      'Drop a folder of bank-statement PDFs in and get a clean, structured spreadsheet — dates, descriptions, amounts, balances — ready for reconciliation.',
    features: [
      'Native PDF text + automatic OCR fallback',
      'One-click CSV / Excel export',
      'Runs offline on Windows, no Python needed'
    ],
    primaryLabel: 'Start free trial',
    primaryHref: 'https://ez.visiongrid.net/trial',
    secondaryLabel: 'Learn more',
    secondaryHref: 'https://ez.visiongrid.net',
    external: true
  },
  {
    id: 'ez-extract',
    icon: icons.extract,
    status: 'Coming soon',
    statusKey: 'upcoming',
    title: 'EZ-Extract',
    tagline: 'Universal PDF field extractor',
    description:
      'Point at any value in any PDF and grab it. Click-to-select anchors, reusable templates, and exactly the columns you want in one Excel.',
    features: [
      'Anchor + direction extraction model',
      'Templates save and reuse across files',
      'Works on invoices, tax forms, reports — anything'
    ],
    primaryLabel: 'Join the waitlist',
    primaryHref: 'https://ez.visiongrid.net/watchlist',
    secondaryLabel: 'Learn more',
    secondaryHref: 'https://ez.visiongrid.net',
    external: true
  }
]
</script>

<style scoped>
.ez-section {
  position: relative;
  background: var(--gradient-light);
  padding: 5rem 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.ez-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 3rem;
}

.ez-eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-primary);
  background: rgba(0, 78, 152, 0.08);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 78, 152, 0.18);
  margin-bottom: 1rem;
}

.ez-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.ez-card {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 2rem;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.ez-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  opacity: 0;
  transition: var(--transition);
}

.ez-card:hover::before {
  opacity: 1;
}

.ez-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.ez-icon-wrapper {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  color: var(--color-primary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-color);
}

.ez-status {
  font-size: 0.7rem;
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  border: 1px solid transparent;
}

.ez-status--live {
  color: #047857;
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.3);
}

.ez-status--upcoming {
  color: var(--color-primary);
  background: rgba(0, 78, 152, 0.08);
  border-color: rgba(0, 78, 152, 0.2);
}

.ez-title {
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0 0 0.35rem;
  letter-spacing: -0.01em;
}

.ez-tagline {
  font-size: 0.95rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin: 0 0 0.85rem;
}

.ez-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-gray);
  margin: 0 0 1.25rem;
}

.ez-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex-grow: 1;
}

.ez-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.9rem;
  color: var(--color-gray-dark);
  line-height: 1.5;
}

.ez-check {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 78, 152, 0.1);
  color: var(--color-primary);
  border-radius: 50%;
  margin-top: 1px;
}

.ez-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.ez-actions .btn {
  font-size: 0.9rem;
  padding: 0.65rem 1.15rem;
}

.btn-icon {
  margin-left: 6px;
  transition: var(--transition-fast);
}

.btn:hover .btn-icon {
  transform: translateX(2px);
}

.ez-foot {
  text-align: center;
  margin-top: 2.5rem;
}

.ez-foot-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.95rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-decoration: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid transparent;
  transition: var(--transition);
}

.ez-foot-link:hover {
  border-bottom-color: var(--color-primary);
  gap: 0.65rem;
}

@media (max-width: 768px) {
  .ez-section {
    padding: 4rem 0;
  }

  .ez-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .ez-card {
    padding: 1.5rem;
  }

  .ez-title {
    font-size: 1.3rem;
  }
}
</style>
