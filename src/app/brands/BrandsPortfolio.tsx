"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "./BrandsPortfolio.module.css";

const PORTFOLIO = [
  { id: "original", name: "ORIGINAL®", slogan: "Enjoy the Taste of Quality!", desc: "Our flagship fruit nectar. The authentic taste of nature, crafted for generations.", formats: ["PET", "Zero", "Carton", "Junior", "Cans", "Glass", "Iced Coffee"], img: "https://gulf-union.com/images/boriginal.png", groupImg: "https://gulf-union.com/images/boriginal%20grp.png", sectionClass: styles.originalSection, visualClass: styles.originalVisual, contentClass: styles.originalContent },
  { id: "klasse", name: "KLASSE", slogan: "The True German Taste!", desc: "A premium lifestyle beverage for the discerning palate.", formats: ["Glass"], img: "https://gulf-union.com/images/bklasse.png", groupImg: "https://gulf-union.com/images/bklasse%20grp.png", sectionClass: styles.klasseSection, visualClass: styles.klasseVisual, contentClass: styles.klasseContent },
  { id: "cobra", name: "COBRA", slogan: "Stronger Than You Imagine.", desc: "Energy and vitality. The boost you need to conquer your day.", formats: ["Can", "PET"], img: "https://gulf-union.com/images/bcobra.png", groupImg: "https://gulf-union.com/images/bcobra%20grp.png", sectionClass: styles.cobraSection, visualClass: styles.cobraVisual, contentClass: styles.cobraContent },
  { id: "captain", name: "Captain", slogan: "Every drop packed with fun!", desc: "A favorite for kids and families, packed with essential vitamins.", formats: ["250ml Strawberry", "250ml Raspberry", "250ml Blueberry"], img: "https://gulf-union.com/images/bcaptain.png", groupImg: "https://gulf-union.com/images/bcaptain%20grp.png", sectionClass: styles.captainSection, visualClass: styles.captainVisual, contentClass: styles.captainContent },
  { id: "splash", name: "Splash", slogan: "Fizz up your fun!", desc: "Vibrant, sparkling refreshment for every moment.", formats: ["Glass", "PET"], img: "https://gulf-union.com/images/bsplash.png", groupImg: "https://gulf-union.com/images/bsplash%20grp.png", sectionClass: styles.splashSection, visualClass: styles.splashVisual, contentClass: styles.splashContent },
  { id: "ori", name: "Ori", slogan: "Flavor that reflects your vibe.", desc: "Crafted for the modern palate, light and sophisticated.", formats: ["PET"], img: "https://gulf-union.com/images/bOri.png", groupImg: "https://gulf-union.com/images/bOri%20grp.png", sectionClass: styles.oriSection, visualClass: styles.oriVisual, contentClass: styles.oriContent },
  { id: "al-qobtan", name: "al qobtan", slogan: "The choice that knows its way.", desc: "Timeless refreshment. A classic staple for every home.", formats: ["Carton"], img: "https://gulf-union.com/images/bal%20qobtan.png", groupImg: "https://gulf-union.com/images/bal%20qobtan%20grp.png", sectionClass: styles.alqobtanSection, visualClass: styles.alqobtanVisual, contentClass: styles.alqobtanContent }
];

export default function BrandsPortfolio() {
  const [activeId, setActiveId] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.brandsPage}>
      
      {/* 6. BRAND NAVIGATION */}
      <div className={styles.brandNav}>
        {PORTFOLIO.map((brand, i) => (
          <div 
            key={brand.id}
            onClick={() => scrollTo(brand.id)}
            className={`${styles.navItem} ${activeId === brand.id ? styles.navItemActive : ''}`}
            style={{ cursor: 'pointer', pointerEvents: 'auto' }}
          >
            0{i+1} {brand.name.replace('®', '')}
          </div>
        ))}
      </div>

      {/* 1. PAGE HERO */}
      <section className={styles.hero} id="portfolio-intro">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>OUR BRANDS</h1>
          <p className={styles.heroStatement}>
            Seven brands. One portfolio.<br/>
            Made to bring people together.
          </p>
          <p className="body-text" style={{ maxWidth: '400px' }}>
            Explore Gulf Union Foods' portfolio of beverage brands across juices, sparkling drinks, energy drinks, malt beverages and soft drinks.
          </p>
        </div>
        
        <div className={styles.heroVisual}>
          <img src="https://gulf-union.com/images/boriginal.png" className={`${styles.heroImage} ${styles.heroImage1}`} alt="Original" />
          <img src="https://gulf-union.com/images/bcobra.png" className={`${styles.heroImage} ${styles.heroImage2}`} alt="Cobra" />
          <img src="https://gulf-union.com/images/bklasse.png" className={`${styles.heroImage} ${styles.heroImage3}`} alt="Klasse" />
        </div>
      </section>

      {/* 2. PORTFOLIO INTRODUCTION */}
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <span className="eyebrow" style={{ color: 'var(--text-primary)' }}>OUR PORTFOLIO</span>
          <h2 className={styles.introStatement}>DIFFERENT TASTES.<br/>DIFFERENT MOMENTS.<br/>ONE FAMILY.</h2>
          <p className="body-large">
            For nearly three decades, we have crafted beverages that define quality. From pure nectars to energy and sparkling drinks, our portfolio is meticulously developed to serve millions across the globe every day.
          </p>
        </div>
        <div className={styles.introVisual}>
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop" alt="Production" />
        </div>
      </section>

      {/* 3. THE ACTUAL BRAND SHOWCASE */}
      {PORTFOLIO.map((brand, i) => (
        <section 
          key={brand.id}
          id={brand.id}
          ref={(el) => { sectionsRef.current[i] = el; }}
          className={`${styles.brandSection} ${brand.sectionClass}`}
        >
          <div className={brand.visualClass}>
            <img src={brand.groupImg || brand.img} alt={brand.name} loading="lazy" />
          </div>
          
          <div className={`${styles.brandContent} ${brand.contentClass}`}>
            <div>
              <h2 className={styles.brandName}>{brand.name}</h2>
              <p className={styles.brandSlogan}>{brand.slogan}</p>
            </div>
            
            <p className={styles.brandDesc}>{brand.desc}</p>
            
            <Link href={`/brands/${brand.id}`} className={styles.discoverBtn}>
              DISCOVER {brand.name.replace('®', '')} 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
            
            {/* 8. PRODUCT PREVIEW */}
            <div className={styles.productPreview}>
              <div className={styles.previewTitle}>AVAILABLE FORMATS</div>
              <div className={styles.formatList}>
                {brand.formats.map(format => (
                  <span key={format} className={styles.formatTag}>{format}</span>
                ))}
              </div>
              
              <Link href={`/brands/${brand.id}`}>
                <div className={styles.previewImageContainer}>
                  <img src={brand.img} className={styles.previewImage} alt={`${brand.name} Product`} loading="lazy" />
                  <div className={styles.previewHoverIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* 11. FINAL PORTFOLIO SECTION */}
      <section className={styles.collageSection}>
        <span className="eyebrow" style={{ color: 'var(--text-primary)' }}>PORTFOLIO</span>
        <h2 className="hero-heading">ONE PORTFOLIO.<br/>MANY MOMENTS.</h2>
        
        <div className={styles.collageGrid}>
          {PORTFOLIO.slice(0, 4).map(brand => (
            <Link href={`/brands/${brand.id}`} key={brand.id} className={styles.collageItem}>
              <img src={brand.groupImg || brand.img} alt={brand.name} loading="lazy" />
            </Link>
          ))}
        </div>
      </section>

      {/* 12. CORPORATE CONNECTION */}
      <section className={styles.corporateSection}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>OUR BRANDS</span>
          <h2 className="hero-heading">BACKED BY THE SCALE OF GULF UNION FOODS.</h2>
        </div>
        
        <div className={styles.corpMetrics}>
          <div>
            <div className={styles.metricVal}>1,300+</div>
            <div className={styles.metricLabel}>EMPLOYEES</div>
          </div>
          <div>
            <div className={styles.metricVal}>4</div>
            <div className={styles.metricLabel}>FACTORIES</div>
          </div>
          <div>
            <div className={styles.metricVal}>17</div>
            <div className={styles.metricLabel}>PRODUCTION LINES</div>
          </div>
          <div>
            <div className={styles.metricVal}>65,000 m²</div>
            <div className={styles.metricLabel}>TOTAL SIZE</div>
          </div>
          <div>
            <div className={styles.metricVal}>500M+</div>
            <div className={styles.metricLabel}>LITERS / YEAR</div>
          </div>
          <div>
            <div className={styles.metricVal}>42+</div>
            <div className={styles.metricLabel}>COUNTRIES</div>
          </div>
        </div>
      </section>

      {/* 13. CTA */}
      <section className={styles.ctaSection}>
        <h2 className="hero-heading" style={{ marginBottom: '24px' }}>DISCOVER GULF UNION</h2>
        <p className="body-large" style={{ maxWidth: '600px', margin: '0 auto' }}>
          From our brands to our factories, discover the company behind the portfolio.
        </p>
        
        <div className={styles.ctaButtons}>
          <Link href="/who-we-are" className={styles.ctaBtn}>WHO WE ARE →</Link>
          <Link href="/manufacturing" className={styles.ctaBtn}>OUR MANUFACTURING →</Link>
          <Link href="/global-presence" className={styles.ctaBtn}>GLOBAL PRESENCE →</Link>
        </div>
      </section>

    </div>
  );
}
