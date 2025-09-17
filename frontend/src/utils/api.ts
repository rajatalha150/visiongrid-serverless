/**
 * API configuration utility that dynamically determines the correct API URL
 * based on the current domain and environment
 */

export function getApiUrl(): string {
  // Check if we're in browser environment
  if (typeof window === 'undefined') {
    return import.meta.env.VITE_API_URL || '/api'
  }

  const hostname = window.location.hostname
  const protocol = window.location.protocol

  // Check for Vercel deployment
  const isVercel = hostname.includes('vercel.app') || hostname.includes('visiongrid')
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1'
  const isNetworkIP = hostname.match(/^\d+\.\d+\.\d+\.\d+$/)

  // Vercel serverless deployment - use same origin with /api path
  if (isVercel) {
    return `${protocol}//${hostname}/api`
  }

  // Production domains - use same origin with /api path
  if (!isLocalhost && !isNetworkIP) {
    return `${protocol}//${hostname}/api`
  }

  // Development: localhost and 127.0.0.1 - use same origin for serverless
  if (isLocalhost) {
    return '/api'
  }

  // Development: network IP access
  if (isNetworkIP) {
    return '/api'
  }

  // Fallback to same-origin API for serverless
  return '/api'
}

export const API_URL = getApiUrl()

// Debug function to log API URL (useful for troubleshooting)
export function logApiUrl(): void {
  console.log(`[API Debug] Using API URL: ${getApiUrl()}`)
  console.log(`[API Debug] Current hostname: ${window.location.hostname}`)
  console.log(`[API Debug] Environment: ${import.meta.env.MODE}`)
  console.log(`[API Debug] VITE_PRODUCTION_API_URL: ${import.meta.env.VITE_PRODUCTION_API_URL}`)
}

// Test function to check API connectivity
export async function testApiConnection(): Promise<boolean> {
  try {
    const apiUrl = getApiUrl()
    console.log(`[API Test] Testing connection to: ${apiUrl}/health`)
    console.log(`[API Test] Current protocol: ${window.location.protocol}`)
    console.log(`[API Test] API protocol: ${apiUrl.startsWith('https') ? 'https' : 'http'}`)
    
    // Check for mixed content issues
    if (window.location.protocol === 'https:' && apiUrl.startsWith('http:')) {
      console.warn(`[API Test] ⚠️ Mixed content detected: HTTPS page trying to access HTTP API`)
      console.warn(`[API Test] This may be blocked by the browser's security policy`)
    }
    
    const response = await fetch(`${apiUrl}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    })
    
    if (response.ok) {
      const data = await response.json()
      console.log(`[API Test] ✅ Connection successful:`, data)
      return true
    } else {
      console.error(`[API Test] ❌ Connection failed: ${response.status} ${response.statusText}`)
      return false
    }
  } catch (error) {
    console.error(`[API Test] ❌ Connection error:`, error)
    
    // Provide more specific error messages
    if (error instanceof TypeError) {
      if (error.message.includes('Failed to fetch')) {
        console.error(`[API Test] 💡 Possible causes:`)
        console.error(`   - Backend server is not running`)
        console.error(`   - Network connectivity issues`)
        console.error(`   - CORS policy blocking the request`)
        console.error(`   - Mixed content policy (HTTPS→HTTP blocked)`)
      }
    }
    
    return false
  }
}

// Export a function to check if we're in development mode
export function isDevelopment(): boolean {
  return import.meta.env.DEV || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
}

// Chatbot API function
export async function sendChatMessage(message: string, history?: any[]): Promise<{ response: string; timestamp: string }> {
  const apiUrl = getApiUrl()
  const response = await fetch(`${apiUrl}/chatbot`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message, history })
  })
  
  if (!response.ok) {
    throw new Error(`Chat API error: ${response.status}`)
  }
  
  return response.json()
}