import { type ElementType, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { prefersReducedMotion } from '../../lib/motion'

interface MaskTextProps {
  text: string
  as?: ElementType
  className?: string
  delay?: number
  stagger?: number
  start?: string
}

/**
 * 遮罩式逐词浮现:每个词包在 overflow:hidden 容器里,从下方推入。
 * 适合大标题。中文(无空格)会作为整块浮现,同样有效。
 */
export function MaskText({
  text,
  as: Tag = 'span',
  className,
  delay = 0,
  stagger = 0.08,
  start = 'top 90%',
}: MaskTextProps) {
  const ref = useRef<HTMLElement>(null)
  const words = text.split(' ')

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return
      const targets = ref.current.querySelectorAll('[data-word]')
      if (!targets.length) return
      gsap.from(targets, {
        yPercent: 120,
        duration: 1.1,
        ease: 'power4.out',
        delay,
        stagger,
        scrollTrigger: { trigger: ref.current, start, once: true },
      })
    },
    { scope: ref },
  )

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((w, i) => (
        <span key={i} className="mask-wrap">
          <span data-word className="mask-word">
            {w}
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
