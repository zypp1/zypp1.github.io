import { type ElementType, type ReactNode, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { prefersReducedMotion } from '../../lib/motion'

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  /** 向上偏移距离(px) */
  y?: number
  /** 延迟(s) */
  delay?: number
  /** 子元素逐个出现的间隔(s);设置后对直接子元素做 stagger */
  stagger?: number
  duration?: number
  start?: string
}

/**
 * 通用入场动画:元素进入视口时从下方淡入 + 轻微上移。
 * 设置 stagger 时,对直接子元素逐个入场。
 */
export function Reveal({
  children,
  as: Tag = 'div',
  className,
  y = 28,
  delay = 0,
  stagger,
  duration = 1,
  start = 'top 85%',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return
      const targets = stagger ? ref.current.children : ref.current
      gsap.from(targets, {
        y,
        autoAlpha: 0,
        duration,
        delay,
        ease: 'power3.out',
        stagger: stagger ?? 0,
        scrollTrigger: { trigger: ref.current, start, once: true },
      })
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  )
}
