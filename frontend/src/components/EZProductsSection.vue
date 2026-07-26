<template>
  <section class="ez-section section" id="ez-solutions" aria-labelledby="ez-section-title">
    <div class="container">
      <div class="ez-header">
        <span class="ez-eyebrow animate-on-scroll">Also from VisionGrid</span>
        <h2 class="section-title animate-on-scroll" id="ez-section-title">EZ Solutions</h2>
        <p class="section-subtitle animate-on-scroll">
          Simple, honest PDF tools for accountants and small businesses — built on the same VisionGrid engineering that powers enterprise networks.
        </p>
      </div>

      <div class="ez-grid grid">
        <article
          v-for="(product, idx) in products"
          :key="product.id"
          class="ez-card card card-hover-lift animate-on-scroll"
          :style="`animation-delay: ${0.1 + idx * 0.1}s`"
          :aria-labelledby="`ez-card-title-${product.id}`"
          itemscope
          itemtype="https://schema.org/SoftwareApplication"
        >
          <meta itemprop="applicationCategory" :content="product.category" />
          <meta itemprop="operatingSystem" :content="product.os" />
          <link itemprop="url" :href="product.url" />

          <div class="ez-card-top">
            <div class="ez-icon-wrapper" v-html="product.icon" aria-hidden="true"></div>
            <span class="ez-status" :class="`ez-status--${product.statusKey}`">
              {{ product.status }}
            </span>
          </div>

          <h3 class="ez-title" :id="`ez-card-title-${product.id}`" itemprop="name">
            {{ product.title }}
          </h3>
          <p class="ez-tagline" itemprop="description">{{ product.tagline }}</p>

          <p class="ez-description">
            {{ product.description }}
          </p>

          <ul class="ez-features" aria-label="Key features">
            <li v-for="feature in product.features" :key="feature">
              <span class="ez-check" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <div class="ez-meta" v-if="product.metaBadges.length">
            <span v-for="badge in product.metaBadges" :key="badge" class="ez-meta-badge">
              {{ badge }}
            </span>
          </div>

          <div class="ez-actions">
            <a
              :href="product.primaryHref"
              :target="product.external ? '_blank' : undefined"
              rel="noopener noreferrer"
              class="btn btn-primary"
              :aria-label="product.primaryAria"
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
              :aria-label="product.secondaryAria"
            >
              {{ product.secondaryLabel }}
            </a>
          </div>

          <div class="ez-footnote" v-if="product.footnote">
            <span aria-hidden="true">·</span>
            <span>{{ product.footnote }}</span>
          </div>
        </article>
      </div>

      <div class="ez-foot">
        <a
          href="https://ez.visiongrid.net"
          target="_blank"
          rel="noopener noreferrer"
          class="ez-foot-link"
          aria-label="Explore the full EZ Solutions suite at ez.visiongrid.net"
        >
          Explore the full EZ suite
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
        <p class="ez-foot-note">
          Trusted by accountants, bookkeepers, and small businesses across the US, UK, and EU.
        </p>
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

interface EzProduct {
  id: string
  icon: string
  status: string
  statusKey: 'live' | 'upcoming'
  title: string
  tagline: string
  description: string
  features: string[]
  metaBadges: string[]
  primaryLabel: string
  primaryHref: string
  primaryAria: string
  secondaryLabel: string
  secondaryHref: string
  secondaryAria: string
  external: boolean
  url: string
  category: string
  os: string
  footnote: string
}

const products: EzProduct[] = [
  {
    id: 'ez-summary',
    icon: icons.summary,
    status: 'Ready',
    statusKey: 'live',
    title: 'EZ-Summary',
    tagline: 'Bank statements → Excel in one click',
    description:
      'Drop a folder of bank-statement PDFs and EZ-Summary extracts every transaction into a clean, structured spreadsheet — dates, descriptions, amounts, and balances — ready for reconciliation and tax prep.',
    features: [
      'Native PDF text + automatic OCR fallback',
      'Multi-bank layout detection (Chase, BofA, Wells Fargo, HSBC, Barclays, and more)',
      'One-click CSV / Excel export for QuickBooks, Xero, and Wave',
      'Batch folder processing — no per-file clicking',
      'Runs offline on Windows, no Python or setup needed'
    ],
    metaBadges: ['Windows app', 'Offline', 'No code'],
    primaryLabel: 'Start free trial',
    primaryHref: 'https://ez.visiongrid.net/trial',
    primaryAria: 'Start a 3-day free trial of EZ-Summary at ez.visiongrid.net/trial',
    secondaryLabel: 'Learn more',
    secondaryHref: 'https://ez.visiongrid.net',
    secondaryAria: 'Learn more about EZ-Summary at ez.visiongrid.net',
    external: true,
    url: 'https://ez.visiongrid.net',
    category: 'FinanceApplication',
    os: 'Windows 10, Windows 11',
    footnote: '3-day free trial · 5 pages a day · No credit card required'
  },
  {
    id: 'ez-extract',
    icon: icons.extract,
    status: 'Coming soon',
    statusKey: 'upcoming',
    title: 'EZ-Extract',
    tagline: 'Universal PDF field extractor',
    description:
      'Point at any value in any PDF and grab it. Click-to-select anchors, reusable templates, and exactly the columns you want in one Excel — built for invoices, tax forms, statements, and reports.',
    features: [
      'Visual, click-to-select field definitions — no scripting',
      'Anchor + direction extraction model (left, right, above, below)',
      'Repeated fields expand into numbered columns automatically',
      'Works on invoices, tax forms, bank statements, and reports',
      'Templates save and reuse across hundreds of files'
    ],
    metaBadges: ['Waitlist open', 'Q1 launch'],
    primaryLabel: 'Join the waitlist',
    primaryHref: 'https://ez.visiongrid.net/watchlist',
    primaryAria: 'Join the EZ-Extract waitlist at ez.visiongrid.net/watchlist',
    secondaryLabel: 'Learn more',
    secondaryHref: 'https://ez.visiongrid.net',
    secondaryAria: 'Learn more about EZ-Extract at ez.visiongrid.net',
    external: true,
    url: 'https://ez.visiongrid.net',
    category: 'BusinessApplication',
    os: 'Windows 10, Windows 11, macOS',
    footnote: 'Be first to know when EZ-Extract launches — one email, no spam'
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
  max-width: 1080px;
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
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--color-gray);
  margin: 0 0 1.25rem;
}

.ez-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  flex-grow: 1;
}

.ez-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.88rem;
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

.ez-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
}

.ez-meta-badge {
  font-size: 0.7rem;
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.04em;
  color: var(--color-gray-dark);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
}

.ez-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 0.85rem;
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

.ez-footnote {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.78rem;
  color: var(--color-gray);
  padding-top: 0.85rem;
  border-top: 1px solid var(--border-color-light);
  line-height: 1.4;
}

.ez-footnote span:first-child {
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
}

.ez-foot {
  text-align: center;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
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

.ez-foot-note {
  font-size: 0.82rem;
  color: var(--color-gray);
  margin: 0;
  max-width: 480px;
  line-height: 1.5;
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
