import { content } from '../../data/content'
import { MaskText } from '../ui/MaskText'
import { Reveal } from '../ui/Reveal'
import styles from './Profile.module.css'

export function Profile() {
  return (
    <section id="profile" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{content.profile.eyebrow}</p>
          <h2 className="section-title">
            <MaskText text={content.profile.title} />
          </h2>
        </div>

        <div className={styles.grid}>
          <Reveal className={styles.body} stagger={0.12}>
            {content.profile.paragraphs.map((p, i) => (
              <p key={i} className={styles.p} data-first={i === 0}>
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal className={styles.facts} stagger={0.08} delay={0.1}>
            {content.profile.facts.map((f, i) => (
              <div key={i} className={styles.fact}>
                <span className={styles.factLabel}>{f.label}</span>
                <span className={styles.factValue}>{f.value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
