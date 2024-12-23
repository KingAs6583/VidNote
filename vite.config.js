import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** publish
 * npm install gh-pages --save-dev
 * npm run build 
 * npm run deploy
 */

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/VidNote/"
})
