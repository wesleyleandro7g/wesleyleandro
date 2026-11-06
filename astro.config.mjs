import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://wesleyleandro.com',
  output: 'static',
  i18n: { locales: ['en', 'es', 'pt'], defaultLocale: 'en', routing: { prefixDefaultLocale: true } },
  vite: { plugins: [tailwindcss()] },
})
