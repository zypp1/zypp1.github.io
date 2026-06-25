import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // User site (<username>.github.io) serves from the domain root -> base '/'.
  // If you instead deploy to a project page (username.github.io/<repo>),
  // set base: '/<repo>/' here so assets resolve correctly.
  base: '/',
  build: {
    rollupOptions: {
      output: {
        // 把重量级 vendor 拆成独立长缓存 chunk,便于并行加载;
        // gsap 必须保持 eager(Hero 首屏动画要用),这里只做缓存分离。
        // 用函数式按路径归组,避免 react-dom 这种子路径漏归组。
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('gsap') || id.includes('@gsap')) return 'gsap'
          if (id.includes('lenis')) return 'lenis'
          if (id.includes('react') || id.includes('scheduler')) return 'react'
        },
      },
    },
  },
})
