# ESSCO Landing (React + Vite + Tailwind) listo para GitHub Pages

## Pasos rápidos

1. **Crea el repo en GitHub** (p. ej. `LUROBACA/Essco`).
2. Sube estos archivos (o importa el ZIP).
3. Edita `vite.config.js`:
   - Si publicas en `username.github.io/<repo>`, cambia `base` a `'/<repo>/'` (ej. `'/Essco/'`).
   - Si publicas en `username.github.io` (repo raíz), usa `base: '/'`.
   - Alternativa: define un *Repository variable* `GH_PAGES_BASE` con ese valor y no toques el archivo.
4. En **Settings → Pages**, configura:
   - **Source**: GitHub Actions.
5. Haz *push* a `main`. El workflow **Deploy to GitHub Pages** construirá y publicará.

## Desarrollo local
```bash
npm install
npm run dev
```

## Build local
```bash
npm run build
npm run preview
```

## Notas
- No incluimos lockfile para evitar errores de cache. Si deseas, ejecuta `npm install` local y sube `package-lock.json`.
- Dependencias clave: React 18, Vite 5, Tailwind 3, framer-motion, lucide-react.
