"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Timeline.module.css";

const milestones = [
  { year: "1995", title: "COMPANY FOUNDING", desc: "Established Gulf Union Foods Co to bring quality beverages to the market.", category: "FOUNDATION" },
  { year: "1999", title: "PLANT 1", desc: "Launched our first production facility, laying the foundation for strong and sustainable growth.", category: "MANUFACTURING" },
  { year: "2000", title: "ORIGINAL®", desc: "Introduced our flagship juice brand to families nationwide.", category: "BRAND" },
  { year: "2003", title: "CAPTAIN®", desc: "Brought kids a fun, fruity drinks.", category: "BRAND" },
  { year: "2004", title: "AL QOBTAN®", desc: "Affordable juice brand created to serve every household.", category: "BRAND" },
  { year: "2005", title: "PLANT 1 EXPANSION", desc: "Major facility expansion inaugurated by Crown Prince Salman bin Abdulaziz Al Saud.", category: "EXPANSION" },
  { year: "2010", title: "PLANT 3", desc: "Enhanced our capabilities by securing self-sufficiency in primary plastic packaging materials.", category: "MANUFACTURING" },
  { year: "2011", title: "JORDAN BRANCH", desc: "Expanded regional presence with a new office in Jordan.", category: "EXPANSION" },
  { year: "2012", title: "PLANT 4", desc: "Strengthened and diversified production by entering the world of carton packs.", category: "INNOVATION" },
  { year: "2015", title: "PLANT 2", desc: "Upgraded operations and diversified production to meet growing regional and global demand.", category: "MANUFACTURING" },
  { year: "2017", title: "KLASSE®", desc: "Entered the non-alcoholic beer market with Klasse® brand.", category: "INNOVATION" },
  { year: "2018", title: "SPLASH®", desc: "Launched sparkling juice to refresh every occasion.", category: "BRAND" },
  { year: "2019", title: "ORIGINAL® ZERO", desc: "Introduced sugar-free, premium juice sub-brand under the Original® portfolio.", category: "INNOVATION" },
  { year: "2020", title: "COBRA®", desc: "Stepped into the energy drink segment with Cobra®.", category: "BRAND" },
  { year: "2023", title: "ORI®", desc: "Expanded our beverage portfolio with Ori® soft drinks.", category: "INNOVATION" }
];

export default function Timeline() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  return (
    <section ref={targetRef} className={styles.carousel}>
      <div className={styles.stickyContainer}>
        <div className={styles.header}>
          <h2 className="text-section-title">Our Story</h2>
          <p>A legacy of quality since 1995.</p>
        </div>
        
        <motion.div style={{ x }} className={styles.track}>
          {milestones.map((item, index) => (
            <div key={item.year} className={styles.item}>
              <div className={styles.category}>{item.category}</div>
              <div className={styles.year}>{item.year}</div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
              
              <div className={styles.line}>
                <div className={styles.dot}></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
