"use client";

import { useState } from "react";
import styles from "./Timeline.module.css";
import ScrollReveal from "./ScrollReveal";

const MILESTONES = [
  { 
    year: "1995", 
    tag: "FOUNDATION",
    title: "The Inception in Riyadh", 
    desc: "Gulf Union Foods Co. was founded in the Kingdom of Saudi Arabia with a steadfast commitment to exceptional quality, international hygiene standards, and pioneering beverage manufacturing.",
    img: "https://gulf-union.com/images/brandback.jpg",
    metric: "01",
    metricLabel: "FIRST HEADQUARTERS"
  },
  { 
    year: "1999", 
    tag: "INFRASTRUCTURE",
    title: "Commissioning Plant 01", 
    desc: "Established our flagship 22,000 m² manufacturing plant with 6 automated high-speed production lines, setting regional standards for hygienic nectar packaging.",
    img: "https://gulf-union.com/images/boriginal%20grp.png",
    metric: "22,000 m²",
    metricLabel: "FACILITY FOOTPRINT"
  },
  { 
    year: "2000", 
    tag: "FLAGSHIP",
    title: "The Original® Era Begins", 
    desc: "Launched our premier Original® brand fruit nectar across the GCC. Quickly evolved into an iconic household beverage renowned for genuine fruit taste and uncompromised purity.",
    img: "https://gulf-union.com/images/boriginal.png",
    metric: "#1",
    metricLabel: "HOUSEHOLD FAVORITE"
  },
  { 
    year: "2003", 
    tag: "EXPANSION",
    title: "Captain® for Families & Youth", 
    desc: "Introduced the vitamin-fortified Captain® range in specialized formats (Strawberry, Raspberry, Blueberry), winning the trust of generations of families across Saudi Arabia.",
    img: "https://gulf-union.com/images/bcaptain%20grp.png",
    metric: "250 ml",
    metricLabel: "NUTRITION PACKS"
  },
  { 
    year: "2010", 
    tag: "TECHNOLOGY",
    title: "Mega-Scale Production & Automation", 
    desc: "Commissioned Plant 02 and Plant 03, integrating German automated bottling systems and 2-million-case smart warehousing logistics to support exponential export demands.",
    img: "https://gulf-union.com/images/bklasse%20grp.png",
    metric: "500M L",
    metricLabel: "ANNUAL CAPACITY"
  },
  { 
    year: "2024+", 
    tag: "GLOBAL IMPACT",
    title: "42+ International Markets", 
    desc: "Exporting 7 distinguished beverage brands across 4 continents, driven by Saudi Vision 2030 industrial leadership, sustainable practices, and continuous product innovation.",
    img: "https://gulf-union.com/images/bcobra%20grp.png",
    metric: "42+",
    metricLabel: "EXPORT DESTINATIONS"
  }
];

export default function Timeline() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.timelineSection} aria-label="Gulf Union Foods History Timeline">
      <div className={styles.header}>
        <ScrollReveal>
          <span className="eyebrow" style={{ color: 'var(--brand-gold)' }}>HERITAGE & EVOLUTION</span>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <h2 className="hero-heading">A LEGACY FORGED ACROSS THREE DECADES.</h2>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="elegant-divider" style={{ margin: '24px auto 0' }}></div>
        </ScrollReveal>
      </div>

      {/* Interactive Year Selector Bar */}
      <div className={styles.navBar}>
        {MILESTONES.map((item, idx) => (
          <button
            key={item.year}
            onClick={() => setActive(idx)}
            className={`${styles.navBtn} ${active === idx ? styles.navBtnActive : ""}`}
            aria-label={`View milestone for year ${item.year}`}
          >
            <span className={styles.navYear}>{item.year}</span>
            <span className={styles.navTag}>{item.tag}</span>
          </button>
        ))}
      </div>

      {/* Active Milestone Card */}
      <div className={styles.stage}>
        <div className={styles.card}>
          <div className={styles.visualColumn}>
            <div className={styles.imageBackdrop}>
              <img
                src={MILESTONES[active].img}
                alt={MILESTONES[active].title}
                className={styles.stageImage}
                key={MILESTONES[active].year}
              />
            </div>
          </div>

          <div className={styles.infoColumn}>
            <div className={styles.badgeRow}>
              <span className={styles.yearBadge}>{MILESTONES[active].year}</span>
              <span className={styles.tagBadge}>{MILESTONES[active].tag}</span>
            </div>

            <h3 className={styles.milestoneTitle}>{MILESTONES[active].title}</h3>
            <p className={styles.milestoneDesc}>{MILESTONES[active].desc}</p>

            <div className={styles.metricBlock}>
              <div className={styles.metricValue}>{MILESTONES[active].metric}</div>
              <div className={styles.metricLabel}>{MILESTONES[active].metricLabel}</div>
            </div>

            <div className={styles.stepControls}>
              <button
                disabled={active === 0}
                onClick={() => setActive((prev) => Math.max(0, prev - 1))}
                className={styles.ctrlBtn}
                aria-label="Previous milestone"
              >
                ← PREV
              </button>
              <span className={styles.stepIndicator}>
                0{active + 1} / 0{MILESTONES.length}
              </span>
              <button
                disabled={active === MILESTONES.length - 1}
                onClick={() => setActive((prev) => Math.min(MILESTONES.length - 1, prev + 1))}
                className={styles.ctrlBtn}
                aria-label="Next milestone"
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
