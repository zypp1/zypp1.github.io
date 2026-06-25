/**
 * 是否启用了“减弱动效”。带 SSR 守护,可在模块作用域安全调用。
 * 全站统一从此导入,避免 media-query 字符串散落多处。
 */
export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
