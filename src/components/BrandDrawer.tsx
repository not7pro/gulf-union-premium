"use client";

import { useEffect, useRef } from "react";
import styles from "./BrandDrawer.module.css";
import gsap from "gsap";

export interface BrandData {
  id: string;
  name: string;
  slogan: string;
  desc: string;
  formats: string[];
  img: string;
  groupImg: string;
}

interface BrandDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  brand: BrandData | null;
}

export default function BrandDrawer({ isOpen, onClose, brand }: BrandDrawerProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && brand) {
      document.body.style.overflow = "hidden";
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.4, ease: "power2.out" });
      gsap.to(drawerRef.current, { x: "0%", duration: 0.6, ease: "expo.out" });
      
      // Stagger child elements
      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.2 }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(drawerRef.current, { x: "100%", duration: 0.5, ease: "power2.in" });
      gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.5, ease: "power2.in", delay: 0.1 });
    }
  }, [isOpen, brand]);

  if (!brand) return null;

  return (
    <>
      <div 
        ref={overlayRef} 
        className={styles.overlay} 
        onClick={onClose}
        style={{ visibility: 'hidden', opacity: 0 }}
      />
      <div 
        ref={drawerRef} 
        className={styles.drawer}
        style={{ transform: 'translateX(100%)' }}
      >
        <button onClick={onClose} className={styles.closeBtn} aria-label="Close drawer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.drawerContent} ref={contentRef}>
          <div className={styles.visualHeader}>
            <img src={brand.groupImg} alt={brand.name} className={styles.brandImage} />
          </div>
          
          <div className={styles.infoSection}>
            <span className={styles.eyebrow}>GULF UNION PORTFOLIO</span>
            <h2 className={styles.brandName}>{brand.name}</h2>
            <p className={styles.brandSlogan}>{brand.slogan}</p>
            
            <div className={styles.divider}></div>
            
            <p className={styles.brandDesc}>{brand.desc}</p>
            
            <div className={styles.specsContainer}>
              <h4 className={styles.specsTitle}>AVAILABLE FORMATS</h4>
              <div className={styles.formatTags}>
                {brand.formats.map((format, idx) => (
                  <span key={idx} className={styles.tag}>{format}</span>
                ))}
              </div>
            </div>

            <a href={`/brands/${brand.id}`} className={styles.exploreLink}>
              EXPLORE FULL BRAND DETAILS →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
