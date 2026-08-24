"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className={styles.hero}>
      <motion.div
        className={styles.background}
        style={{ y: backgroundY }}
      />
      
      <div className={styles.overlay} />
      
      <motion.div 
        className={styles.content}
        style={{ y: textY, opacity }}
      >
        <div className={styles.eyebrowContainer}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={styles.eyebrow}
          >
            GULF UNION FOODS CO.
          </motion.span>
        </div>
        
        <h1 className="text-hero">
          <div className={styles.lineMask}>
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Crafting Moments.
            </motion.span>
          </div>
          <div className={styles.lineMask}>
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              Growing Beyond.
            </motion.span>
          </div>
        </h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className={styles.actions}
        >
          <Link href="/who-we-are" className={styles.btnPrimary}>Explore Our Story</Link>
          <Link href="/brands" className={styles.btnSecondary}>Discover Our Brands</Link>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}
