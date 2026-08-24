"use client";

import { useState } from "react";
import styles from "./PlantSelector.module.css";
import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

const PLANTS = [
  { 
    id: "01", 
    name: "PLANT 01 — FLAGSHIP PRODUCTION", 
    role: "Aseptic Nectar & Juice Processing",
    area: "22,000", 
    lines: 6, 
    capacity: "180M Liters/Yr",
    desc: "Our founding manufacturing facility, engineered with European automated filling lines and stringent ISO 22000 quality standards for pure fruit nectars and drinks.",
    img: "https://gulf-union.com/images/boriginal%20grp.png",
    specs: [
      { label: "Filling Technology", val: "Aseptic Carton & PET" },
      { label: "Quality Standards", val: "HACCP & ISO 22000" },
      { label: "Lab Capability", val: "Full Microbiological Testing" }
    ]
  },
  { 
    id: "02", 
    name: "PLANT 02 — HIGH-BAY LOGISTICS & MEGA SCALE", 
    role: "Automated Warehousing & Distribution Hub",
    area: "38,000", 
    lines: 1, 
    capacity: "2.0M Cases Storage",
    desc: "Spanning 38,000 square meters, Plant 02 houses our robotic automated pallet warehousing system capable of managing high-throughput distribution across 42+ export markets.",
    img: "https://gulf-union.com/images/brandback.jpg",
    specs: [
      { label: "Storage Architecture", val: "Automated High-Bay Rack" },
      { label: "Throughput", val: "24/7 Continuous Dispatch" },
      { label: "Fleet Loading", val: "20 Simultaneous Docks" }
    ]
  },
  { 
    id: "03", 
    name: "PLANT 03 — SPECIALTY & CUSTOM BEVERAGES", 
    role: "Flexible High-Precision Blending",
    area: "5,000", 
    lines: 3, 
    capacity: "75M Liters/Yr",
    desc: "Purpose-built for specialized formulations, rapid recipe iteration, and premium lifestyle beverage packaging including malt and sparkling lines.",
    img: "https://gulf-union.com/images/bklasse%20grp.png",
    specs: [
      { label: "Packaging Formats", val: "Glass Bottles & Sleek Cans" },
      { label: "Blending Automation", val: "SCADA Digital Control" },
      { label: "Sanitation", val: "Automated CIP/SIP Systems" }
    ]
  },
  { 
    id: "04", 
    name: "PLANT 04 — HIGH-SPEED BOTTLING COMPLEX", 
    role: "Next-Generation Multi-Format Packaging",
    area: "10,000", 
    lines: 7, 
    capacity: "160M Liters/Yr",
    desc: "Equipped with 7 advanced high-speed packaging lines designed for dynamic market response, handling multi-size PET, carton, and aluminum can formats.",
    img: "https://gulf-union.com/images/bcobra%20grp.png",
    specs: [
      { label: "Line Speed", val: "Up to 48,000 units/hr" },
      { label: "Energy Efficiency", val: "Solar-Integrated Power" },
      { label: "Inspection", val: "Vision-AI Defect Detection" }
    ]
  },
];

export default function PlantSelector() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.plantSection} aria-label="Gulf Union Manufacturing Facilities">
      <div className={styles.topHeader}>
        <ScrollReveal>
          <span className="eyebrow" style={{ color: 'var(--brand-gold)' }}>INDUSTRIAL SCALE & PRECISION</span>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <h2 className="hero-heading">FOUR WORLD-CLASS FACTORIES IN SAUDI ARABIA.</h2>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="elegant-divider" style={{ margin: '24px auto 0' }}></div>
        </ScrollReveal>
      </div>

      <div className={styles.container}>
        {/* Plant selector tabs */}
        <div className={styles.tabList}>
          {PLANTS.map((plant, index) => (
            <button 
              key={plant.id} 
              className={`${styles.tabBtn} ${active === index ? styles.tabBtnActive : ''}`}
              onClick={() => setActive(index)}
              aria-label={`Select ${plant.name}`}
            >
              <span className={styles.tabId}>{plant.id}</span>
              <div className={styles.tabMeta}>
                <span className={styles.tabName}>PLANT {plant.id}</span>
                <span className={styles.tabArea}>{plant.area} m²</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Plant Showcase Display */}
        <div className={styles.displayCard}>
          <div className={styles.visualPane}>
            <img 
              src={PLANTS[active].img} 
              alt={PLANTS[active].name}
              className={styles.facilityImg}
              key={PLANTS[active].id}
            />
            <div className={styles.paneOverlay}>
              <span className={styles.paneBadge}>FACILITY SPECIFICATION</span>
              <span className={styles.paneId}>{PLANTS[active].id}</span>
            </div>
          </div>

          <div className={styles.dataPane}>
            <span className={styles.plantRole}>{PLANTS[active].role}</span>
            <h3 className={styles.plantHeading}>{PLANTS[active].name}</h3>
            <p className={styles.plantDesc}>{PLANTS[active].desc}</p>

            {/* High-level metrics */}
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <span className={styles.statVal}>{PLANTS[active].area} m²</span>
                <span className={styles.statLbl}>FACILITY FOOTPRINT</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statVal}>{PLANTS[active].lines}</span>
                <span className={styles.statLbl}>PRODUCTION LINES</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statVal}>{PLANTS[active].capacity}</span>
                <span className={styles.statLbl}>PEAK OUTPUT</span>
              </div>
            </div>

            {/* Spec breakdown */}
            <div className={styles.specList}>
              {PLANTS[active].specs.map((spec, i) => (
                <div key={i} className={styles.specItem}>
                  <span className={styles.specKey}>{spec.label}</span>
                  <span className={styles.specVal}>{spec.val}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px' }}>
              <Link href="/manufacturing" className="cta-link">
                EXPLORE FULL MANUFACTURING CAPABILITIES →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
