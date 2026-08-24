"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./BrandsPortfolio.module.css";
import TextReveal from "@/components/TextReveal";
import ScrollReveal from "@/components/ScrollReveal";
import BentoGrid from "@/components/BentoGrid";
import BrandDrawer, { BrandData } from "@/components/BrandDrawer";

gsap.registerPlugin(ScrollTrigger);

const PORTFOLIO: (BrandData & { color: string })[] = [
  { id: "original", name: "ORIGINAL®", slogan: "Enjoy the Taste of Quality!", desc: "Our flagship fruit nectar. The authentic taste of nature, crafted for generations.", formats: ["PET", "Zero", "Carton", "Junior", "Cans", "Glass", "Iced Coffee"], img: "https://gulf-union.com/images/boriginal.png", groupImg: "https://gulf-union.com/images/boriginal%20grp.png", color: "#C5A55A" },
  { id: "klasse", name: "KLASSE", slogan: "The True German Taste!", desc: "A premium lifestyle beverage for the discerning palate.", formats: ["Glass"], img: "https://gulf-union.com/images/bklasse.png", groupImg: "https://gulf-union.com/images/bklasse%20grp.png", color: "#0C0C0C" },
  { id: "cobra", name: "COBRA", slogan: "Stronger Than You Imagine.", desc: "Energy and vitality. The boost you need to conquer your day.", formats: ["Can", "PET"], img: "https://gulf-union.com/images/bcobra.png", groupImg: "https://gulf-union.com/images/bcobra%20grp.png", color: "#D32F2F" },
  { id: "captain", name: "Captain", slogan: "Every drop packed with fun!", desc: "A favorite for kids and families, packed with essential vitamins.", formats: ["250ml Strawberry", "250ml Raspberry", "250ml Blueberry"], img: "https://gulf-union.com/images/bcaptain.png", groupImg: "https://gulf-union.com/images/bcaptain%20grp.png", color: "#8BC34A" },
  { id: "splash", name: "Splash", slogan: "Fizz up your fun!", desc: "Vibrant, sparkling refreshment for every moment.", formats: ["Glass", "PET"], img: "https://gulf-union.com/images/bsplash.png", groupImg: "https://gulf-union.com/images/bsplash%20grp.png", color: "#1976D2" },
  { id: "ori", name: "Ori", slogan: "Flavor that reflects your vibe.", desc: "Crafted for the modern palate, light and sophisticated.", formats: ["PET"], img: "https://gulf-union.com/images/bOri.png", groupImg: "https://gulf-union.com/images/bOri%20grp.png", color: "#00BCD4" },
  { id: "al-qobtan", name: "al qobtan", slogan: "The choice that knows its way.", desc: "Timeless refreshment. A classic staple for every home.", formats: ["Carton"], img: "https://gulf-union.com/images/bal%20qobtan.png", groupImg: "https://gulf-union.com/images/bal%20qobtan%20grp.png", color: "#E64A19" }
];

export default function BrandsPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  
  const [selectedBrand, setSelectedBrand] = useState<BrandData | null>(null);

  useEffect(() => {
    // Reset any previous ScrollTriggers
    ScrollTrigger.getAll().forEach(t => t.kill());

    const scrollSection = scrollSectionRef.current;
    const track = trackRef.current;
    const bg = bgRef.current;
    
    if (!scrollSection || !track || !bg) return;

    // Calculate total horizontal scroll width
    const totalWidth = track.scrollWidth - window.innerWidth;
    
    // Horizontal Scroll Animation
    const scrollTween = gsap.to(track, {
      x: () => -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: scrollSection,
        pin: true,
        scrub: 1, // Smooth scrubbing
        start: "top top",
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      }
    });

    // Dynamic Background Colors
    const cards = track.querySelectorAll(`.${styles.brandCard}`);
    
    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        containerAnimation: scrollTween,
        start: "left center",
        end: "right center",
        onEnter: () => gsap.to(bg, { backgroundColor: PORTFOLIO[i].color, duration: 0.8, ease: "power2.out" }),
        onEnterBack: () => gsap.to(bg, { backgroundColor: PORTFOLIO[i].color, duration: 0.8, ease: "power2.out" }),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className={styles.pageWrapper} ref={containerRef}>
      
      {/* Dynamic Background */}
      <div className={styles.dynamicBg} ref={bgRef}></div>

      {/* Cinematic Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <ScrollReveal delay={0}>
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>THE PORTFOLIO</span>
          </ScrollReveal>
          
          <TextReveal 
            text="ONE PORTFOLIO. MANY MOMENTS." 
            className={styles.heroTitle} 
            delay={200}
            stagger={80}
            as="h1"
          />
          
          <ScrollReveal delay={600}>
            <p className="body-large" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '32px auto 0' }}>
              Explore seven premium brands, meticulously crafted in Saudi Arabia and exported to the world.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Floating Product Depth of Field */}
        <div className={styles.heroFloating}>
          <img 
            src="https://gulf-union.com/images/boriginal.png" 
            className={styles.floatingBottleMain}
            alt="Original Bottle" 
          />
          <img 
            src="https://gulf-union.com/images/bklasse.png" 
            className={styles.floatingBottleBlur1}
            alt="Klasse Bottle" 
          />
          <img 
            src="https://gulf-union.com/images/bcobra.png" 
            className={styles.floatingBottleBlur2}
            alt="Cobra Bottle" 
          />
        </div>
      </section>

      {/* GSAP Horizontal Pinned Scroll Section */}
      <div ref={scrollSectionRef} className={styles.scrollSection}>
        <div className={styles.scrollHeader}>
          <span className="eyebrow" style={{ color: '#fff' }}>SCROLL TO EXPLORE</span>
          <div className={styles.scrollLine}></div>
        </div>

        <div ref={trackRef} className={styles.track}>
          {PORTFOLIO.map((brand, i) => (
            <div key={brand.id} className={styles.brandCard}>
              <div className={styles.cardInner}>
                
                <div className={styles.cardVisual}>
                  <img src={brand.groupImg} alt={brand.name} className={styles.cardImg} loading="lazy" />
                  <div className={styles.cardIdx}>0{i+1}</div>
                </div>

                <div className={styles.cardInfo}>
                  <h2 className={styles.cardTitle}>{brand.name}</h2>
                  <p className={styles.cardSlogan}>{brand.slogan}</p>
                  
                  <div className={styles.cardFormats}>
                    {brand.formats.slice(0, 3).map(f => (
                      <span key={f} className={styles.formatPill}>{f}</span>
                    ))}
                    {brand.formats.length > 3 && <span className={styles.formatPill}>+{brand.formats.length - 3}</span>}
                  </div>

                  <button 
                    className={styles.discoverBtn}
                    onClick={() => setSelectedBrand(brand)}
                    aria-label={`Discover ${brand.name}`}
                  >
                    <span>DISCOVER</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          ))}
          
          {/* Outro Spacer to allow scrolling to continue smoothly */}
          <div className={styles.spacerCard}>
            <h2 className={styles.heroTitle} style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>THE FOUNDATION</h2>
          </div>
        </div>
      </div>

      {/* Scale Bento Grid */}
      <BentoGrid />

      {/* Interactive Drawer */}
      <BrandDrawer 
        isOpen={!!selectedBrand} 
        onClose={() => setSelectedBrand(null)} 
        brand={selectedBrand} 
      />

    </div>
  );
}
