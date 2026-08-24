import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  const line1 = "BUILT IN SAUDI ARABIA.".split(" ");
  const line2 = "ENJOYED AROUND THE WORLD.".split(" ");

  return (
    <section className={styles.hero} aria-label="Gulf Union Foods hero">
      <div className={styles.imageWrapper}>
        <img 
          src="https://gulf-union.com/images/brandback.jpg" 
          alt="Gulf Union Foods brand portfolio" 
          className={styles.image}
          fetchPriority="high"
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        <span className={styles.eyebrow}>GULF UNION FOODS CO. · EST. 1995</span>
        
        <h1 className={styles.headline}>
          {line1.map((word, i) => (
            <span key={`l1-${i}`} className={styles.headlineWord}>
              <span className={styles.headlineWordInner} style={{ animationDelay: `${1.0 + i * 0.08}s` }}>
                {word}
              </span>
            </span>
          ))}
          <br/>
          {line2.map((word, i) => (
            <span key={`l2-${i}`} className={styles.headlineWord}>
              <span className={styles.headlineWordInner} style={{ animationDelay: `${1.4 + i * 0.08}s` }}>
                {word}
              </span>
            </span>
          ))}
        </h1>
        
        <Link href="/who-we-are" className={styles.cta} aria-label="Explore Gulf Union Foods story">
          EXPLORE OUR STORY
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
