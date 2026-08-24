"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PlantSelector.module.css";
import AnimatedCounter from "./AnimatedCounter";

const plants = [
  {
    id: "plant-1",
    name: "PLANT 01",
    size: 22000,
    lines: 6,
    products: ["Juices & Drinks", "Juices with Chunks/Float", "Soft Drinks", "Malt Beverages", "Energy Drinks"],
    packs: ["PET Bottles", "Glass Bottles", "Cans"],
    desc: "Operated by a team of highly specialized operators and engineers that are fully committed and dedicated.",
    img: "https://images.unsplash.com/photo-1580982327559-c1202864eb05?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "plant-2",
    name: "PLANT 02",
    size: 38000,
    lines: 1,
    products: ["Sparkling Drinks", "Malt Beverages"],
    packs: ["Glass Bottles"],
    desc: "Equipped with a state-of-the-art warehousing facility that can accommodate 2M cases of finished goods.",
    img: "https://images.unsplash.com/photo-1615822365287-227bf0227926?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "plant-3",
    name: "PLANT 03",
    size: 5000,
    lines: 3,
    products: ["PET Preforms", "Bottle's Plastic Caps"],
    packs: ["Industrial"],
    desc: "Secures self-sufficiency in primary plastic packaging materials. Operated by top engineers.",
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "plant-4",
    name: "PLANT 04",
    size: 10000,
    lines: 7,
    products: ["Juices & Drinks"],
    packs: ["Carton Packs"],
    desc: "Specialized in Carton packs production via outstanding machinery and the best technology.",
    img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function PlantSelector() {
  const [activePlant, setActivePlant] = useState(plants[0]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h2 className="text-section-title" style={{ marginBottom: '40px' }}>Our Facilities</h2>
          <div className={styles.selector}>
            {plants.map((plant) => (
              <button
                key={plant.id}
                onClick={() => setActivePlant(plant)}
                className={`${styles.tab} ${activePlant.id === plant.id ? styles.activeTab : ""}`}
              >
                {plant.name}
              </button>
            ))}
          </div>
          
          <div className={styles.infoBox}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className={styles.desc}>{activePlant.desc}</p>
                
                <div className={styles.statsGrid}>
                  <div className={styles.statItem}>
                    <div className={styles.statValue}>
                      <AnimatedCounter from={0} to={activePlant.size} duration={1.5} suffix=" m²" />
                    </div>
                    <div className={styles.statLabel}>Total Size</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statValue}>
                      <AnimatedCounter from={0} to={activePlant.lines} duration={1.5} />
                    </div>
                    <div className={styles.statLabel}>Production Lines</div>
                  </div>
                </div>

                <div className={styles.lists}>
                  <div>
                    <h4>Products</h4>
                    <ul>
                      {activePlant.products.map(p => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4>Packaging</h4>
                    <ul>
                      {activePlant.packs.map(p => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.visualizer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlant.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.imageContainer}
            >
              <div className={styles.overlay}></div>
              <img src={activePlant.img} alt={activePlant.name} className={styles.image} />
              
              <div className={styles.floatingTag}>
                <span>{activePlant.name}</span>
                <div className={styles.pulse}></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
