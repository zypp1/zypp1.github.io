# self_introduction

秋招个人简历展示网站。动态、丝滑、有高级感的单页滚动叙事站,部署到 GitHub Pages。

## 技术栈

- **Vite + React + TypeScript** — 工程外壳与组件化内容
- **GSAP + ScrollTrigger** — 滚动驱动动画、局部 pin、文字逐字浮现
- **Lenis** — 丝滑惯性滚动,与 ScrollTrigger 联动
- 纯前端,无后端;`vite build` 产出静态文件

## 开发

```bash
npm install      # 安装依赖
npm run dev      # 本地开发,默认 http://localhost:5173
npm run build    # 类型检查 + 生产构建到 dist/
npm run preview  # 本地预览构建产物
```

## 内容编辑

所有文案集中在 `src/data/content.ts`,按板块结构化。补真实项目、链接、简历 PDF 时,主要改这个文件,一般不需要动动效组件。

占位规则:真实链接未补齐前,Contact 等处使用禁用态占位,不要留死链。

## 部署到 GitHub Pages

推荐用仓库内的 GitHub Actions(见 `.github/workflows/deploy.yml`):push 到 `main` 自动构建并发布到 Pages。

手动方式:

```bash
npm run deploy   # 构建并用 gh-pages 推到 gh-pages 分支
```

- 用户站点:仓库名 `<username>.github.io`,访问 `https://<username>.github.io/`,`vite.config.ts` 中 `base: '/'`。
- 项目站点:仓库名任意,访问 `https://<username>.github.io/<repo>/`,需把 `base` 改为 `'/<repo>/'`。

⚠️ GitHub Pages 面向公网。不要放手机号、住址、身份证件、学校内部资料或未公开项目代码。

## 设计依据

见 `docs/design-document.md` 与 `docs/design-prompt.md`。
