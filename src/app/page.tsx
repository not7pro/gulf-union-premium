"use client";

import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import BrandsGallery from "@/components/BrandsGallery";
import Timeline from "@/components/Timeline";
import PlantSelector from "@/components/PlantSelector";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* ═══ EDITORIAL INTRO ═══ */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal delay={0}>
            <span className="eyebrow">SINCE 1995</span>
          </ScrollReveal>
          
          <TextReveal 
            text="A LEGACY OF QUALITY. A VISION FOR THE FUTURE." 
            className="section-heading" 
            delay={100}
            stagger={50}
          />

          <ScrollReveal delay={400}>
            <div className="elegant-divider" style={{ margin: '32px auto' }}></div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <p className="body-large" style={{ maxWidth: '700px', margin: '0 auto' }}>
              Gulf Union Foods Co. was established with a vision to bring world-class quality 
              to the Saudi beverage market. Today, our juices, nectars, and drinks are 
              enjoyed by families across 42+ markets globally.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ SCALE & PRECISION ═══ */}
      <StatsSection />

      {/* ═══ BRAND MARQUEE ═══ */}
      <div style={{ 
        padding: '40px 0', 
        borderBottom: '1px solid var(--border-color)',
        overflow: 'hidden',
      }}>
        <div className="marquee-track">
          {[...Array(4)].map((_, rep) => (
            <div key={rep} style={{ display: 'flex', alignItems: 'center', gap: '60px', padding: '0 30px' }}>
              {["ORIGINAL®", "KLASSE", "COBRA", "CAPTAIN", "SPLASH", "ORI", "AL QOBTAN"].map((name) => (
                <span key={`${rep}-${name}`} style={{ 
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', 
                  fontWeight: 300, 
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap',
                  color: 'var(--text-muted)',
                  opacity: 0.5,
                }}>
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══ PORTFOLIO HEADER ═══ */}
      <div style={{ padding: '140px 6%', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <ScrollReveal>
          <span className="eyebrow">OUR PORTFOLIO</span>
        </ScrollReveal>
        <TextReveal 
          text="CRAFTING TASTE FOR EVERY GENERATION." 
          className="hero-heading"
          delay={100}
        />
        <ScrollReveal delay={600}>
          <div className="elegant-divider" style={{ margin: '32px auto' }}></div>
        </ScrollReveal>
      </div>
      
      {/* ═══ BRANDS ═══ */}
      <BrandsGallery />

      {/* ═══ TIMELINE ═══ */}
      <Timeline />

      {/* ═══ MANUFACTURING ═══ */}
      <PlantSelector />
      
      {/* ═══ CTA FOOTER ═══ */}
      <section style={{ 
        padding: '160px 6%', 
        textAlign: 'center', 
        background: 'var(--bg-dark)',
        color: '#fff',
      }}>
        <ScrollReveal>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>DISCOVER MORE</span>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <h2 className="hero-heading" style={{ marginBottom: '32px' }}>
            THE PORTFOLIO.<br/>THE COMPANY.<br/>THE VISION.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="elegant-divider" style={{ margin: '32px auto', background: 'var(--brand-gold)' }}></div>
        </ScrollReveal>
        <ScrollReveal delay={500}>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
            <Link href="/brands" className="btn-premium" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              <span>VIEW ALL BRANDS</span>
            </Link>
            <Link href="/who-we-are" className="btn-premium" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              <span>OUR STORY</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
