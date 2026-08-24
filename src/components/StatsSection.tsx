"use client";

import styles from "./StatsSection.module.css";
import AnimatedCounter from "./AnimatedCounter";

export default function StatsSection() {
  return (
    <section className={styles.scaleSection}>
      <div className={styles.layout}>
        
        <div className={styles.visual}>
          <img 
            src="https://images.unsplash.com/photo-1563906646549-ee9f83696773?q=80&w=1500&auto=format&fit=crop" 
            alt="Manufacturing Facility" 
            className={styles.image}
          />
        </div>

        <div className={styles.dataSequence}>
          <div>
            <span className="eyebrow" style={{ marginBottom: '40px' }}>SCALE</span>
          </div>

          <div className={styles.dataBlock}>
            <div className={styles.number}>
              <AnimatedCounter end={65000} duration={2000} />
            </div>
            <div className={styles.label}>TOTAL FACILITY AREA (m²)</div>
          </div>

          <div className={styles.dataBlock}>
            <div className={styles.number}>
              <AnimatedCounter end={17} duration={1500} />
            </div>
            <div className={styles.label}>PRODUCTION LINES</div>
          </div>

          <div className={styles.dataBlock}>
            <div className={styles.number}>
              <AnimatedCounter end={500} duration={2000} suffix="M" />
            </div>
            <div className={styles.label}>LITERS / YEAR</div>
          </div>

          <div className={styles.dataBlock}>
            <div className={styles.number}>
              <AnimatedCounter end={1300} duration={2000} suffix="+" />
            </div>
            <div className={styles.label}>EMPLOYEES</div>
          </div>
          
          <div className={styles.dataBlock}>
            <div className={styles.number}>
              <AnimatedCounter end={42} duration={1500} suffix="+" />
            </div>
            <div className={styles.label}>GLOBAL MARKETS</div>
          </div>

        </div>
      </div>
    </section>
  );
}
