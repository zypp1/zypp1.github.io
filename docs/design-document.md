# Resume Website Design Document

## Status

Draft for first website framework.

Date: 2026-06-25

## Purpose

这个网站用于秋招个人展示。它不是单纯把 PDF 简历搬到网页上，而是同时承担两个作用：

- 让 HR 和技术面试官快速看清候选人的方向、能力和可补充项目材料。
- 通过网站本身的完成度，间接展示候选人使用 AI 辅助开发、快速原型实现和产品化表达的能力。

## Candidate Direction

候选人是一名研究生，目标更偏开发岗，方向集中在：

- 自动驾驶
- 无人机
- 规划控制
- 机器人系统
- 机器人 VLA 运控相关工程实践

目前不主打论文或强科研成果。网站应把重点放在工程能力、系统搭建、开源项目复现/改造、仿真验证、工具链熟悉度和可运行成果展示上。

## Audience

主要受众：

- 秋招 HR
- 自动驾驶 / 机器人 / 无人机方向技术面试官
- 对开发能力、学习能力、工程闭环和项目复现能力感兴趣的招聘方

## Success Criteria

第一版成功标准：

- 打开网站 10 秒内能看懂候选人的求职方向。
- 页面视觉精美、克制、专业，不像模板站。
- 移动端和桌面端都能正常阅读。
- 内容区域已经预留好，后续可以逐步补真实项目。
- 可以直接部署到 GitHub Pages。

后续优化标准：

- 每个项目都有明确证据：代码、截图、视频、文档或运行记录。
- 文案不过度夸大，但能把复现、调试、改造、验证讲清楚。
- 网站链接可以放进 PDF 简历、GitHub 主页、邮件签名或投递材料。

## Non-Goals

当前阶段不做：

- 完整个人品牌设计系统
- 复杂动画或 3D 展示
- 博客系统
- 后端服务
- 登录、评论、数据收集
- 详细项目内容编写
- 论文型学术主页

## Information Architecture

建议保留以下页面结构：

1. Hero
   - 姓名
   - 求职方向
   - 一句话个人定位
   - 项目入口和联系方式

2. Profile
   - 研究生身份
   - 目标岗位
   - 个人能力概括
   - 网站的展示目的

3. Capability Map
   - 规划与控制
   - 机器人系统工程
   - 自动驾驶与无人机
   - 快速产品化 / AI 辅助开发流程

4. Selected Work
   - 1 个重点项目位
   - 2-3 个次级项目位
   - 项目证据入口

5. Toolchain
   - 核心编程能力
   - 机器人与仿真工具链
   - 自动驾驶 / 无人机相关能力
   - 展示、部署、文档能力

6. Experience Timeline
   - 学习与项目时间线
   - 秋招目标节点

7. Contact
   - 邮箱
   - GitHub
   - 简历 PDF
   - 项目视频 / 博客 / 作品链接

## Visual Direction

整体风格：工程化、冷静、技术感、可读性优先。

推荐视觉语言：

- 控制台式布局
- 机器人系统仪表板感
- 清晰的网格与信息分区
- 深色主视觉，可支持浅色模式
- 少量强调色用于状态、路径、按钮

避免：

- 大面积紫色或蓝紫渐变
- 纯营销式 hero
- 过度圆角和厚重阴影
- 太多装饰卡片
- 与真实方向无关的抽象插画

## Copywriting Direction

文案应强调可信的工程能力，而不是制造虚假强结果。

推荐句式：

- “面向自动驾驶、无人机、规划控制与机器人方向的工程开发候选人。”
- “关注机器人系统从感知输入、规划决策到控制执行的工程闭环。”
- “能够基于开源项目、仿真工具链与 AI 辅助开发流程快速完成可运行原型。”
- “项目将补充代码仓库、截图、视频或运行记录作为证据。”

避免：

- “精通全部自动驾驶技术栈”
- “拥有行业级项目成果”
- “顶尖机器人算法专家”
- “只靠 vibe coding 完成复杂系统”

## GitHub Pages Deployment Direction

目标是使用 GitHub Pages 的 `github.io` 域名展示。

建议方式：

- 创建仓库：`<github-username>.github.io`
- 将 `index.html`、`styles.css`、`script.js` 放在仓库根目录。
- Pages 发布源使用 `main` 分支根目录。
- 发布后访问：`https://<github-username>.github.io/`

GitHub 官方 Quickstart 说明用户站点仓库名应为 `username.github.io`，其中 `username` 替换为自己的 GitHub 用户名。GitHub Pages 也支持从指定分支发布，源目录可选择仓库根目录 `/` 或 `/docs`。如果当前站点继续保持纯静态文件，最简单的方式是直接从根目录发布。

注意：GitHub Pages 站点面向互联网公开展示。不要放手机号、住址、身份证件、学校内部资料、未公开项目代码或不希望公开的敏感信息。

参考：

- GitHub Pages Quickstart: https://docs.github.com/en/pages/quickstart
- Configuring a publishing source: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Current First Version

当前已生成一个纯静态框架：

- `index.html`
- `styles.css`
- `script.js`

它包含：

- 首屏候选人定位
- 能力矩阵
- 项目展示占位
- 技术栈板块
- 经历时间线
- 联系方式
- 深浅色切换
- 响应式布局

## Next Content Collection

后续补内容时，优先准备这些材料：

- 真实姓名和一句话求职定位
- 目标岗位关键词
- 1-3 个项目名称
- 每个项目的代码仓库、截图、视频或运行记录
- 你在项目中具体做了什么
- 使用过的机器人 / 自动驾驶 / 无人机工具链
- GitHub 链接
- 邮箱
- 简历 PDF

## Next Design Pass

等真实内容补齐后再做整体优化：

- 根据项目素材调整版式
- 为重点项目增加截图或视频区域
- 优化首屏文案
- 增加 SEO 与 Open Graph 信息
- 检查移动端长文本换行
- 部署到 GitHub Pages 并进行线上验证
