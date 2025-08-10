import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Cambia 'Essco' si tu repo tiene otro nombre
export default defineConfig({
  plugins: [react()],
  base: '/Essco/'
})
