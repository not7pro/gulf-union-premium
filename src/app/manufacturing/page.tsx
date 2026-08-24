import type { Metadata } from "next";
import PlantSelector from "@/components/PlantSelector";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manufacturing Excellence — 4 World-Class Facilities",
  description: "Gulf Union Foods operates 4 manufacturing facilities with 17 production lines across 65,000 m², producing 500 million liters annually.",
  alternates: { canonical: "/manufacturing" },
};

const CAPABILITIES = [
  {
    icon: "⚙️",
    title: "17 Automated Lines",
    desc: "Equipped with cutting-edge European filling and packaging lines accommodating PET bottles, aluminum sleek cans, Tetra cartons, and premium glass bottles."
  },
  {
    icon: "🔬",
    title: "Aseptic Cold-Fill & CIP",
    desc: "Automated Clean-In-Place (CIP) and Sterilization-In-Place (SIP) systems preserve essential fruit vitamins and purity without artificial preservatives."
  },
  {
    icon: "📦",
    title: "2M-Case Automated High-Bay",
    desc: "Robotic palletizing and climate-controlled high-bay warehouse technology enable rapid loading, tracking, and same-day dispatch for domestic and export fleets."
  },
  {
    icon: "🧪",
    title: "Microbiology & Sensory Labs",
    desc: "Rigorous hourly batch testing, Brix sugar monitoring, and sensory panel analysis ensure every run conforms strictly to SASO and international standards."
  }
];

export default function Manufacturing() {
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
            <span className="eyebrow" style={{ color: 'var(--brand-gold)' }}>INDUSTRIAL INFRASTRUCTURE</span>
          </ScrollReveal>
          <TextReveal 
            text="65,000 M² OF ADVANCED MANUFACTURING EXCELLENCE." 
            className="hero-heading"
            delay={100}
          />
          <ScrollReveal delay={400}>
            <div className="elegant-divider"></div>
            <p className="body-large" style={{ maxWidth: '750px' }}>
              Four specialized plants engineered to produce over 500,000,000 liters per year with uncompromised hygiene, speed, and environmental stewardship.
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* Interactive Plant Showroom */}
      <PlantSelector />

      {/* Industrial Capabilities Grid */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px' }}>
            <ScrollReveal>
              <span className="eyebrow">TECHNOLOGY & PROCESSES</span>
              <h2 className="section-heading">STATE-OF-THE-ART BEVERAGE ENGINEERING</h2>
              <div className="elegant-divider" style={{ margin: '24px auto 0' }}></div>
            </ScrollReveal>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '32px' 
          }}>
            {CAPABILITIES.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 120}>
                <div style={{ 
                  padding: '48px 36px', 
                  border: '1px solid var(--border-color)', 
                  background: 'var(--bg-secondary)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}>
                  <span style={{ fontSize: '2rem' }}>{cap.icon}</span>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                    {cap.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {cap.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control & Standards */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--brand-deep)' }}>LABORATORY RIGOR</span>
              <h2 className="section-heading" style={{ marginBottom: '24px' }}>
                EVERY DROP TESTED. EVERY BATCH VERIFIED.
              </h2>
              <div className="elegant-divider"></div>
              <p className="body-text" style={{ marginBottom: '20px' }}>
                Our on-site quality assurance laboratories perform continuous physical, chemical, and microbiological evaluations across all stages of production — from raw water purification and concentrate intake to final sealed pack release.
              </p>
              <ul className="body-text" style={{ paddingLeft: '20px' }}>
                <li style={{ marginBottom: '12px' }}>Automated inline optical vision inspection for fill level and cap seal integrity</li>
                <li style={{ marginBottom: '12px' }}>Multi-stage reverse osmosis water demineralization & UV sterilization</li>
                <li style={{ marginBottom: '12px' }}>Continuous digital logging of thermal pasteurization curves</li>
              </ul>
            </div>

            <div style={{ 
              background: 'var(--bg-tertiary)', 
              padding: '60px', 
              border: '1px solid var(--border-color)',
              textAlign: 'center'
            }}>
              <span className="eyebrow">ANNUAL THROUGHPUT</span>
              <div style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 300, color: 'var(--brand-deep)', margin: '16px 0' }}>
                500M+
              </div>
              <p className="body-text" style={{ maxWidth: '340px', margin: '0 auto' }}>
                Liters of world-class juice, nectar, and sparkling drinks manufactured across 4 Riyadh facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Partnership / Factory Tour Inquiry */}
      <section style={{ 
        padding: '120px 6%', 
        textAlign: 'center', 
        background: 'var(--bg-dark)', 
        color: '#fff' 
      }}>
        <ScrollReveal>
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.4)' }}>PARTNERSHIPS & CONTRACT PACKAGING</span>
          <h2 className="hero-heading" style={{ marginBottom: '24px' }}>
            BECOME A DISTRIBUTION PARTNER
          </h2>
          <p className="body-large" style={{ maxWidth: '600px', margin: '0 auto 36px', color: 'rgba(255,255,255,0.7)' }}>
            Learn more about our export capabilities, minimum order quantities, and facility certifications.
          </p>
          <div className="elegant-divider" style={{ margin: '0 auto 36px', background: 'var(--brand-gold)' }}></div>
          <Link href="/contact" className="btn-premium" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
            <span>CONTACT COMMERCIAL TEAM →</span>
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
