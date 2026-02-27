import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/admin2/',  // 🔥 Hii itafanya assets zitafute kwenye /admin2/assets/
  plugins: [
    vue(),
    tailwindcss(),
  ],
})