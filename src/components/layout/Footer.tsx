import { content } from '../../data/content'
import { scrollTo } from '../../lib/lenis'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <span className={styles.mark} aria-hidden>
            ◆
          </span>
          <button className={styles.toTop} onClick={() => scrollTo(0)}>
            回到顶部 ↑
          </button>
        </div>
        <p className={styles.note}>{content.footer.note}</p>
      </div>
    </footer>
  )
}
