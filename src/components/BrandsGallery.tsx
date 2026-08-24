"use client";

import styles from "./BrandsGallery.module.css";
import Link from "next/link";

const BRANDS = [
  { name: "Original", slug: "original", desc: "Enjoy the Taste of Quality! Our flagship fruit nectar, crafted for generations.", img: "https://gulf-union.com/images/boriginal.png", groupImg: "https://gulf-union.com/images/boriginal%20grp.png" },
  { name: "KLASSE", slug: "klasse", desc: "The True German Taste! A premium lifestyle malt beverage.", img: "https://gulf-union.com/images/bklasse.png", groupImg: "https://gulf-union.com/images/bklasse%20grp.png" },
  { name: "COBRA", slug: "cobra", desc: "Stronger Than You Imagine. Energy and vitality for your day.", img: "https://gulf-union.com/images/bcobra.png", groupImg: "https://gulf-union.com/images/bcobra%20grp.png" },
  { name: "Captain", slug: "captain", desc: "Every drop packed with fun! A favorite for kids and families.", img: "https://gulf-union.com/images/bcaptain.png", groupImg: "https://gulf-union.com/images/bcaptain%20grp.png" },
];

export default function BrandsGallery() {
  return (
    <section className={styles.galleryContainer} aria-label="Featured Gulf Union brands">
      {BRANDS.map((brand) => (
        <div key={brand.name} className={styles.brandPanel}>
          <div className={styles.brandLayout}>
            <div className={styles.imageWrapper}>
              <img 
                src={brand.groupImg} 
                alt={`${brand.name} product range — ${brand.desc}`} 
                className={styles.productImage} 
                loading="lazy"
              />
            </div>
            
            <div className={styles.content}>
              <h2 className={styles.brandName}>{brand.name}®</h2>
              <p className={styles.description}>{brand.desc}</p>
              
              <Link 
                href={`/brands/${brand.slug}`} 
                className="cta-link" 
                style={{ marginTop: '24px' }}
                aria-label={`Explore the ${brand.name} brand — ${brand.desc}`}
              >
                EXPLORE {brand.name.toUpperCase()}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
