import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TEDxIPS",
  description: "Ideas worth spreading",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'HOME', link: '/' },
      { text: 'EVENTS', items: [{text: 'TEDxIPS Youth 2025', link: '/youth25'}] },
      { text: 'ABOUT', link: '/about'},
      { text: 'PARTNERS', link: '/sponsors'}
    ],
    logo: '../assets/logo.svg',
    siteTitle: false,
  },
  head: [
    ['link', { rel: 'icon', href: '../assets/Favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap', rel: 'stylesheet' }]
  ]
})
