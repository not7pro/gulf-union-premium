import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Gulf Union Foods hero banner">
      <div className={styles.imageWrapper}>
        <img 
          src="https://gulf-union.com/images/brandback.jpg" 
          alt="Gulf Union Foods brand portfolio featuring Original, KLASSE, COBRA and Captain beverages" 
          className={styles.image}
          fetchPriority="high"
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        <span className={styles.eyebrow}>GULF UNION FOODS</span>
        <h1 className={styles.headline}>
          BUILT IN SAUDI ARABIA.<br/>
          ENJOYED AROUND THE WORLD.
        </h1>
        <Link href="/who-we-are" className={styles.cta} aria-label="Learn about Gulf Union Foods' story and heritage">
          EXPLORE OUR STORY
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </section>
  );
}
