import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { prefersReducedMotion } from '../../lib/motion'
import { content } from '../../data/content'
import { scrollTo } from '../../lib/lenis'
import styles from './Nav.module.css'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const progressRef = useRef<HTMLSpanElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)

  // 顶部滚动进度条
  useGSAP(() => {
    if (!progressRef.current) return
    if (prefersReducedMotion()) return
    gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
      },
    )
  }, { scope: progressRef })

  // 滚动时切换导航背景
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 当前可视区段高亮
  useEffect(() => {
    const ids = content.nav.map((n) => n.id)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // 移动菜单:Esc 关闭、点击外部关闭、关闭后焦点回到按钮
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuBtnRef.current?.focus()
      }
    }
    const onPointer = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  const go = (e: MouseEvent, target: string) => {
    e.preventDefault()
    setOpen(false)
    menuBtnRef.current?.focus()
    scrollTo(target)
  }

  return (
    <header ref={headerRef} className={styles.nav} data-scrolled={scrolled || open}>
      <span ref={progressRef} className={styles.progress} aria-hidden />
      <div className={`container ${styles.inner}`}>
        <a
          href="#top"
          className={styles.brand}
          onClick={(e) => {
            e.preventDefault()
            setOpen(false)
            scrollTo(0)
          }}
        >
          <span className={styles.brandMark} aria-hidden>
            ◆
          </span>
          <span>{content.meta.name}</span>
        </a>

        <nav id="primary-nav" className={styles.links} data-open={open}>
          {content.nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={styles.link}
              data-active={active === n.id}
              onClick={(e) => go(e, `#${n.id}`)}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <button
          ref={menuBtnRef}
          className={styles.menuBtn}
          aria-label="切换菜单"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
