import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    cors: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '192.168.1.245',
      'visiongrid.net',
      'www.visiongrid.net',
      'site.visiongrid.net',
      'nonabidingly-unproposed-angelia.ngrok-free.dev'
    ],
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    cors: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '192.168.1.245',
      'visiongrid.net',
      'www.visiongrid.net',
      'site.visiongrid.net',
      'nonabidingly-unproposed-angelia.ngrok-free.dev'
    ]
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})