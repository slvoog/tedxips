import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IPS Talks",
  description: "Inspiring the next generation of leaders",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'HOME', link: '/' },
      { text: 'EVENTS', items: [{text: 'IPS Talks 2025', link: '/2025'}] },
      { text: 'ABOUT', link: '/about'}
    ],
    logo: '/logo.svg',
    siteTitle: false,
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap', rel: 'stylesheet' }]
  ],
  appearance: false,
})
