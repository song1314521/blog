#!/bin/bash

# VitePress 博客部署脚本

echo "🚀 开始部署 VitePress 博客..."

# 1. 安装依赖
echo "📦 安装依赖..."
npm install

# 2. 构建项目
echo "🔨 构建项目..."
npm run build

# 3. 检查构建结果
if [ -d ".vitepress/dist" ]; then
    echo "✅ 构建成功！"
    echo "📁 构建文件位于: .vitepress/dist"
    
    # 显示构建文件大小
    echo "📊 构建文件统计:"
    du -sh .vitepress/dist
    
    echo ""
    echo "🎉 部署准备完成！"
    echo ""
    echo "📋 接下来你可以："
    echo "1. 将 .vitepress/dist 目录上传到你的服务器"
    echo "2. 或者推送代码到 GitHub 使用 GitHub Pages"
    echo "3. 或者连接到 Vercel/Netlify 进行自动部署"
    echo ""
    echo "💡 本地预览: npm run preview"
else
    echo "❌ 构建失败！请检查错误信息。"
    exit 1
fi 