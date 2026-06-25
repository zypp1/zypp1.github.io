import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { prefersReducedMotion } from '../../lib/motion'
import { content } from '../../data/content'
import { scrollTo } from '../../lib/lenis'
import styles from './Hero.module.css'

export function Hero() {
  const root = useRef<HTMLElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const nameWords = content.hero.name.split(' ')

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      const tl = gsap.timeline({ delay: 0.15 })
      tl.from(`.${styles.eyebrow}`, { y: 20, autoAlpha: 0, duration: 0.8, ease: 'power3.out' })
        .from(
          `.${styles.name} [data-word]`,
          { yPercent: 120, duration: 1.1, ease: 'power4.out', stagger: 0.08 },
          '-=0.4',
        )
        .from(`.${styles.positioning}`, { y: 24, autoAlpha: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6')
        .from(`.${styles.desc}`, { y: 20, autoAlpha: 0, duration: 0.9, ease: 'power3.out' }, '-=0.6')
        .from(
          `.${styles.ctas} > *`,
          { y: 18, autoAlpha: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
          '-=0.5',
        )
        .from(`.${styles.cue}`, { autoAlpha: 0, duration: 0.8 }, '-=0.3')

      // 滚动视差:整块上移淡出
      gsap.to(inner.current, {
        yPercent: -16,
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    },
    { scope: root },
  )

  return (
    <section id="hero" ref={root} className={styles.hero}>
      <div ref={inner} className={`container ${styles.inner}`}>
        <p className={`eyebrow ${styles.eyebrow}`}>{content.hero.eyebrow}</p>

        <h1 className={styles.name}>
          {nameWords.map((w, i) => (
            <span key={i} className="mask-wrap">
              <span data-word className="mask-word">
                {w}
              </span>
              {i < nameWords.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>

        <p className={styles.positioning}>{content.hero.positioning}</p>
        <p className={styles.desc}>{content.hero.description}</p>

        <div className={styles.ctas}>
          <a
            href={content.hero.primaryCta.target}
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault()
              scrollTo(content.hero.primaryCta.target)
            }}
          >
            {content.hero.primaryCta.label}
          </a>
          <a
            href={content.hero.secondaryCta.target}
            className="btn"
            onClick={(e) => {
              e.preventDefault()
              scrollTo(content.hero.secondaryCta.target)
            }}
          >
            {content.hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <div className={styles.cue} aria-hidden>
        <span>scroll</span>
        <span className={styles.cueLine} />
      </div>
    </section>
  )
}
