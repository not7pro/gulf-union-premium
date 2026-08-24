import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop" 
          alt="Gulf Union Factory Environment" 
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={styles.content}>
        <span className={styles.eyebrow}>GULF UNION FOODS</span>
        <h1 className={styles.headline}>
          BUILT IN SAUDI ARABIA.<br/>
          ENJOYED AROUND THE WORLD.
        </h1>
        <Link href="/who-we-are" className={styles.cta}>
          EXPLORE OUR STORY
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </section>
  );
}
