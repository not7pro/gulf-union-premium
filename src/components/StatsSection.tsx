"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import styles from "./StatsSection.module.css";

const stats = [
  { value: 1300, suffix: "+", label: "Employees Worldwide" },
  { value: 42, suffix: "+", label: "Countries Present" },
  { value: 65000, suffix: " m²", label: "Total Facility Area" },
  { value: 500, suffix: "M", label: "Liters / Year" },
];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={styles.intro}
        >
          <h2 className="text-section-title">Scale & Precision.</h2>
          <p className={styles.desc}>
            Since 1995, Gulf Union Foods has grown into a regional powerhouse. 
            Our commitment to quality is reflected in our massive infrastructure and rigorous quality control.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={styles.card}
            >
              <div className={styles.number}>
                <AnimatedCounter from={0} to={stat.value} duration={2.5} suffix={stat.suffix} />
              </div>
              <div className={styles.label}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
