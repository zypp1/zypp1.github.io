/**
 * 网站内容唯一来源。
 * 补真实项目、链接、简历 PDF、姓名邮箱时,基本只改这个文件,不需要动动效组件。
 *
 * 占位约定:
 *  - 带有 `// TODO:` 的字段是占位,需替换为真实内容。
 *  - 链接 href 为 null 时,前端会渲染为禁用态占位,不会出现死链。
 *  - 不要在这里放手机号、住址、身份证件等敏感信息(GitHub Pages 面向公网)。
 */

export interface NavLink {
  id: string
  label: string
}

export interface Capability {
  index: string
  title: string
  tag: string
  description: string
  points: string[]
}

export interface ProjectMaterial {
  label: string
  href: string | null
}

export interface Project {
  id: string
  name: string
  tagline: string
  year: string
  role: string
  background: string
  contributions: string[]
  validation: string
  stack: string[]
  status: 'featured' | 'secondary'
  materials: ProjectMaterial[]
}

export interface ToolchainGroup {
  title: string
  items: string[]
}

export interface TimelineEntry {
  date: string
  title: string
  org: string
  description: string
}

export interface ContactLink {
  label: string
  value: string
  href: string | null
}

export interface SiteContent {
  meta: {
    name: string
    role: string
  }
  nav: NavLink[]
  hero: {
    eyebrow: string
    name: string
    positioning: string
    description: string
    primaryCta: { label: string; target: string }
    secondaryCta: { label: string; target: string }
  }
  profile: {
    eyebrow: string
    title: string
    paragraphs: string[]
    facts: { label: string; value: string }[]
  }
  capabilities: {
    eyebrow: string
    title: string
    intro: string
    items: Capability[]
  }
  work: {
    eyebrow: string
    title: string
    intro: string
    projects: Project[]
  }
  toolchain: {
    eyebrow: string
    title: string
    intro: string
    groups: ToolchainGroup[]
  }
  experience: {
    eyebrow: string
    title: string
    intro: string
    entries: TimelineEntry[]
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    email: { value: string; href: string | null }
    links: ContactLink[]
  }
  footer: {
    note: string
  }
}

export const content: SiteContent = {
  meta: {
    name: '候选人姓名', // TODO: 替换为真实姓名
    role: '工程开发候选人',
  },

  nav: [
    { id: 'profile', label: 'Profile' },
    { id: 'capabilities', label: '能力' },
    { id: 'work', label: '项目' },
    { id: 'toolchain', label: '工具链' },
    { id: 'experience', label: '经历' },
    { id: 'contact', label: '联系' },
  ],

  hero: {
    eyebrow: '秋招 2026 · 工程开发候选人',
    name: '候选人姓名', // TODO: 替换为真实姓名
    positioning: '面向自动驾驶、无人机、规划控制与机器人方向的工程开发候选人',
    description:
      '关注机器人系统从感知输入、规划决策到控制执行的工程闭环,基于开源项目、仿真工具链与 AI 辅助开发流程,快速完成可运行、可展示、可复现的原型。',
    primaryCta: { label: '查看项目', target: '#work' },
    secondaryCta: { label: '联系我', target: '#contact' },
  },

  profile: {
    eyebrow: 'Profile',
    title: '工程闭环,可运行、可展示、可复现',
    paragraphs: [
      '研究生在读,目标秋招开发岗,方向集中在自动驾驶、无人机、规划控制与机器人系统工程。',
      '更偏工程实现而非纯科研:擅长基于开源项目进行复现、二次改造与仿真验证,熟悉从需求拆解到原型实现与部署展示的完整流程。',
      '这个网站本身也是一次 AI 辅助开发与快速产品化的实践——用工程化、可维护的方式,搭出一个动态、丝滑、可部署的个人展示站。',
    ],
    facts: [
      { label: '身份', value: '研究生在读' },
      { label: '目标', value: '秋招 2026 · 开发岗' },
      { label: '方向', value: '自动驾驶 / 无人机 / 规划控制 / 机器人' },
      { label: '本站用途', value: '个人展示与项目入口' },
    ],
  },

  capabilities: {
    eyebrow: 'Capability Map',
    title: '能力图谱',
    intro: '围绕规划控制、机器人系统、自动驾驶与无人机,以及快速产品化四个方向组织。',
    items: [
      {
        index: '01',
        title: '规划与控制',
        tag: 'Planning & Control',
        description: '轨迹规划、MPC 与反馈控制、运动约束建模与闭环调试。',
        points: ['MINCO / 多项式轨迹', 'MPC(ACADOS / 自研)', 'SO(3) on-manifold 控制', '仿真闭环验证'],
      },
      {
        index: '02',
        title: '机器人系统工程',
        tag: 'Robotics Systems',
        description: 'ROS 节点编排、消息流设计、仿真集成与系统级调试。',
        points: ['ROS / MAVROS 工具链', '仿真平台联调', '状态机与控制回路', '多模块系统集成'],
      },
      {
        index: '03',
        title: '自动驾驶与无人机',
        tag: 'Autonomy',
        description: '车辆横纵向控制、轨迹跟踪,以及无人机轨迹跟踪与起降。',
        points: ['车辆横纵向 MPC', '无人机轨迹跟踪', '规划-控制接口', '场景化验证'],
      },
      {
        index: '04',
        title: '快速产品化与 AI 辅助开发',
        tag: 'Delivery',
        description: '从需求拆解到原型实现与部署展示的闭环,工具链整合与可复现 demo。',
        points: ['AI 辅助开发流程', '需求拆解与原型', '前端展示与部署', '文档与可复现'],
      },
    ],
  },

  work: {
    eyebrow: 'Selected Work',
    title: '项目展示',
    intro: '当前为占位项目,后续替换为真实项目材料:背景、我做了什么、改动了什么、如何验证、有什么证据。',
    projects: [
      {
        id: 'on-manifold-mpc',
        name: 'On-Manifold MPC 无人机轨迹跟踪',
        tagline: '基于流形运算的四旋翼轨迹跟踪 MPC',
        year: '2025',
        role: '复现 / 二次改造 / 仿真验证',
        background:
          '复现并改造一套基于 SO(3) 流形运算的四旋翼 MPC 控制器,用于轨迹跟踪,跑通起降-跟踪-降落的完整流程。',
        contributions: [
          '梳理 on-manifold 数学与 Hopf fibration 实现',
          '接入 ROS / MAVROS 与仿真,构建 Takeoff → Command → Land 状态机',
          '调参 MPC 权重、推力归一化与悬停百分比,改善跟踪精度',
          '接入多项式轨迹规划器,支持文件 / 话题 / 悬停三种参考输入',
        ],
        validation: '仿真中完成跟踪闭环,记录跟踪误差与控制输入曲线。',
        stack: ['C++', 'ROS', 'MAVROS', 'Eigen', 'MPC'],
        status: 'featured',
        materials: [
          { label: '代码仓库', href: null }, // TODO: 替换为 GitHub 链接
          { label: '运行记录', href: null },
          { label: '演示视频', href: null },
        ],
      },
      {
        id: 'vehicle-mpc',
        name: '车辆横纵向 MPC(ACADOS)',
        tagline: '基于 ACADOS 的车辆横纵向运动规划控制',
        year: '2025',
        role: '建模 / 求解器封装 / 验证',
        background:
          '使用 ACADOS 求解器实现 5 状态 2 输入的车辆横纵向 MPC,封装可复用的求解器接口。',
        contributions: [
          '搭建车辆动力学模型与可组合的代价 / 约束组件',
          '封装 AcadosMpcSolver,支持 warm-start 与结果提取',
          '调试 SQP 收敛性、可行性与残差指标',
        ],
        validation: '参考轨迹跟踪收敛,输出 SQP 迭代次数与各项残差。',
        stack: ['C++', 'ACADOS', 'Eigen', 'MPC'],
        status: 'secondary',
        materials: [{ label: '代码仓库', href: null }],
      },
      {
        id: 'planner-integration',
        name: '规划-控制工具链整合',
        tagline: '开源规划器复现与控制接口适配',
        year: '2025',
        role: '复现 / 适配 / 联调',
        background: '复现开源轨迹规划器并适配到自研控制接口,跑通规划到控制的闭环。',
        contributions: [
          '复现并理解开源轨迹规划实现',
          '设计规划-控制消息接口与数据格式',
          '仿真联调与边界情况处理',
        ],
        validation: '仿真中跑通规划到控制的完整闭环。',
        stack: ['C++', 'ROS', 'Planning'],
        status: 'secondary',
        materials: [{ label: '代码仓库', href: null }],
      },
    ],
  },

  toolchain: {
    eyebrow: 'Toolchain',
    title: '技术栈与工具链',
    intro: '按核心编程、机器人与仿真、自动驾驶与无人机、展示与交付四类组织。',
    groups: [
      { title: 'Core', items: ['C++', 'Python', 'Linux', 'Git', 'CMake', 'Shell'] },
      { title: 'Robotics', items: ['ROS', 'MAVROS', 'Gazebo / 仿真', '消息流设计', '系统调试', 'Eigen'] },
      { title: 'Autonomy', items: ['轨迹规划', 'MPC', '反馈控制', '自动驾驶', '无人机', '仿真验证'] },
      { title: 'Delivery', items: ['前端展示', 'GitHub Pages 部署', '文档', '可复现 demo', 'AI 辅助开发'] },
    ],
  },

  experience: {
    eyebrow: 'Experience',
    title: '经历时间线',
    intro: '学习与项目时间线,以及秋招目标节点。',
    entries: [
      {
        date: '2026',
        title: '秋招求职',
        org: '目标节点',
        description: '目标:自动驾驶 / 无人机 / 规划控制 / 机器人方向开发岗。',
      },
      {
        date: '2025',
        title: 'On-Manifold MPC 无人机轨迹跟踪',
        org: '项目',
        description: '复现、二次改造与仿真验证,跑通完整起降与跟踪流程。',
      },
      {
        date: '2025',
        title: '车辆横纵向 MPC(ACADOS)',
        org: '项目',
        description: '车辆动力学建模与求解器封装,验证跟踪收敛性。',
      },
      {
        date: '2025',
        title: '规划-控制工具链整合',
        org: '项目',
        description: '开源规划器复现与控制接口适配,跑通规划-控制闭环。',
      },
      {
        date: '在读',
        title: '研究生',
        org: '学历',
        description: '机器人与智能系统方向,持续积累工程能力。',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: '联系我',
    intro: '欢迎通过邮箱或 GitHub 联系,完整简历与项目材料可在沟通后提供。',
    email: { value: 'your.email@example.com', href: null }, // TODO: 替换为真实邮箱,href 设为 `mailto:xxx`
    links: [
      { label: 'GitHub', value: 'github.com/your-username', href: null }, // TODO: 替换为真实 GitHub 链接
      { label: '简历 PDF', value: 'resume.pdf', href: null }, // TODO: 放入 public/ 后设为 `/resume.pdf`
      { label: '项目视频', value: 'demo', href: null },
      { label: '博客', value: 'blog', href: null },
    ],
  },

  footer: {
    note: '© 2026 候选人姓名 · 本站为个人求职展示,部分内容为占位项,持续更新中。',
  },
}
