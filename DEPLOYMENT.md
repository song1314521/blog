# 🚀 VitePress 博客部署指南

## 📋 部署前准备

### 1. 确认构建成功
```bash
npm run build
```
构建成功后，会在 `.vitepress/dist` 目录生成静态文件。

### 2. 本地预览
```bash
npm run preview
```
在本地预览构建结果，确保一切正常。

## 🌐 部署方案

### 方案一：GitHub Pages（推荐）

#### 1. 创建 GitHub 仓库
- 在 GitHub 创建新仓库
- 将代码推送到仓库

#### 2. 配置 GitHub Actions
创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci
      - name: Build with VitePress
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### 3. 启用 GitHub Pages
- 进入仓库 Settings → Pages
- Source 选择 "GitHub Actions"
- 推送代码后自动部署

### 方案二：Vercel（简单快速）

#### 1. 连接 GitHub
- 访问 [vercel.com](https://vercel.com)
- 使用 GitHub 账号登录
- 导入你的博客仓库

#### 2. 配置构建设置
- Framework Preset: VitePress
- Build Command: `npm run build`
- Output Directory: `.vitepress/dist`

#### 3. 自动部署
- 每次推送代码自动部署
- 支持预览分支

### 方案三：Netlify

#### 1. 连接仓库
- 访问 [netlify.com](https://netlify.com)
- 连接 GitHub 仓库

#### 2. 构建设置
```
Build command: npm run build
Publish directory: .vitepress/dist
```

#### 3. 环境变量（如需要）
```
NODE_VERSION: 20
```

### 方案四：自建服务器

#### 1. 服务器要求
- Linux 服务器（Ubuntu/CentOS）
- Nginx 或 Apache
- 域名（可选）

#### 2. 上传文件
```bash
# 构建项目
npm run build

# 上传 dist 目录到服务器
scp -r .vitepress/dist/* user@server:/var/www/html/
```

#### 3. Nginx 配置
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🔧 部署优化

### 1. 基础路径配置
如果部署在子路径，修改 `.vitepress/config.mts`：

```typescript
export default defineConfig({
  base: '/your-repo-name/', // GitHub Pages 子路径
  // ... 其他配置
})
```

### 2. 自定义域名
#### GitHub Pages
- 在仓库根目录创建 `CNAME` 文件
- 内容为你的域名：`blog.yourdomain.com`

#### DNS 配置
```
CNAME blog yourusername.github.io
```

### 3. HTTPS 配置
- GitHub Pages 自动支持 HTTPS
- 自建服务器需要 SSL 证书（Let's Encrypt）

## 📊 性能优化

### 1. 图片优化
```bash
# 压缩图片
npm install -g imagemin-cli
imagemin public/images/* --out-dir=public/images/
```

### 2. 构建优化
```typescript
// .vitepress/config.mts
export default defineConfig({
  vite: {
    build: {
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue'],
            vitepress: ['vitepress']
          }
        }
      }
    }
  }
})
```

### 3. CDN 加速
```typescript
// 使用 CDN 加速静态资源
export default defineConfig({
  vite: {
    build: {
      assetsDir: 'assets',
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  }
})
```

## 🔍 SEO 优化

### 1. 站点地图
安装插件：
```bash
npm install vitepress-plugin-sitemap
```

配置：
```typescript
import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-plugin-sitemap'

export default defineConfig(
  withSidebar({
    hostname: 'https://yourdomain.com',
    // ... 其他配置
  })
)
```

### 2. 元数据优化
```typescript
export default defineConfig({
  head: [
    ['meta', { name: 'description', content: '你的博客描述' }],
    ['meta', { name: 'keywords', content: '关键词1,关键词2' }],
    ['meta', { property: 'og:title', content: '博客标题' }],
    ['meta', { property: 'og:description', content: '博客描述' }],
    ['meta', { property: 'og:image', content: '/images/og-image.png' }]
  ]
})
```

## 🚨 常见问题

### 1. 构建失败
```bash
# 清除缓存
rm -rf node_modules .vitepress/cache
npm install
npm run build
```

### 2. 路径问题
- 确保所有链接使用相对路径
- 图片路径以 `/` 开头

### 3. 404 错误
- 检查路由配置
- 确保服务器支持 SPA 路由

### 4. 样式丢失
- 检查 base 路径配置
- 确保 CSS 文件正确引用

## 📝 部署检查清单

- [ ] 本地构建成功
- [ ] 本地预览正常
- [ ] 配置正确的 base 路径
- [ ] 所有链接可访问
- [ ] 图片资源正常显示
- [ ] 移动端适配良好
- [ ] SEO 元数据完整
- [ ] 性能优化完成

## 🎉 部署完成

恭喜！你的 VitePress 博客已经成功部署。现在你可以：

1. 📝 开始写作你的第一篇文章
2. 🎨 自定义主题和样式
3. 📊 添加统计和分析
4. 🔗 分享给朋友们

---

**💡 提示**: 建议使用 GitHub Pages 或 Vercel 进行部署，它们提供了最佳的开发体验和自动化部署流程。 