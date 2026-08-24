import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sustainability — Growing Responsibly",
  description: "Gulf Union Foods Co.'s commitment to environmental stewardship, employee wellbeing, and community impact — aligned with Saudi Vision 2030.",
  alternates: { canonical: "/sustainability" },
};

export default function Sustainability() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '120px' }}>
      <header className="section" style={{ 
        height: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        borderBottom: '1px solid var(--border-color)',
        background: 'var(--bg-secondary)'
      }}>
        <div className="container">
          <span className="eyebrow">SUSTAINABILITY</span>
          <h1 className="hero-heading">GROWING RESPONSIBLY, TOGETHER.</h1>
        </div>
      </header>

      <div className="container" style={{ marginTop: '120px' }}>
        <section style={{ marginBottom: '120px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <span className="eyebrow">01</span>
            <h2 className="section-heading" style={{ marginBottom: '24px' }}>Our Planet</h2>
            <p className="body-text" style={{ marginBottom: '24px' }}>We&apos;re actively working to minimize the environmental impact of our operations through smarter energy use, waste reduction, and responsible sourcing.</p>
            <ul style={{ paddingLeft: '20px' }} className="body-text">
              <li style={{ marginBottom: '12px' }}>Energy & greenhouse gas (GHG) management</li>
              <li style={{ marginBottom: '12px' }}>Water efficiency & conservation</li>
              <li style={{ marginBottom: '12px' }}>Waste reduction & recycling</li>
            </ul>
          </div>
          <div style={{ aspectRatio: '1/1', background: 'var(--bg-secondary)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src="https://gulf-union.com/images/boriginal.png" 
              alt="Gulf Union Original — sustainably produced beverage" 
              style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} 
              loading="lazy"
            />
          </div>
        </section>

        <section style={{ marginBottom: '120px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', direction: 'rtl' as const }}>
          <div style={{ direction: 'ltr' as const }}>
            <span className="eyebrow">02</span>
            <h2 className="section-heading" style={{ marginBottom: '24px' }}>Our People</h2>
            <p className="body-text" style={{ marginBottom: '24px' }}>We put our people first, with a focus on safety, growth, and inclusion, closely aligning with the goals of Saudi Vision 2030.</p>
            <ul style={{ paddingLeft: '20px' }} className="body-text">
              <li style={{ marginBottom: '12px' }}>Employee development & training</li>
              <li style={{ marginBottom: '12px' }}>Health and safety protocols</li>
              <li style={{ marginBottom: '12px' }}>National talent empowerment</li>
            </ul>
          </div>
          <div style={{ aspectRatio: '1/1', background: 'var(--bg-secondary)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src="https://gulf-union.com/images/bcaptain%20grp.png" 
              alt="Gulf Union Captain brand — produced by our 1,300+ team members" 
              style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} 
              loading="lazy"
            />
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <span className="eyebrow">03</span>
            <h2 className="section-heading" style={{ marginBottom: '24px' }}>Our Community</h2>
            <p className="body-text">We value strong roots. Whether through local sourcing or supporting charitable causes, we aim to give back meaningfully to the communities that have supported our growth.</p>
          </div>
          <div style={{ aspectRatio: '1/1', background: 'var(--bg-secondary)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src="https://gulf-union.com/images/bsplash%20grp.png" 
              alt="Gulf Union Splash brand — community refreshment" 
              style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} 
              loading="lazy"
            />
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center', marginTop: '120px' }}>
        <h2 className="section-heading" style={{ marginBottom: '24px' }}>EXPLORE OUR OPERATIONS</h2>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
          <Link href="/manufacturing" className="cta-link" aria-label="Explore Gulf Union's manufacturing facilities">MANUFACTURING</Link>
          <Link href="/global-presence" className="cta-link" aria-label="See Gulf Union's global presence">GLOBAL PRESENCE</Link>
        </div>
      </section>
    </main>
  );
}
