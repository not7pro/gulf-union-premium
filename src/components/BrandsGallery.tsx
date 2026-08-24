"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./BrandsGallery.module.css";

const brands = [
  {
    name: "Original®",
    desc: "The pure, unadulterated taste of nature's finest fruits.",
    img: "https://images.unsplash.com/photo-1622597467836-f38240662f8b?q=80&w=1200&auto=format&fit=crop",
    link: "/brands/original"
  },
  {
    name: "Splash",
    desc: "Fizz up your fun! Vibrant, sparkling refreshment.",
    img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=1200&auto=format&fit=crop",
    link: "/brands/splash"
  },
  {
    name: "KLASSE",
    desc: "The True German Taste. Premium non-alcoholic malt.",
    img: "https://images.unsplash.com/photo-1614316654877-3e13d1000fbd?q=80&w=1200&auto=format&fit=crop",
    link: "/brands/klasse"
  }
];

export default function BrandsGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className="text-section-title">The Masterpiece Collection.</h2>
          <Link href="/brands" className={styles.viewAll}>View Complete Portfolio →</Link>
        </motion.div>

        <div className={styles.gallery}>
          {brands.map((brand, i) => (
            <motion.div 
              key={brand.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`${styles.item} ${i % 2 !== 0 ? styles.reversed : ""}`}
            >
              <div className={styles.imageWrapper}>
                <img src={brand.img} alt={brand.name} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.brandName}>{brand.name}</h3>
                <p className={styles.brandDesc}>{brand.desc}</p>
                <Link href={brand.link} className={styles.exploreLink}>
                  Explore {brand.name.replace('®', '')}
                  <span className={styles.line}></span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
