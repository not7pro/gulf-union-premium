"use client";

import styles from "./StatsSection.module.css";
import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";

export default function StatsSection() {
  return (
    <section className={styles.scaleSection} aria-label="Gulf Union Foods key statistics">
      <div className={styles.layout}>
        
        <ScrollReveal direction="left" distance={60} duration={1000}>
          <div className={styles.visual}>
            <img 
              src="https://gulf-union.com/images/boriginal%20grp.png" 
              alt="Gulf Union Original brand product lineup" 
              className={styles.image}
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <div className={styles.dataSequence}>
          <ScrollReveal delay={0}>
            <span className="eyebrow">SCALE & PRECISION</span>
            <div className="elegant-divider"></div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.dataBlock}>
              <div className={styles.number}>
                <AnimatedCounter from={0} to={65000} duration={2.5} />
              </div>
              <div className={styles.label}>TOTAL FACILITY AREA (m²)</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.dataBlock}>
              <div className={styles.number}>
                <AnimatedCounter from={0} to={17} duration={1.5} />
              </div>
              <div className={styles.label}>PRODUCTION LINES</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className={styles.dataBlock}>
              <div className={styles.number}>
                <AnimatedCounter from={0} to={500} duration={2} suffix="M" />
              </div>
              <div className={styles.label}>LITERS / YEAR</div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className={styles.dataBlock}>
              <div className={styles.number}>
                <AnimatedCounter from={0} to={1300} duration={2} suffix="+" />
              </div>
              <div className={styles.label}>EMPLOYEES WORLDWIDE</div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={500}>
            <div className={styles.dataBlock}>
              <div className={styles.number}>
                <AnimatedCounter from={0} to={42} duration={1.5} suffix="+" />
              </div>
              <div className={styles.label}>COUNTRIES PRESENT</div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <noscript>
        <div style={{ padding: '40px', textAlign: 'center' }}>
          <p>65,000 m² Total Facility Area · 17 Production Lines · 500M Liters/Year · 1,300+ Employees · 42+ Countries</p>
        </div>
      </noscript>
    </section>
  );
}
