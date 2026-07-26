<template>
  <div class="ez-page">
    <section class="hero">
      <div class="container">
        <span class="eyebrow">Also from VisionGrid</span>
        <h1>EZ Solutions — PDF tools for accountants and small businesses</h1>
        <p class="subtitle">
          A suite of simple, honest PDF tools built by VisionGrid. Bank statements to Excel in one click.
          Universal PDF field extraction coming soon. No Python, no setup, no nonsense.
        </p>
        <div class="hero-actions">
          <a href="https://ez.visiongrid.net/trial" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            Try EZ-Summary free
          </a>
          <a href="https://ez.visiongrid.net/watchlist" target="_blank" rel="noopener noreferrer" class="btn btn-glass">
            Join the EZ-Extract waitlist
          </a>
        </div>
        <p class="trust">Trusted by accountants, bookkeepers, and small businesses across the US, UK, and EU.</p>
      </div>
    </section>

    <section class="products section">
      <div class="container">
        <div class="products-grid">
          <article class="product-card card" itemscope itemtype="https://schema.org/SoftwareApplication">
            <meta itemprop="applicationCategory" content="FinanceApplication" />
            <link itemprop="url" href="https://ez.visiongrid.net" />
            <div class="status live">Ready</div>
            <h2 itemprop="name">EZ-Summary</h2>
            <p class="tagline" itemprop="description">Bank statements → Excel in one click</p>
            <p>Drop a folder of bank-statement PDFs and get a clean, structured spreadsheet — dates, descriptions, amounts, and balances — ready for reconciliation and tax prep. Native PDF text + automatic OCR fallback. Multi-bank layout detection. One-click CSV / Excel export. Batch folder processing. Runs offline on Windows.</p>
            <ul class="features">
              <li>Works with Chase, Bank of America, Wells Fargo, HSBC, Barclays</li>
              <li>Export to QuickBooks, Xero, and Wave formats</li>
              <li>60–500 pages per month, or unlimited with Lifetime ($349.99)</li>
              <li>3-day free trial, no credit card required</li>
            </ul>
            <a href="https://ez.visiongrid.net/trial" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Start free trial</a>
          </article>

          <article class="product-card card" itemscope itemtype="https://schema.org/SoftwareApplication">
            <meta itemprop="applicationCategory" content="BusinessApplication" />
            <link itemprop="url" href="https://ez.visiongrid.net" />
            <div class="status upcoming">Coming soon</div>
            <h2 itemprop="name">EZ-Extract</h2>
            <p class="tagline" itemprop="description">Universal PDF field extractor</p>
            <p>Point at any value in any PDF and grab it. Click-to-select anchors, reusable templates, and exactly the columns you want in one Excel — for invoices, tax forms, bank statements, and reports. No scripting required.</p>
            <ul class="features">
              <li>Anchor + direction extraction (left, right, above, below)</li>
              <li>Repeated fields expand into numbered columns automatically</li>
              <li>Templates save and reuse across hundreds of files</li>
              <li>Windows + macOS at launch</li>
            </ul>
            <a href="https://ez.visiongrid.net/watchlist" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Join the waitlist</a>
          </article>
        </div>
      </div>
    </section>

    <section class="why section">
      <div class="container">
        <h2>Why EZ Solutions</h2>
        <div class="why-grid">
          <div class="why-item">
            <h3>Built for the people who actually do the work</h3>
            <p>Accountants, bookkeepers, and small business owners shouldn't need a developer to turn PDFs into spreadsheets. EZ removes the Python, the OCR setup, and the copy-paste.</p>
          </div>
          <div class="why-item">
            <h3>Same engineering, smaller price tag</h3>
            <p>EZ runs on the same VisionGrid engineering that powers enterprise networks and security installations. You get enterprise reliability at a price a one-person firm can afford.</p>
          </div>
          <div class="why-item">
            <h3>Honest pricing, no lock-in</h3>
            <p>Start with a 3-day free trial. Pay $2.99–$9.99 a month, or $349.99 once for unlimited. 14-day money-back guarantee on every plan. Cancel anytime.</p>
          </div>
          <div class="why-item">
            <h3>Works offline, keeps your data local</h3>
            <p>Your bank statements never leave your machine. EZ-Summary runs entirely on your Windows PC — no cloud upload, no third-party access, no leaks.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta section">
      <div class="container cta-inner">
        <h2>Ready to stop copy-pasting from PDFs?</h2>
        <p>Try EZ-Summary free for 3 days. No credit card required.</p>
        <a href="https://ez.visiongrid.net/trial" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
          Start free trial at ez.visiongrid.net
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useRouteSEO } from '@/composables/useSEO'

const route = useRoute()

useRouteSEO(route, () => ({
  title: 'EZ Solutions — PDF tools for accountants & small businesses',
  description: 'EZ Solutions by VisionGrid is a suite of PDF tools for accountants and small businesses. EZ-Summary turns bank statement PDFs into Excel in one click. EZ-Extract (coming soon) extracts any field from any PDF. Free trial, no credit card.',
  keywords: 'EZ Solutions, EZ-Summary, EZ-Extract, bank statement to Excel, PDF to Excel, PDF field extractor, accountant tools, bookkeeping software, VisionGrid',
  canonical: 'https://visiongrid.net/ez',
  ogImage: 'https://visiongrid.net/logo.png',
  ogType: 'website',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'EZ Solutions by VisionGrid',
      url: 'https://visiongrid.net/ez',
      description: 'A suite of PDF tools for accountants and small businesses: EZ-Summary (bank statements to Excel) and EZ-Extract (universal PDF field extractor).',
      publisher: { '@type': 'Organization', name: 'VisionGrid', url: 'https://visiongrid.net' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://visiongrid.net/' },
        { '@type': 'ListItem', position: 2, name: 'EZ Solutions', item: 'https://visiongrid.net/ez' }
      ]
    }
  ]
}))
</script>

<style scoped>
.ez-page {
  overflow-x: hidden;
}

.hero {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  background: var(--gradient-hero);
  margin-top: 70px;
  padding: 5rem 0 4rem;
  text-align: center;
}

.eyebrow {
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
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: 3rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  max-width: 900px;
  margin: 0 auto 1.25rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.subtitle {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--color-gray);
  max-width: 720px;
  margin: 0 auto 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.trust {
  font-size: 0.9rem;
  color: var(--color-gray);
  margin: 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  max-width: 1080px;
  margin: 0 auto;
}

.product-card {
  position: relative;
  background: var(--color-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  padding: 2rem;
  box-shadow: var(--shadow-md);
}

.status {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  font-size: 0.7rem;
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  border: 1px solid transparent;
}
.status.live { color: #047857; background: rgba(16,185,129,0.1); border-color: rgba(16,185,129,0.3); }
.status.upcoming { color: var(--color-primary); background: rgba(0,78,152,0.08); border-color: rgba(0,78,152,0.2); }

.product-card h2 {
  font-size: 1.6rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0 0 0.5rem;
  letter-spacing: -0.01em;
}

.tagline {
  font-size: 1rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  margin: 0 0 1rem;
}

.product-card p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-gray);
  margin: 0 0 1.25rem;
}

.features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
}
.features li {
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.92rem;
  color: var(--color-gray-dark);
  line-height: 1.5;
  margin-bottom: 0.5rem;
}
.features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
}

.why {
  background: var(--gradient-light);
}

.why h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0 0 2.5rem;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.why-item h3 {
  font-size: 1.15rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0 0 0.5rem;
}

.why-item p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-gray);
  margin: 0;
}

.cta {
  text-align: center;
}
.cta-inner {
  max-width: 600px;
  margin: 0 auto;
}
.cta h2 {
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0 0 0.75rem;
}
.cta p {
  font-size: 1.1rem;
  color: var(--color-gray);
  margin: 0 0 1.5rem;
}

@media (max-width: 768px) {
  .hero h1 { font-size: 2.1rem; }
  .subtitle { font-size: 1.05rem; }
  .products-grid, .why-grid { grid-template-columns: 1fr; gap: 1.25rem; }
  .product-card { padding: 1.5rem; }
}
</style>
