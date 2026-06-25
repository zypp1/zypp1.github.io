import { content } from '../../data/content'
import { MaskText } from '../ui/MaskText'
import { Reveal } from '../ui/Reveal'
import styles from './Contact.module.css'

export function Contact() {
  const { email, links } = content.contact

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="eyebrow">{content.contact.eyebrow}</p>
        <h2 className={styles.title}>
          <MaskText text={content.contact.title} />
        </h2>
        <Reveal delay={0.1}>
          <p className={styles.intro}>{content.contact.intro}</p>
        </Reveal>

        <Reveal delay={0.15} className={styles.emailRow}>
          {email.href ? (
            <a className={styles.email} href={email.href}>
              {email.value}
            </a>
          ) : (
            <span className={`${styles.email} ${styles.disabled}`} aria-disabled="true" title="占位,待补充">
              {email.value}
              <span className="sr-only">(待补充)</span>
            </span>
          )}
        </Reveal>

        <Reveal delay={0.2} className={styles.links} stagger={0.06}>
          {links.map((l, i) =>
            l.href ? (
              <a key={i} className={styles.linkItem} href={l.href} target="_blank" rel="noreferrer">
                <span className={styles.linkLabel}>{l.label}</span>
                <span className={styles.linkValue}>
                  {l.value} ↗
                </span>
              </a>
            ) : (
              <span key={i} className={`${styles.linkItem} ${styles.disabled}`} aria-disabled="true" title="占位,待补充">
                <span className={styles.linkLabel}>{l.label}</span>
                <span className={styles.linkValue}>{l.value}</span>
                <span className="sr-only">(待补充)</span>
              </span>
            ),
          )}
        </Reveal>
      </div>
    </section>
  )
}
