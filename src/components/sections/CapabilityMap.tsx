import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { prefersReducedMotion } from '../../lib/motion'
import { content } from '../../data/content'
import { MaskText } from '../ui/MaskText'
import styles from './CapabilityMap.module.css'

export function CapabilityMap() {
  const root = useRef<HTMLElement>(null)
  const pinWrap = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!track.current || !pinWrap.current) return
      if (prefersReducedMotion()) return

      // 桌面端:pin 住容器,纵向滚动换算成横向位移;移动端堆叠不 pin
      const mm = gsap.matchMedia()
      mm.add('(min-width: 760px)', () => {
        const getAmount = () =>
          Math.max(0, track.current!.scrollWidth - window.innerWidth)

        gsap.to(track.current, {
          x: () => -getAmount(),
          ease: 'none',
          scrollTrigger: {
            trigger: pinWrap.current,
            start: 'top top',
            end: () => `+=${getAmount()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="capabilities" ref={root} className={styles.section}>
      <div className={`container ${styles.head}`}>
        <p className="eyebrow">{content.capabilities.eyebrow}</p>
        <h2 className="section-title">
          <MaskText text={content.capabilities.title} />
        </h2>
        <p className="section-intro">{content.capabilities.intro}</p>
      </div>

      <div ref={pinWrap} className={styles.pinWrap}>
        <div ref={track} className={styles.track}>
          {content.capabilities.items.map((c) => (
            <article key={c.index} className={styles.card}>
              <span className={styles.index} aria-hidden>
                {c.index}
              </span>
              <span className={styles.tag}>{c.tag}</span>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.description}</p>
              <ul className={styles.points}>
                {c.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
