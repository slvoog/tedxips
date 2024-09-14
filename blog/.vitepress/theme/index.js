// https://vitepress.dev/guide/custom-theme
import { h, ref, watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useDark } from '@vueuse/core'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
