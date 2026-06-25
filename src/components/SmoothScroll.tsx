import { type ReactNode, useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../lib/motion'
import { setLenis } from '../lib/lenis'

/**
 * 丝滑惯性滚动,并把 Lenis 的 scroll 事件接到 ScrollTrigger,
 * 让所有 ScrollTrigger 动画跟随 Lenis 的滚动进度。
 * prefers-reduced-motion 时跳过,使用原生滚动。
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })
    setLenis(lenis)

    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // 字体 display=swap 在 load 之后才换入并触发 reflow,会让 ScrollTrigger
    // 记录的 pin/scrub 位置变陈旧(横向 pin 错位直到 resize)。
    // 在 mount、load 与字体就绪时各刷新一次。
    let disposed = false
    const refresh = () => ScrollTrigger.refresh()
    refresh()
    window.addEventListener('load', refresh)
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!disposed) refresh()
      })
    }

    return () => {
      disposed = true
      window.removeEventListener('load', refresh)
      gsap.ticker.remove(raf)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return <>{children}</>
}
