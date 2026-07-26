<template>
  <div class="ez-page">
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-text">
          <span class="eyebrow">EZ Solutions · Live now</span>
          <h1>EZ-Summary — turn bank statement PDFs into Excel in one click</h1>
          <p class="subtitle">
            Drop a folder of bank-statement PDFs and get a clean, structured spreadsheet — dates, descriptions, amounts, balances — ready for reconciliation, bookkeeping, and tax prep. Native PDF text + automatic OCR fallback. Multi-bank layout detection. One-click CSV / Excel export. Runs offline on Windows.
          </p>
          <div class="hero-actions">
            <a href="https://ez.visiongrid.net/trial" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
              Start 3-day free trial
            </a>
            <a href="https://ez.visiongrid.net" target="_blank" rel="noopener noreferrer" class="btn btn-glass btn-lg">
              Learn more
            </a>
          </div>
          <p class="microcopy">3-day free trial · 5 pages a day · No credit card · 14-day money-back guarantee</p>
        </div>
      </div>
    </section>

    <section class="section features-section">
      <div class="container">
        <h2>Built for the people who actually do the work</h2>
        <div class="feature-grid">
          <div class="feature">
            <h3>Works with every major bank</h3>
            <p>Multi-bank layout detection for Chase, Bank of America, Wells Fargo, HSBC, Barclays, and more. Just drop the PDFs in.</p>
          </div>
          <div class="feature">
            <h3>One-click CSV / Excel export</h3>
            <p>Export formats compatible with QuickBooks, Xero, and Wave. No reformatting needed.</p>
          </div>
          <div class="feature">
            <h3>Native PDF + automatic OCR</h3>
            <p>Reads transaction data straight out of bank-statement PDFs — native text extraction with automatic OCR fallback for scanned statements.</p>
          </div>
          <div class="feature">
            <h3>Batch folder processing</h3>
            <p>Drop in hundreds of statements at once. No per-file clicking, no per-file naming.</p>
          </div>
          <div class="feature">
            <h3>Runs offline on Windows</h3>
            <p>No Python, no setup, no internet required. Your statements never leave your machine.</p>
          </div>
          <div class="feature">
            <h3>Honest, simple pricing</h3>
            <p>$2.99–$9.99 per month, or $349.99 once for unlimited. 14-day money-back guarantee.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section pricing-section">
      <div class="container">
        <h2>Simple, page-based pricing</h2>
        <p class="pricing-sub">Pay for what you process. Cancel anytime. 14-day money-back guarantee on every plan.</p>
        <div class="pricing-grid">
          <div class="plan"><h3>Starter</h3><div class="price">$2.99<small>/mo</small></div><p>60 pages / month</p><a href="https://ez.visiongrid.net" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Choose Starter</a></div>
          <div class="plan featured"><span class="badge">Best seller</span><h3>Advanced</h3><div class="price">$5.99<small>/mo</small></div><p>200 pages / month</p><a href="https://ez.visiongrid.net" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Choose Advanced</a></div>
          <div class="plan"><h3>Professional</h3><div class="price">$9.99<small>/mo</small></div><p>500 pages / month</p><a href="https://ez.visiongrid.net" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Choose Professional</a></div>
          <div class="plan featured"><span class="badge">Best value</span><h3>Lifetime</h3><div class="price">$349.99<small>once</small></div><p>Unlimited, forever</p><a href="https://ez.visiongrid.net" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Choose Lifetime</a></div>
        </div>
      </div>
    </section>

    <section class="section faq-section">
      <div class="container">
        <h2>Frequently asked questions</h2>
        <div class="faq">
          <details><summary>What does EZ-Summary actually do?</summary><p>EZ-Summary reads transaction data out of bank-statement PDFs — both native text and scanned (via OCR fallback) — and exports a clean, structured spreadsheet with dates, descriptions, amounts, and balances. Drop in a folder of statements and get back one CSV or Excel file.</p></details>
          <details><summary>Which banks does it support?</summary><p>EZ-Summary includes multi-bank layout detection for Chase, Bank of America, Wells Fargo, HSBC, Barclays, and other major US, UK, and EU banks. New banks are added regularly.</p></details>
          <details><summary>Does it work offline?</summary><p>Yes. EZ-Summary is a Windows desktop app that runs entirely on your computer. No internet connection is required after installation. Your bank statements never leave your machine.</p></details>
          <details><summary>Is there a free trial?</summary><p>Yes. 3 days, 5 pages per day, no credit card required. Start at <a href="https://ez.visiongrid.net/trial" target="_blank" rel="noopener noreferrer">ez.visiongrid.net/trial</a>.</p></details>
          <details><summary>Can I cancel anytime?</summary><p>Yes. Monthly plans cancel anytime with no penalty. Every plan is backed by a 14-day money-back guarantee.</p></details>
          <details><summary>Does it work with QuickBooks / Xero / Wave?</summary><p>Yes. CSV and Excel exports use column layouts compatible with QuickBooks, Xero, and Wave import formats.</p></details>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useRouteSEO } from '@/composables/useSEO'

const route = useRoute()

useRouteSEO(route, () => ({
  title: 'EZ-Summary — Bank statement PDF to Excel in one click',
  description: 'EZ-Summary by VisionGrid turns bank statement PDFs into clean Excel or CSV spreadsheets in one click. Native PDF text + automatic OCR, multi-bank layout detection (Chase, BofA, Wells Fargo, HSBC, Barclays), QuickBooks/Xero/Wave export. 3-day free trial, no credit card.',
  keywords: 'EZ-Summary, bank statement to Excel, PDF to Excel, bank statement converter, PDF to CSV, accounting software, bookkeeping software, Chase bank statement, BofA, Wells Fargo, HSBC, Barclays, QuickBooks import, Xero import, VisionGrid',
  canonical: 'https://visiongrid.net/ez-summary',
  ogImage: 'https://visiongrid.net/logo.png',
  ogType: 'product',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'EZ-Summary',
      alternateName: 'EZ Summary',
      applicationCategory: 'FinanceApplication',
      applicationSubCategory: 'Bank Statement Converter',
      operatingSystem: 'Windows 10, Windows 11',
      description: 'EZ-Summary converts bank statement PDFs into clean, structured CSV and Excel spreadsheets in one click. Built for accountants, bookkeepers, and small businesses. Features native PDF text extraction, automatic OCR fallback, multi-bank layout detection, and batch folder processing.',
      url: 'https://ez.visiongrid.net',
      downloadUrl: 'https://downloads.visiongrid.net',
      softwareVersion: '1.0',
      offers: [
        { '@type': 'Offer', name: 'Free Trial', price: '0', priceCurrency: 'USD', description: '3-day free trial, 5 pages per day, no credit card required', url: 'https://ez.visiongrid.net/trial' },
        { '@type': 'Offer', name: 'Starter', price: '2.99', priceCurrency: 'USD', description: '60 pages per month, CSV + Excel export' },
        { '@type': 'Offer', name: 'Advanced', price: '5.99', priceCurrency: 'USD', description: '200 pages per month, all Starter features' },
        { '@type': 'Offer', name: 'Professional', price: '9.99', priceCurrency: 'USD', description: '500 pages per month, all Advanced features' },
        { '@type': 'Offer', name: 'Lifetime', price: '349.99', priceCurrency: 'USD', description: 'Unlimited pages forever, no recurring billing' }
      ],
      featureList: [
        'Native PDF text extraction with automatic OCR fallback',
        'Multi-bank layout detection (Chase, Bank of America, Wells Fargo, HSBC, Barclays, and more)',
        'One-click CSV and Excel export for QuickBooks, Xero, and Wave',
        'Batch folder processing for hundreds of statements',
        'Runs offline on Windows — no Python or setup required'
      ],
      publisher: { '@type': 'Organization', name: 'VisionGrid', url: 'https://visiongrid.net' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://visiongrid.net/' },
        { '@type': 'ListItem', position: 2, name: 'EZ Solutions', item: 'https://visiongrid.net/ez' },
        { '@type': 'ListItem', position: 3, name: 'EZ-Summary', item: 'https://visiongrid.net/ez-summary' }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does EZ-Summary actually do?', acceptedAnswer: { '@type': 'Answer', text: 'EZ-Summary reads transaction data out of bank-statement PDFs (native + OCR fallback) and exports a clean, structured spreadsheet with dates, descriptions, amounts, and balances. Drop in a folder of statements, get back one CSV or Excel file.' } },
        { '@type': 'Question', name: 'Which banks does it support?', acceptedAnswer: { '@type': 'Answer', text: 'Multi-bank layout detection for Chase, Bank of America, Wells Fargo, HSBC, Barclays, and other major US, UK, and EU banks.' } },
        { '@type': 'Question', name: 'Does it work offline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. EZ-Summary is a Windows desktop app that runs entirely on your computer. No internet required. Your statements never leave your machine.' } },
        { '@type': 'Question', name: 'Is there a free trial?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. 3 days, 5 pages per day, no credit card. Start at https://ez.visiongrid.net/trial.' } }
      ]
    }
  ]
}))
</script>

<style scoped>
.ez-page { overflow-x: hidden; }

.hero {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  background: var(--gradient-hero);
  margin-top: 70px;
  padding: 5rem 0 4rem;
}

.hero-inner { max-width: 900px; margin: 0 auto; }

.eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: var(--font-weight-semibold);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-primary);
  background: rgba(0,78,152,0.08);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(0,78,152,0.18);
  margin-bottom: 1.25rem;
}

.hero h1 {
  font-size: 2.8rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 1.25rem;
}

.subtitle {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--color-gray);
  margin: 0 0 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.microcopy {
  font-size: 0.85rem;
  color: var(--color-gray);
  margin: 0;
}

.features-section { padding-top: 4rem; }
.features-section h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0 0 2.5rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.feature {
  background: var(--color-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
}

.feature h3 {
  font-size: 1.05rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0 0 0.5rem;
}

.feature p {
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--color-gray);
  margin: 0;
}

.pricing-section {
  background: var(--gradient-light);
  padding: 4rem 0;
}
.pricing-section h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0 0 0.5rem;
}
.pricing-sub {
  text-align: center;
  color: var(--color-gray);
  margin: 0 0 2.5rem;
}
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
  max-width: 1000px;
  margin: 0 auto;
}
.plan {
  position: relative;
  background: var(--color-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  text-align: center;
}
.plan.featured {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}
.badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-primary);
  color: var(--color-white);
  font-size: 0.65rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
}
.plan h3 { font-size: 1.05rem; font-weight: var(--font-weight-bold); color: var(--color-text); margin: 0 0 0.75rem; }
.price { font-size: 1.6rem; font-weight: var(--font-weight-bold); color: var(--color-text); margin: 0 0 0.5rem; }
.price small { font-size: 0.7rem; color: var(--color-gray); font-weight: var(--font-weight-normal); }
.plan p { font-size: 0.85rem; color: var(--color-gray); margin: 0 0 1rem; }
.plan .btn { width: 100%; }

.faq-section { padding: 4rem 0; }
.faq-section h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0 0 2rem;
}
.faq {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.faq details {
  background: var(--color-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1rem 1.25rem;
}
.faq summary {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  cursor: pointer;
  font-size: 1rem;
}
.faq p { margin: 0.75rem 0 0; color: var(--color-gray); line-height: 1.6; font-size: 0.95rem; }
.faq a { color: var(--color-primary); }

@media (max-width: 768px) {
  .hero h1 { font-size: 2rem; }
  .subtitle { font-size: 1rem; }
  .feature-grid { grid-template-columns: 1fr; }
  .pricing-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 480px) {
  .pricing-grid { grid-template-columns: 1fr; }
}
</style>
