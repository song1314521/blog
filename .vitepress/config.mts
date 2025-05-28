import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "云帆的国风世界",
  description: "乘风破浪，诗意远航 - 记录技术与生活的美好瞬间",
  head: [
    ['link', { rel: 'icon', href: '/images/homePage.png' }],
    ['meta', { name: 'keywords', content: '云帆,博客,技术分享,国风文化,生活感悟,Vue.js,前端开发' }],
    ['meta', { name: 'author', content: '云帆' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/homePage.png',
    siteTitle: '云帆',
    
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📚 文章', link: '/posts' },
      { text: '📂 归档', link: '/archives' },
      { text: '🏷️ 标签', link: '/tags' },
      { text: '👤 关于', link: '/about' },
      {
        text: '🔗 更多',
        items: [
          { text: '📖 示例文章', link: '/markdown-examples' },
          { text: '🛠️ API示例', link: '/api-examples' },
          { text: '📧 联系我', link: 'mailto:yunfan@example.com' }
        ]
      }
    ],

    sidebar: {
      '/posts/': [
        {
          text: '📝 文章分类',
          items: [
            { text: '🚀 技术分享', link: '/posts/tech' },
            { text: '🎨 生活美学', link: '/posts/life' },
            { text: '📚 读书笔记', link: '/posts/books' },
            { text: '🌱 成长感悟', link: '/posts/growth' },
            { text: '🎵 音乐人生', link: '/posts/music' },
            { text: '📷 摄影作品', link: '/posts/photography' }
          ]
        }
      ],
      '/about/': [
        {
          text: '👤 关于我',
          items: [
            { text: '个人简介', link: '/about' },
            { text: '技术栈', link: '/about/tech-stack' },
            { text: '项目经历', link: '/about/projects' },
            { text: '联系方式', link: '/about/contact' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yunfan' },
      { 
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WeChat</title><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.53-1.162-1.188 0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18 0 .659-.52 1.188-1.162 1.188-.642 0-1.162-.53-1.162-1.188 0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.406-.032zm-2.53 3.274c.535 0 .969.44.969.982 0 .542-.434.982-.969.982s-.969-.44-.969-.982c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982 0 .542-.434.982-.969.982s-.969-.44-.969-.982c0-.542.434-.982.969-.982z"/></svg>'
        },
        link: '#'
      }
    ],

    footer: {
      message: '用心记录，用爱分享 ❤️',
      copyright: 'Copyright © 2024 云帆. All rights reserved.'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/yunfan/blog/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  }
})
