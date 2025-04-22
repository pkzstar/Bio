// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Bio/',  // Make sure this matches the GitHub Pages URL path
  plugins: [react()],
})
