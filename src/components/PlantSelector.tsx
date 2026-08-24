"use client";

import { useState } from "react";
import styles from "./PlantSelector.module.css";

const PLANTS = [
  { id: "01", name: "Plant 01", area: "22,000", lines: 6, desc: "Our original flagship facility setting the standard for juice manufacturing in the region.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" },
  { id: "02", name: "Plant 02", area: "38,000", lines: 1, desc: "Massive scale production featuring a 2 million case automated warehouse capacity.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop" },
  { id: "03", name: "Plant 03", area: "5,000", lines: 3, desc: "Specialized flexible production lines focused on premium nectar processing.", img: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=2000&auto=format&fit=crop" },
  { id: "04", name: "Plant 04", area: "10,000", lines: 7, desc: "Advanced high-speed bottling and packaging for rapid market distribution.", img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2000&auto=format&fit=crop" },
];

export default function PlantSelector() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.plantSelector}>
      <div className={styles.visualSide}>
        {PLANTS.map((plant, index) => (
          <img 
            key={plant.id}
            src={plant.img} 
            alt={plant.name}
            className={styles.image}
            style={{ 
              opacity: active === index ? 1 : 0,
              transform: active === index ? 'scale(1)' : 'scale(1.05)'
            }}
          />
        ))}
        <div className={styles.overlayGrid}></div>
      </div>

      <div className={styles.dataSide}>
        <div className={styles.navigation}>
          {PLANTS.map((plant, index) => (
            <div 
              key={plant.id} 
              className={`${styles.navItem} ${active === index ? styles.navItemActive : ''}`}
              onClick={() => setActive(index)}
            >
              {plant.id}
            </div>
          ))}
        </div>

        <h2 className={styles.plantTitle}>PLANT {PLANTS[active].id}</h2>
        
        <div className={styles.statRow}>
          <span className={styles.statValue}>{PLANTS[active].area} m²</span>
          <span className={styles.statLabel}>TOTAL FACILITY AREA</span>
        </div>
        
        <div className={styles.statRow}>
          <span className={styles.statValue}>{PLANTS[active].lines}</span>
          <span className={styles.statLabel}>PRODUCTION LINES</span>
        </div>

        <p className="body-text" style={{ marginTop: '24px' }}>
          {PLANTS[active].desc}
        </p>
      </div>
    </section>
  );
}
