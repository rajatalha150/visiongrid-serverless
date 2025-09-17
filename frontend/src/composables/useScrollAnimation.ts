import { onMounted, onUnmounted, nextTick } from 'vue'

export function useScrollAnimation() {
  let observer: IntersectionObserver | null = null
  let observedElements = new Set<Element>()

  const createObserver = () => {
    if (observer) return observer
    
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )
    return observer
  }

  const initScrollAnimation = () => {
    const obs = createObserver()
    
    // Find new elements that aren't already being observed
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => {
      if (!observedElements.has(el)) {
        obs.observe(el)
        observedElements.add(el)
      }
    })
  }

  const reinitializeAnimation = async () => {
    await nextTick()
    // Wait a bit more for Vue to finish rendering
    setTimeout(initScrollAnimation, 50)
  }

  onMounted(() => {
    // Initial setup
    setTimeout(initScrollAnimation, 100)
    
    // Set up a mutation observer to detect when new animate-on-scroll elements are added
    const mutationObserver = new MutationObserver(() => {
      reinitializeAnimation()
    })
    
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    })
    
    // Clean up mutation observer on unmount
    onUnmounted(() => {
      mutationObserver.disconnect()
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
    observedElements.clear()
  })

  return {
    initScrollAnimation,
    reinitializeAnimation
  }
}