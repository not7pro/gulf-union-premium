import type { Metadata } from "next";
import Timeline from "@/components/Timeline";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Are — Our Story Since 1995",
  description: "Discover Gulf Union Foods Co.'s journey from founding in 1995 to becoming a leading Saudi beverage manufacturer serving 42+ global markets.",
  alternates: { canonical: "/who-we-are" },
};

const VALUES = [
  {
    num: "01",
    title: "Uncompromising Purity",
    desc: "From farm-sourced fruit concentrates to sterile aseptic bottling, we adhere strictly to international HACCP and ISO 22000 food safety certifications."
  },
  {
    num: "02",
    title: "Industrial Mastery",
    desc: "17 automated production lines across 65,000 m² of smart facilities empower us to produce over 500 million liters annually with precision."
  },
  {
    num: "03",
    title: "National Pride, Global Reach",
    desc: "Rooted proudly in Saudi Arabia and aligned with Vision 2030, our products represent Saudi manufacturing excellence in over 42 nations worldwide."
  },
  {
    num: "04",
    title: "Human Empowerment",
    desc: "Over 1,300 dedicated specialists drive our growth through continuous training, safety innovation, and merit-based talent development."
  }
];

export default function WhoWeAre() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Editorial Header */}
      <header className="section" style={{ 
        minHeight: '65vh', 
        display: 'flex', 
        alignItems: 'flex-end', 
        borderBottom: '1px solid var(--border-color)',
        background: 'var(--bg-secondary)',
        paddingBottom: '80px'
      }}>
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow" style={{ color: 'var(--brand-gold)' }}>HERITAGE · CRAFTSMANSHIP · SCALE</span>
          </ScrollReveal>
          <TextReveal 
            text="PIONEERING BEVERAGE EXCELLENCE IN SAUDI ARABIA SINCE 1995." 
            className="hero-heading"
            delay={100}
          />
          <ScrollReveal delay={400}>
            <div className="elegant-divider"></div>
            <p className="body-large" style={{ maxWidth: '760px' }}>
              Founded three decades ago in Riyadh, Gulf Union Foods Co. has evolved into one of the Middle East’s foremost beverage powerhouses, bringing authentic refreshment to millions of homes daily.
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* Corporate Philosophy Section */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
            <ScrollReveal direction="left">
              <div>
                <span className="eyebrow">OUR ETHOS</span>
                <h2 className="section-heading" style={{ marginBottom: '24px' }}>
                  CRAFTED WITH INTENT. SCALED WITH PRECISION.
                </h2>
                <div className="elegant-divider"></div>
                <p className="body-text" style={{ marginBottom: '20px' }}>
                  What started in 1995 with a single visionary bottling line has grown into an industrial ecosystem delivering 500 million liters every year across juices, nectars, energy drinks, and malt beverages.
                </p>
                <p className="body-text">
                  We invest relentlessly in German and Swiss automated processing machinery, robotic logistics, and advanced quality testing laboratories to ensure every carton and bottle surpasses consumer expectations.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div style={{ 
                background: 'var(--bg-secondary)', 
                padding: '60px', 
                border: '1px solid var(--border-color)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.02)'
              }}>
                <span className="eyebrow" style={{ color: 'var(--brand-deep)' }}>KEY PILLARS</span>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px', marginTop: '30px' }}>
                  {VALUES.map((val) => (
                    <div key={val.num}>
                      <span style={{ fontSize: '1.8rem', fontWeight: 300, color: 'var(--brand-gold)', display: 'block', marginBottom: '8px' }}>
                        {val.num}
                      </span>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>{val.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <Timeline />

      {/* Corporate Certifications & Standards */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-color)', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span className="eyebrow">QUALITY ASSURANCE</span>
            <h2 className="section-heading">INTERNATIONALLY ACCREDITED & CERTIFIED</h2>
            <div className="elegant-divider" style={{ margin: '24px auto 40px' }}></div>
          </ScrollReveal>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '24px',
            marginTop: '40px'
          }}>
            {[
              { title: "ISO 22000", subtitle: "Food Safety Management System" },
              { title: "HACCP Certified", subtitle: "Hazard Analysis & Critical Control Points" },
              { title: "SASO Approved", subtitle: "Saudi Standards, Metrology & Quality" },
              { title: "Halal Certified", subtitle: "100% Verified Halal Ingredients" },
            ].map((cert, idx) => (
              <ScrollReveal key={cert.title} delay={idx * 100}>
                <div style={{ 
                  padding: '36px 24px', 
                  border: '1px solid var(--border-color)', 
                  background: 'var(--bg-secondary)',
                  height: '100%'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '8px', color: 'var(--brand-deep)' }}>
                    {cert.title}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {cert.subtitle}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '120px 6%', 
        textAlign: 'center', 
        background: 'var(--bg-dark)', 
        color: '#fff' 
      }}>
        <ScrollReveal>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>EXPLORE OUR INFRASTRUCTURE</span>
          <h2 className="hero-heading" style={{ marginBottom: '32px' }}>
            SEE HOW OUR 4 FACTORIES OPERATE.
          </h2>
          <div className="elegant-divider" style={{ margin: '24px auto 36px', background: 'var(--brand-gold)' }}></div>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/manufacturing" className="btn-premium" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              <span>OUR MANUFACTURING →</span>
            </Link>
            <Link href="/brands" className="btn-premium" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              <span>EXPLORE BRANDS →</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
