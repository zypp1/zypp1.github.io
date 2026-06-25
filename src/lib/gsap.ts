/**
 * GSAP 插件注册中心。整个应用只在此注册一次(registerPlugin 是幂等的)。
 * 在 main.tsx 顶部 `import './lib/gsap'` 触发副作用,保证在任何组件
 * 的 useGSAP/useEffect 运行前插件已就绪。
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export { gsap, ScrollTrigger, useGSAP }
