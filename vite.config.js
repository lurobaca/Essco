import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change `base` to '/<tu-repo>/' si usas username.github.io/<repo>
// Si usas username.github.io como repo raíz, deja base: '/'.
export default defineConfig({
  plugins: [react()],
  base: process.env.GH_PAGES_BASE || '/REPO_NAME/'
})
