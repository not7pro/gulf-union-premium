"use client";

import styles from "./BrandsGallery.module.css";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const BRANDS = [
  { name: "Original", slug: "original", desc: "Enjoy the Taste of Quality! Our flagship fruit nectar, crafted for generations.", img: "https://gulf-union.com/images/boriginal.png", groupImg: "https://gulf-union.com/images/boriginal%20grp.png" },
  { name: "KLASSE", slug: "klasse", desc: "The True German Taste! A premium lifestyle malt beverage.", img: "https://gulf-union.com/images/bklasse.png", groupImg: "https://gulf-union.com/images/bklasse%20grp.png" },
  { name: "COBRA", slug: "cobra", desc: "Stronger Than You Imagine. Energy and vitality for your day.", img: "https://gulf-union.com/images/bcobra.png", groupImg: "https://gulf-union.com/images/bcobra%20grp.png" },
  { name: "Captain", slug: "captain", desc: "Every drop packed with fun! A favorite for kids and families.", img: "https://gulf-union.com/images/bcaptain.png", groupImg: "https://gulf-union.com/images/bcaptain%20grp.png" },
];

export default function BrandsGallery() {
  return (
    <section className={styles.galleryContainer} aria-label="Featured Gulf Union brands">
      {BRANDS.map((brand, i) => (
        <div key={brand.name} className={styles.brandPanel}>
          <div className={styles.brandLayout}>
            <ScrollReveal direction={i % 2 === 0 ? "left" : "right"} delay={200} distance={60}>
              <div className={styles.imageWrapper}>
                <img 
                  src={brand.groupImg} 
                  alt={`${brand.name} product range — ${brand.desc}`} 
                  className={styles.productImage} 
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction={i % 2 === 0 ? "right" : "left"} delay={400} distance={40}>
              <div className={styles.content}>
                <span className="eyebrow" style={{ color: 'var(--brand-gold)' }}>BRAND 0{i + 1}</span>
                <h2 className={styles.brandName}>{brand.name}®</h2>
                <div className="elegant-divider"></div>
                <p className={styles.description}>{brand.desc}</p>
                
                <Link 
                  href={`/brands/${brand.slug}`} 
                  className="cta-link" 
                  style={{ marginTop: '32px' }}
                  aria-label={`Explore the ${brand.name} brand`}
                >
                  DISCOVER {brand.name.toUpperCase()}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      ))}
    </section>
  );
}
