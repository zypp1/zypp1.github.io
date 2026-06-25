import type Lenis from 'lenis'

/**
 * Lenis 单例持有者。SmoothScroll 组件在挂载时写入实例,
 * Nav 等组件通过 scrollTo 触发锚点平滑跳转。
 */
let instance: Lenis | null = null

export function setLenis(lenis: Lenis | null) {
  instance = lenis
}

export function getLenis() {
  return instance
}

/** 平滑滚动到锚点 / 位置。offset 用于避开固定导航高度。 */
export function scrollTo(target: string | number | HTMLElement, offset = -72) {
  if (instance) {
    instance.scrollTo(target, { offset, duration: 1.2 })
    return
  }
  // 降级:无 Lenis 时(如 reduced-motion)用原生滚动
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' })
  } else if (typeof target === 'string') {
    const el = document.querySelector(target) as HTMLElement | null
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }
}
