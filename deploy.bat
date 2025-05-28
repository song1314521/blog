@echo off
chcp 65001 >nul
echo.
echo 🚀 开始部署 VitePress 博客...
echo.

REM 1. 安装依赖
echo 📦 安装依赖...
call npm install
if %errorlevel% neq 0 (
    echo ❌ 依赖安装失败！
    pause
    exit /b 1
)

REM 2. 构建项目
echo.
echo 🔨 构建项目...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ 构建失败！请检查错误信息。
    pause
    exit /b 1
)

REM 3. 检查构建结果
if exist ".vitepress\dist" (
    echo.
    echo ✅ 构建成功！
    echo 📁 构建文件位于: .vitepress\dist
    echo.
    echo 🎉 部署准备完成！
    echo.
    echo 📋 接下来你可以：
    echo 1. 将 .vitepress\dist 目录上传到你的服务器
    echo 2. 或者推送代码到 GitHub 使用 GitHub Pages
    echo 3. 或者连接到 Vercel/Netlify 进行自动部署
    echo.
    echo 💡 本地预览: npm run preview
    echo.
) else (
    echo ❌ 构建失败！请检查错误信息。
    pause
    exit /b 1
)

pause 