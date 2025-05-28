import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 你可以在这里注册全局组件或添加其他应用级别的增强
  }
} satisfies Theme 