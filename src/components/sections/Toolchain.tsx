import { content } from '../../data/content'
import { MaskText } from '../ui/MaskText'
import { Reveal } from '../ui/Reveal'
import styles from './Toolchain.module.css'

export function Toolchain() {
  return (
    <section id="toolchain" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{content.toolchain.eyebrow}</p>
          <h2 className="section-title">
            <MaskText text={content.toolchain.title} />
          </h2>
          <p className="section-intro">{content.toolchain.intro}</p>
        </div>

        <div className={styles.grid}>
          {content.toolchain.groups.map((g, i) => (
            <Reveal key={g.title} className={styles.group} delay={i * 0.06}>
              <h3 className={styles.groupTitle}>{g.title}</h3>
              <div className={styles.chips}>
                {g.items.map((it, j) => (
                  <span key={j} className="tag">
                    {it}
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
