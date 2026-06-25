# Resume Website Design Prompt

## Core Brief

为一名研究生制作秋招个人简历介绍网站。候选人目标方向不是泛前端/后端，而是偏自动驾驶、无人机、规划控制、机器人 VLA 运控等机器人与智能系统开发岗位。网站当前阶段只需要精美框架和可替换占位内容，真实项目、链接、截图、视频、简历 PDF 后续再补。

## Candidate Positioning

- 候选人更偏开发岗，不主打论文或突出的科研结果。
- 重点表达工程能力、系统实现能力、开源项目复现/改造能力、仿真与工具链整合能力。
- 不直接大字强调 “vibe coding”，而是通过网站本身的完成度、响应式、交互细节、结构清晰度和可部署性间接证明 AI 辅助开发与快速产品化能力。
- 表述应稳健，避免夸大成果。可以使用 “AI-assisted development workflow”“从需求拆解到原型实现与部署展示的闭环”等措辞。

## Target Audience

- 秋招 HR
- 自动驾驶 / 机器人 / 无人机方向技术面试官
- 对工程落地、工具链熟悉度、学习能力和项目复现能力感兴趣的招聘方

## Visual Direction

做成专业、克制、有工程感的个人简历站，而不是营销式 landing page。

关键词：

- Robotics cockpit
- Autonomous systems console
- Clean engineering dashboard
- Technical but readable
- Mature graduate candidate
- Static portfolio, deployable to GitHub Pages

避免：

- 泛 AI 紫色渐变风
- 过度花哨动画
- 夸张卡片堆叠
- 过度营销话术
- 把 “vibe coding” 当成主标题
- 用论文主页风格包装一个开发岗候选人

## Page Structure

1. Hero
   - 姓名占位
   - 一句话定位：自动驾驶 / 无人机 / 规划控制 / 机器人方向工程开发候选人
   - 简短说明：关注从感知输入、规划决策到控制执行的工程闭环
   - CTA：查看项目、联系我

2. Profile
   - 80-120 字个人简介
   - 明确说明研究生身份、目标方向、工程能力、网站用途

3. Capability Map
   - 规划与控制
   - 机器人系统工程
   - 自动驾驶与无人机
   - 快速产品化与 AI 辅助开发流程

4. Selected Work
   - 先用项目占位
   - 后续替换成 1-3 个真实项目
   - 每个项目强调：背景、你做了什么、改动了什么、如何验证、有什么材料

5. Toolchain
   - Core: C++ / Python / Linux / Git
   - Robotics: ROS / 仿真平台 / 消息流 / 系统调试
   - Autonomy: 规划控制 / 轨迹 / 自动驾驶或无人机场景
   - Delivery: 前端展示 / 部署 / 文档 / 可复现 demo

6. Experience Timeline
   - 秋招目标
   - 项目经历
   - 能力积累

7. Contact
   - Email
   - GitHub
   - Resume PDF
   - 项目视频或博客链接

## Interaction Requirements

- 支持桌面和移动端响应式布局。
- 导航清晰，支持锚点跳转。
- 可有轻量深浅色切换。
- 可以有轻微滚动显现，但不要影响阅读。
- 所有真实链接未补之前应使用禁用状态或明显占位，避免空链接。

## Technical Constraints

- 优先纯静态 HTML / CSS / JavaScript。
- 不需要后端。
- 不需要复杂构建流程。
- 目标部署到 GitHub Pages 的 `github.io` 域名。
- 文件结构应方便直接放到 `<username>.github.io` 仓库根目录。

## Tone Of Copy

稳健、自信、清楚，不要包装过度。

推荐表达：

- “工程开发候选人”
- “系统复现与二次改造”
- “仿真验证”
- “工具链整合”
- “从需求拆解到原型实现与部署展示”
- “可运行、可展示、可复现”

避免表达：

- “精通所有机器人技术”
- “顶级自动驾驶专家”
- “颠覆式 AI 开发”
- “只靠 vibe coding 完成”

## Expected Output

输出一个精美但可维护的个人简历网站框架。第一版以结构、视觉、占位内容和部署友好性为主，不需要填入最终真实内容。后续阶段再补项目材料、简历 PDF、GitHub 链接、视频截图，并做整体优化。
