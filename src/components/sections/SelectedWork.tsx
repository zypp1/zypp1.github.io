import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { prefersReducedMotion } from '../../lib/motion'
import { content } from '../../data/content'
import { MaskText } from '../ui/MaskText'
import { Reveal } from '../ui/Reveal'
import styles from './SelectedWork.module.css'

export function SelectedWork() {
  const root = useRef<HTMLElement>(null)
  const featured = content.work.projects.find((p) => p.status === 'featured')!
  const secondary = content.work.projects.filter((p) => p.status === 'secondary')

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const media = root.current?.querySelectorAll('[data-parallax]')
      media?.forEach((el) => {
        gsap.to(el, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="work" ref={root} className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{content.work.eyebrow}</p>
          <h2 className="section-title">
            <MaskText text={content.work.title} />
          </h2>
          <p className="section-intro">{content.work.intro}</p>
        </div>

        <Reveal className={styles.featured}>
          <div className={styles.featuredMedia}>
            <div className={styles.mediaInner} data-parallax>
              <span className={styles.mediaLabel}>{featured.year} · FEATURED</span>
              <span className={styles.mediaName}>{featured.name}</span>
            </div>
          </div>

          <div className={styles.featuredBody}>
            <div className={styles.featuredHead}>
              <span className={styles.role}>{featured.role}</span>
              <span className={styles.year}>{featured.year}</span>
            </div>
            <h3 className={styles.featuredTitle}>{featured.name}</h3>
            <p className={styles.tagline}>{featured.tagline}</p>
            <p className={styles.background}>{featured.background}</p>
            <ul className={styles.contrib}>
              {featured.contributions.map((c, i) => (
                <li key={i}>
                  <span className={styles.bullet} aria-hidden>
                    —
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <p className={styles.validation}>
              <span className={styles.validationLabel}>验证</span>
              {featured.validation}
            </p>
            <div className={styles.stack}>
              {featured.stack.map((s, i) => (
                <span key={i} className="tag">
                  {s}
                </span>
              ))}
            </div>
            <div className={styles.materials}>
              {featured.materials.map((m, i) =>
                m.href ? (
                  <a key={i} href={m.href} className={styles.material} target="_blank" rel="noreferrer">
                    {m.label} ↗
                  </a>
                ) : (
                  <span key={i} className={styles.materialDisabled} aria-disabled="true" title="占位,待补充">
                    {m.label}
                    <span className="sr-only">(待补充)</span>
                  </span>
                ),
              )}
            </div>
          </div>
        </Reveal>

        <div className={styles.secondary}>
          {secondary.map((p, i) => (
            <Reveal key={p.id} className={styles.card} delay={0.05 * i}>
              <div className={styles.cardTop}>
                <span className={styles.role}>{p.role}</span>
                <span className={styles.year}>{p.year}</span>
              </div>
              <h3 className={styles.cardTitle}>{p.name}</h3>
              <p className={styles.tagline}>{p.tagline}</p>
              <p className={styles.background}>{p.background}</p>
              <p className={styles.cardValidation}>{p.validation}</p>
              <div className={styles.stack}>
                {p.stack.map((s, j) => (
                  <span key={j} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
