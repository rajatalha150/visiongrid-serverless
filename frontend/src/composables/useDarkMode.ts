import { ref, onMounted, watch } from 'vue'

type ThemeMode = 'light' | 'dark' | 'system'

export function useDarkMode() {
  const isDark = ref(false)
  const themeMode = ref<ThemeMode>('system')
  
  // Check if we're in browser environment
  const isBrowser = typeof window !== 'undefined'
  
  const getSystemPreference = () => {
    if (!isBrowser) return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  const applyTheme = (dark: boolean) => {
    if (!isBrowser) return
    
    const root = document.documentElement
    
    if (dark) {
      root.classList.add('dark')
      root.setAttribute('data-theme', 'dark')
    } else {
      root.classList.remove('dark')
      root.setAttribute('data-theme', 'light')
    }
    
    isDark.value = dark
  }
  
  const updateTheme = () => {
    let shouldBeDark = false
    
    switch (themeMode.value) {
      case 'dark':
        shouldBeDark = true
        break
      case 'light':
        shouldBeDark = false
        break
      case 'system':
        shouldBeDark = getSystemPreference()
        break
    }
    
    applyTheme(shouldBeDark)
  }
  
  const setThemeMode = (mode: ThemeMode) => {
    themeMode.value = mode
    if (isBrowser) {
      localStorage.setItem('theme-mode', mode)
    }
    updateTheme()
  }
  
  const toggleDarkMode = () => {
    if (themeMode.value === 'system') {
      // If currently system, toggle to opposite of current system preference
      setThemeMode(getSystemPreference() ? 'light' : 'dark')
    } else if (themeMode.value === 'light') {
      setThemeMode('dark')
    } else {
      setThemeMode('light')
    }
  }
  
  const cycleTheme = () => {
    const modes: ThemeMode[] = ['light', 'dark', 'system']
    const currentIndex = modes.indexOf(themeMode.value)
    const nextIndex = (currentIndex + 1) % modes.length
    setThemeMode(modes[nextIndex])
  }
  
  // Initialize theme
  const initializeTheme = () => {
    if (!isBrowser) return
    
    // Get saved preference or default to system
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode || 'system'
    themeMode.value = savedMode
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleSystemChange = () => {
      if (themeMode.value === 'system') {
        updateTheme()
      }
    }
    
    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange)
    } else {
      // Legacy support
      mediaQuery.addListener(handleSystemChange)
    }
    
    // Initial theme application
    updateTheme()
    
    // Cleanup function
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleSystemChange)
      } else {
        mediaQuery.removeListener(handleSystemChange)
      }
    }
  }
  
  // Watch for theme mode changes
  watch(themeMode, updateTheme)
  
  onMounted(() => {
    initializeTheme()
  })
  
  return {
    isDark,
    themeMode,
    toggleDarkMode,
    setThemeMode,
    cycleTheme,
    getSystemPreference
  }
}