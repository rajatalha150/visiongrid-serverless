<template>
  <div class="ez-page">
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-text">
          <span class="eyebrow">EZ Solutions · Coming soon</span>
          <h1>EZ-Extract — extract any field from any PDF</h1>
          <p class="subtitle">
            Click on any value in any PDF, choose an anchor and a direction, and EZ-Extract pulls it into your own Excel column. Build reusable extraction templates for invoices, tax forms, bank statements, and reports. No scripting required. Repeated fields expand into numbered columns automatically.
          </p>
          <div class="hero-actions">
            <a href="https://ez.visiongrid.net/watchlist" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
              Join the waitlist
            </a>
            <a href="https://ez.visiongrid.net" target="_blank" rel="noopener noreferrer" class="btn btn-glass btn-lg">
              Learn more
            </a>
          </div>
          <p class="microcopy">Be first to know when EZ-Extract launches — one email, no spam.</p>
        </div>
      </div>
    </section>

    <section class="section features-section">
      <div class="container">
        <h2>How it works</h2>
        <div class="steps-grid">
          <div class="step">
            <div class="step-num">1</div>
            <h3>Click any value</h3>
            <p>Open a PDF and click on the field you want to extract — a number, a date, a name, anything.</p>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <h3>Pick an anchor + direction</h3>
            <p>Choose a direction (left, right, above, below) to define exactly how EZ-Extract finds that field on every page.</p>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <h3>Save the template</h3>
            <p>Save your layout as a reusable template. Repeated fields expand into numbered columns automatically.</p>
          </div>
          <div class="step">
            <div class="step-num">4</div>
            <h3>Run on hundreds of files</h3>
            <p>Apply the template to a folder of PDFs and export a single Excel with exactly the columns you want.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section use-cases-section">
      <div class="container">
        <h2>What you can extract</h2>
        <div class="usecase-grid">
          <div class="usecase">
            <h3>Invoices</h3>
            <p>Pull vendor, invoice number, date, line items, and totals into a single Excel — across hundreds of invoices in one click.</p>
          </div>
          <div class="usecase">
            <h3>Tax forms</h3>
            <p>Extract W-2, 1099, and K-1 fields for filing. Same template works for every client, year after year.</p>
          </div>
          <div class="usecase">
            <h3>Bank statements</h3>
            <p>Pull balances, transaction dates, and amounts from any PDF bank statement. Pair with EZ-Summary for full transaction-level extraction.</p>
          </div>
          <div class="usecase">
            <h3>Vendor reports</h3>
            <p>Extract KPIs, dates, and figures from recurring PDF reports your vendors send. Turn a folder of PDFs into a clean dataset.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section faq-section">
      <div class="container">
        <h2>Frequently asked questions</h2>
        <div class="faq">
          <details><summary>When does EZ-Extract launch?</summary><p>EZ-Extract is currently in private beta. Join the waitlist at <a href="https://ez.visiongrid.net/watchlist" target="_blank" rel="noopener noreferrer">ez.visiongrid.net/watchlist</a> and we'll email you on launch day.</p></details>
          <details><summary>What platforms will it support?</summary><p>EZ-Extract will launch on Windows 10, Windows 11, and macOS.</p></details>
          <details><summary>Do I need to know how to code?</summary><p>No. EZ-Extract is fully visual — you click on the value, pick a direction, and save the template. No scripts, no field mapping files, no JSON config.</p></details>
          <details><summary>Will it work alongside EZ-Summary?</summary><p>Yes. EZ-Summary handles transaction-level bank statement extraction. EZ-Extract handles any field from any PDF. They share an account and a single VisionGrid login.</p></details>
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
  title: 'EZ-Extract — Extract any field from any PDF (coming soon)',
  description: 'EZ-Extract by VisionGrid is a universal PDF field extractor. Click to select any value, pick an anchor and direction, and build reusable extraction templates for invoices, tax forms, bank statements, and reports. No scripting. Join the waitlist at ez.visiongrid.net.',
  keywords: 'EZ-Extract, PDF field extractor, extract from PDF, PDF data extraction, invoice extraction, tax form extraction, PDF to Excel, W-2 extractor, 1099 extractor, accountant tools, VisionGrid',
  canonical: 'https://visiongrid.net/ez-extract',
  ogImage: 'https://visiongrid.net/logo.png',
  ogType: 'product',
  jsonLd: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'EZ-Extract',
      alternateName: 'EZ Extract',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'PDF Data Extraction',
      operatingSystem: 'Windows 10, Windows 11, macOS',
      description: 'EZ-Extract is a universal PDF field extractor. Click to select any value in any PDF, choose an anchor and direction, and build reusable extraction templates. One Excel, exactly the columns you want — for invoices, tax forms, bank statements, and reports.',
      url: 'https://ez.visiongrid.net',
      offers: {
        '@type': 'Offer',
        name: 'Waitlist',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        url: 'https://ez.visiongrid.net/watchlist'
      },
      featureList: [
        'Visual click-to-select field definitions — no scripting',
        'Anchor + direction extraction (left, right, above, below)',
        'Repeated fields expand into numbered columns',
        'Reusable extraction templates save per document type',
        'Works on invoices, tax forms, bank statements, and reports'
      ],
      publisher: { '@type': 'Organization', name: 'VisionGrid', url: 'https://visiongrid.net' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://visiongrid.net/' },
        { '@type': 'ListItem', position: 2, name: 'EZ Solutions', item: 'https://visiongrid.net/ez' },
        { '@type': 'ListItem', position: 3, name: 'EZ-Extract', item: 'https://visiongrid.net/ez-extract' }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'When does EZ-Extract launch?', acceptedAnswer: { '@type': 'Answer', text: 'EZ-Extract is in private beta. Join the waitlist at https://ez.visiongrid.net/watchlist to be notified on launch day.' } },
        { '@type': 'Question', name: 'What platforms will it support?', acceptedAnswer: { '@type': 'Answer', text: 'EZ-Extract will launch on Windows 10, Windows 11, and macOS.' } },
        { '@type': 'Question', name: 'Do I need to know how to code?', acceptedAnswer: { '@type': 'Answer', text: 'No. EZ-Extract is fully visual: click a value, pick a direction, save the template. No scripts or field-mapping files.' } }
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

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
  max-width: 1100px;
  margin: 0 auto;
}

.step {
  background: var(--color-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
}

.step-num {
  width: 36px;
  height: 36px;
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold);
  margin-bottom: 0.75rem;
}

.step h3 { font-size: 1rem; font-weight: var(--font-weight-bold); color: var(--color-text); margin: 0 0 0.5rem; }
.step p { font-size: 0.88rem; line-height: 1.5; color: var(--color-gray); margin: 0; }

.use-cases-section { background: var(--gradient-light); padding: 4rem 0; }
.use-cases-section h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0 0 2.5rem;
}
.usecase-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}
.usecase {
  background: var(--color-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
}
.usecase h3 { font-size: 1.05rem; font-weight: var(--font-weight-bold); color: var(--color-text); margin: 0 0 0.5rem; }
.usecase p { font-size: 0.9rem; line-height: 1.55; color: var(--color-gray); margin: 0; }

.faq-section { padding: 4rem 0; }
.faq-section h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  margin: 0 0 2rem;
}
.faq { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 0.75rem; }
.faq details {
  background: var(--color-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1rem 1.25rem;
}
.faq summary { font-weight: var(--font-weight-semibold); color: var(--color-text); cursor: pointer; }
.faq p { margin: 0.75rem 0 0; color: var(--color-gray); line-height: 1.6; font-size: 0.95rem; }
.faq a { color: var(--color-primary); }

@media (max-width: 768px) {
  .hero h1 { font-size: 2rem; }
  .steps-grid { grid-template-columns: 1fr; }
  .usecase-grid { grid-template-columns: 1fr; }
}
</style>
