"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./BrandsScroll.module.css";

const allBrands = [
  { slug: "original", name: "Original®", bg: "https://images.unsplash.com/photo-1622597467836-f38240662f8b?q=80&w=2000&auto=format&fit=crop" },
  { slug: "klasse", name: "KLASSE", bg: "https://images.unsplash.com/photo-1614316654877-3e13d1000fbd?q=80&w=2000&auto=format&fit=crop" },
  { slug: "cobra", name: "COBRA", bg: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=2000&auto=format&fit=crop" },
  { slug: "captain", name: "Captain", bg: "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=2000&auto=format&fit=crop" },
  { slug: "splash", name: "Splash", bg: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=2000&auto=format&fit=crop" },
  { slug: "ori", name: "Ori", bg: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=2000&auto=format&fit=crop" },
  { slug: "al-qobtan", name: "Al Qobtan", bg: "https://images.unsplash.com/photo-1587841961476-eb34dcb6249e?q=80&w=2000&auto=format&fit=crop" },
];

export default function BrandsPage() {
  return (
    <div className={styles.scrollContainer}>
      {allBrands.map((brand) => (
        <section 
          key={brand.slug} 
          className={styles.brandSection}
          style={{ backgroundImage: `url(${brand.bg})` }}
        >
          <div className={styles.overlay}></div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-200px" }}
            transition={{ duration: 0.8 }}
            className={styles.content}
          >
            <h2 className="text-hero">{brand.name}</h2>
            <Link href={`/brands/${brand.slug}`} className={styles.exploreBtn}>
              Enter {brand.name} Universe <span className={styles.arrow}>→</span>
            </Link>
          </motion.div>
        </section>
      ))}
    </div>
  );
}
