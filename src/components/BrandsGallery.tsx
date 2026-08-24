"use client";

import styles from "./BrandsGallery.module.css";
import Link from "next/link";

const BRANDS = [
  { name: "Original", desc: "Our flagship fruit nectar. The authentic taste of nature, crafted for generations.", img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1500&auto=format&fit=crop" },
  { name: "KLASSE", desc: "A premium lifestyle beverage for the discerning palate.", img: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?q=80&w=1500&auto=format&fit=crop" },
  { name: "COBRA", desc: "Energy and vitality. The boost you need to conquer your day.", img: "https://images.unsplash.com/photo-1527661591450-b444d9c10e56?q=80&w=1500&auto=format&fit=crop" },
  { name: "Captain", desc: "A favorite for kids and families, packed with essential vitamins.", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=1500&auto=format&fit=crop" },
];

export default function BrandsGallery() {
  return (
    <section className={styles.galleryContainer}>
      {BRANDS.map((brand, i) => (
        <div key={brand.name} className={styles.brandPanel}>
          <div className={styles.brandLayout}>
            <div className={styles.imageWrapper}>
              <img src={brand.img} alt={brand.name} className={styles.productImage} />
            </div>
            
            <div className={styles.content}>
              <h2 className={styles.brandName}>{brand.name}®</h2>
              <p className={styles.description}>{brand.desc}</p>
              
              <Link href={`/brands/${brand.name.toLowerCase()}`} className="cta-link" style={{ marginTop: '24px' }}>
                EXPLORE BRAND
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
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
