import { watch, onBeforeUnmount } from 'vue'
import { useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'

/**
 * Composable for setting per-route SEO metadata + JSON-LD structured data.
 * Updates document.title, meta tags, canonical link, and injects JSON-LD <script> tags.
 *
 * Use from any view with:
 *   const route = useRoute()
 *   useRouteSEO(route, () => ({ title: '...', description: '...', ... }))
 *
 * The second argument is a getter so SEO can react to dynamic route changes
 * (e.g. /blog/:slug) without re-mounting the component.
 */

export interface SEOOptions {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'product'
  noindex?: boolean
  jsonLd?: object | object[]
  /** hreflang alternate-language URLs: { en: 'https://...', es: 'https://...' } */
  hreflang?: Record<string, string>
}

const SITE_NAME = 'VisionGrid'
const DEFAULT_OG_IMAGE = 'https://visiongrid.net/logo.png'

function setMeta(name: string, content: string, useProperty = false): void {
  if (typeof document === 'undefined') return
  const attr = useProperty ? 'property' : 'name'
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string, hreflang?: string): void {
  if (typeof document === 'undefined') return
  let selector = `link[rel="${rel}"]`
  if (hreflang) selector += `[hreflang="${hreflang}"]`
  let el = document.head.querySelector<HTMLLinkElement>(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function removeLinks(rel: string): void {
  if (typeof document === 'undefined') return
  document.head.querySelectorAll(`link[rel="${rel}"]`).forEach((el) => el.remove())
}

function removeJsonLdScripts(): void {
  if (typeof document === 'undefined') return
  document.head.querySelectorAll('script[data-seo-jsonld="true"]').forEach((el) => el.remove())
}

function injectJsonLd(data: object | object[]): void {
  if (typeof document === 'undefined') return
  removeJsonLdScripts()
  const items = Array.isArray(data) ? data : [data]
  for (const item of items) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo-jsonld', 'true')
    script.text = JSON.stringify(item)
    document.head.appendChild(script)
  }
}

export function applySEO(opts: SEOOptions): void {
  document.title = `${opts.title} | ${SITE_NAME}`

  setMeta('description', opts.description)
  if (opts.keywords) setMeta('keywords', opts.keywords)
  setMeta('robots', opts.noindex ? 'noindex, nofollow' : 'index, follow')

  if (opts.canonical) setLink('canonical', opts.canonical)

  removeLinks('alternate')
  if (opts.hreflang) {
    for (const [lang, href] of Object.entries(opts.hreflang)) {
      setLink('alternate', href, lang)
    }
  }

  setMeta('og:title', opts.title, true)
  setMeta('og:description', opts.description, true)
  setMeta('og:type', opts.ogType || 'website', true)
  setMeta('og:image', opts.ogImage || DEFAULT_OG_IMAGE, true)
  setMeta('og:site_name', SITE_NAME, true)

  setMeta('twitter:title', opts.title)
  setMeta('twitter:description', opts.description)
  setMeta('twitter:image', opts.ogImage || DEFAULT_OG_IMAGE)
  setMeta('twitter:card', 'summary_large_image')

  if (opts.jsonLd) injectJsonLd(opts.jsonLd)
}

/**
 * Watch a route and re-apply SEO on each navigation.
 * Most common usage:
 *   const route = useRoute()
 *   useRouteSEO(route, () => ({ title: '...', description: '...', ... }))
 */
export function useRouteSEO(
  route: RouteLocationNormalizedLoaded,
  getter: (route: RouteLocationNormalizedLoaded) => SEOOptions
): void {
  const stop = watch(
    () => route,
    (r) => applySEO(getter(r)),
    { immediate: true, deep: true, flush: 'post' }
  )
  onBeforeUnmount(() => {
    stop()
    removeJsonLdScripts()
  })
}

/** Convenience: applies SEO to the current route from useRoute() in one call. */
export function useCurrentRouteSEO(getter: (route: RouteLocationNormalizedLoaded) => SEOOptions): void {
  useRouteSEO(useRoute(), getter)
}
