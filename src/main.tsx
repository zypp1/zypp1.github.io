import './lib/gsap' // 注册 GSAP 插件(全应用一次)
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(<App />)
