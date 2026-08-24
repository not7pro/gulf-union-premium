"use client";

import styles from "./StatsSection.module.css";
import AnimatedCounter from "./AnimatedCounter";

export default function StatsSection() {
  return (
    <section className={styles.scaleSection} aria-label="Gulf Union Foods key statistics">
      <div className={styles.layout}>
        
        <div className={styles.visual}>
          <img 
            src="https://gulf-union.com/images/boriginal%20grp.png" 
            alt="Gulf Union Original brand product lineup showing various juice formats" 
            className={styles.image}
            loading="lazy"
          />
        </div>

        <div className={styles.dataSequence}>
          <div>
            <span className="eyebrow" style={{ marginBottom: '40px' }}>SCALE & PRECISION</span>
          </div>

          <div className={styles.dataBlock}>
            <div className={styles.number}>
              <AnimatedCounter from={0} to={65000} duration={2.5} />
            </div>
            <div className={styles.label}>TOTAL FACILITY AREA (m²)</div>
          </div>

          <div className={styles.dataBlock}>
            <div className={styles.number}>
              <AnimatedCounter from={0} to={17} duration={1.5} />
            </div>
            <div className={styles.label}>PRODUCTION LINES</div>
          </div>

          <div className={styles.dataBlock}>
            <div className={styles.number}>
              <AnimatedCounter from={0} to={500} duration={2} suffix="M" />
            </div>
            <div className={styles.label}>LITERS / YEAR</div>
          </div>

          <div className={styles.dataBlock}>
            <div className={styles.number}>
              <AnimatedCounter from={0} to={1300} duration={2} suffix="+" />
            </div>
            <div className={styles.label}>EMPLOYEES WORLDWIDE</div>
          </div>
          
          <div className={styles.dataBlock}>
            <div className={styles.number}>
              <AnimatedCounter from={0} to={42} duration={1.5} suffix="+" />
            </div>
            <div className={styles.label}>COUNTRIES PRESENT</div>
          </div>

        </div>
      </div>

      {/* SEO / no-JS fallback */}
      <noscript>
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <p>65,000 m² Total Facility Area · 17 Production Lines · 500M Liters/Year · 1,300+ Employees · 42+ Countries</p>
        </div>
      </noscript>
    </section>
  );
}
