import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { prefersReducedMotion } from '../../lib/motion'
import { content } from '../../data/content'
import { MaskText } from '../ui/MaskText'
import { Reveal } from '../ui/Reveal'
import styles from './Experience.module.css'

export function Experience() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const line = root.current?.querySelector('[data-line]')
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: root.current,
              start: 'top 65%',
              end: 'bottom 70%',
              scrub: true,
            },
          },
        )
      }
    },
    { scope: root },
  )

  return (
    <section id="experience" ref={root} className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{content.experience.eyebrow}</p>
          <h2 className="section-title">
            <MaskText text={content.experience.title} />
          </h2>
          <p className="section-intro">{content.experience.intro}</p>
        </div>

        <div className={styles.timeline}>
          <span className={styles.line} aria-hidden>
            <span className={styles.lineFill} data-line />
          </span>

          <div className={styles.entries}>
            {content.experience.entries.map((e, i) => (
              <Reveal key={i} className={styles.entry}>
                <div className={styles.entryHead}>
                  <span className={styles.date}>{e.date}</span>
                  <span className={styles.org}>{e.org}</span>
                </div>
                <h3 className={styles.entryTitle}>{e.title}</h3>
                <p className={styles.entryDesc}>{e.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
