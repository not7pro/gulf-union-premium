import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Global Presence — 42+ Markets Worldwide",
  description: "Gulf Union Foods products are enjoyed in over 42 markets across the Middle East, Africa, Asia, and beyond.",
  alternates: { canonical: "/global-presence" },
};

export default function GlobalPresence() {
  const regions = [
    { name: "Middle East & GCC", markets: "Saudi Arabia, UAE, Kuwait, Bahrain, Oman, Qatar, Jordan, Iraq, Lebanon, Yemen" },
    { name: "Africa", markets: "Egypt, Sudan, Libya, Ethiopia, Somalia, Djibouti, Eritrea" },
    { name: "Asia & Pacific", markets: "India, Pakistan, Afghanistan, Bangladesh, Sri Lanka" },
    { name: "Europe & CIS", markets: "Select European markets" },
  ];

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <header className="section" style={{ 
        height: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        borderBottom: '1px solid var(--border-color)',
        background: 'var(--bg-secondary)'
      }}>
        <div className="container">
          <span className="eyebrow">GLOBAL PRESENCE</span>
          <h1 className="hero-heading">FROM SAUDI ARABIA<br/>TO THE WORLD.</h1>
          <p className="body-large" style={{ marginTop: '24px', maxWidth: '600px' }}>
            Enjoyed in over 42+ markets globally, our products bridge cultures and deliver premium quality to millions every day.
          </p>
        </div>
      </header>

      {/* Metrics */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 300, marginBottom: '8px' }}>42+</div>
            <div className="eyebrow">COUNTRIES</div>
          </div>
          <div>
            <div style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 300, marginBottom: '8px' }}>7</div>
            <div className="eyebrow">BRANDS EXPORTED</div>
          </div>
          <div>
            <div style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 300, marginBottom: '8px' }}>4</div>
            <div className="eyebrow">CONTINENTS</div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">DISTRIBUTION REGIONS</span>
          <h2 className="section-heading" style={{ marginBottom: '60px' }}>WHERE WE OPERATE</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {regions.map(region => (
              <div key={region.name} style={{ padding: '40px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '16px' }}>{region.name}</h3>
                <p className="body-text">{region.markets}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center', background: 'var(--bg-secondary)' }}>
        <h2 className="section-heading" style={{ marginBottom: '24px' }}>INTERESTED IN DISTRIBUTION?</h2>
        <p className="body-text" style={{ marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
          Contact our international sales team to discuss distribution opportunities in your market.
        </p>
        <Link href="/contact" className="cta-link" aria-label="Contact Gulf Union Foods about distribution">GET IN TOUCH</Link>
      </section>
    </main>
  );
}
