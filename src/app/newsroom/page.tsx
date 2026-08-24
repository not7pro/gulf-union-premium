import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsroom — Media & Press",
  description: "Latest news, press releases, and company updates from Gulf Union Foods Co.",
  alternates: { canonical: "/newsroom" },
};

export default function Newsroom() {
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <header className="section" style={{ 
        height: '40vh', 
        display: 'flex', 
        alignItems: 'center', 
        borderBottom: '1px solid var(--border-color)',
        background: 'var(--bg-secondary)'
      }}>
        <div className="container">
          <span className="eyebrow">MEDIA & PRESS</span>
          <h1 className="hero-heading">NEWSROOM</h1>
        </div>
      </header>

      <section className="section">
        <div className="container">
          
          {/* Featured article */}
          <article style={{ marginBottom: '80px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', borderBottom: '1px solid var(--border-color)', paddingBottom: '80px' }}>
            <div style={{ aspectRatio: '16/9', background: 'var(--bg-tertiary)', overflow: 'hidden' }}>
              <img 
                src="https://gulf-union.com/images/boriginal%20grp.png" 
                alt="Gulf Union Original product range expansion announcement" 
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '20px' }}
                loading="lazy"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <time className="eyebrow" dateTime="2024-03-15" style={{ color: 'var(--brand-primary)' }}>MARCH 15, 2024 · COMPANY</time>
              <h2 className="section-heading" style={{ marginBottom: '16px' }}>Gulf Union Foods Expands Distribution to 42+ Markets</h2>
              <p className="body-text" style={{ marginBottom: '24px' }}>Gulf Union Foods Co. continues its global expansion with new distribution agreements across additional markets in Africa and Southeast Asia.</p>
            </div>
          </article>

          {/* News grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            <article>
              <div style={{ aspectRatio: '3/2', background: 'var(--bg-tertiary)', marginBottom: '24px', overflow: 'hidden' }}>
                <img 
                  src="https://gulf-union.com/images/bcobra%20grp.png" 
                  alt="COBRA energy drink product lineup" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '16px' }}
                  loading="lazy"
                />
              </div>
              <time className="eyebrow" dateTime="2024-01-20" style={{ color: 'var(--brand-accent)' }}>JANUARY 20, 2024 · BRANDS</time>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>COBRA Energy Drink Sees Record Growth</h3>
              <p className="body-text">The COBRA energy drink brand continues to see strong market adoption across the GCC region.</p>
            </article>
            
            <article>
              <div style={{ aspectRatio: '3/2', background: 'var(--bg-tertiary)', marginBottom: '24px', overflow: 'hidden' }}>
                <img 
                  src="https://gulf-union.com/images/bklasse%20grp.png" 
                  alt="KLASSE malt beverage collection" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '16px' }}
                  loading="lazy"
                />
              </div>
              <time className="eyebrow" dateTime="2023-11-08" style={{ color: 'var(--text-muted)' }}>NOVEMBER 8, 2023 · SUSTAINABILITY</time>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Water Conservation Milestone at Plant 2</h3>
              <p className="body-text">Our second manufacturing facility achieves a 30% reduction in water usage through upgraded filtration systems.</p>
            </article>
          </div>

          {/* Press contact */}
          <div style={{ marginTop: '80px', padding: '60px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
            <span className="eyebrow">PRESS INQUIRIES</span>
            <h3 className="section-heading" style={{ marginBottom: '16px' }}>Media Contact</h3>
            <p className="body-text" style={{ marginBottom: '24px' }}>
              For press inquiries, interviews, and media assets, please contact our communications team.
            </p>
            <a href="mailto:info@gulf-union.com" className="cta-link" aria-label="Email Gulf Union Foods press inquiries">
              info@gulf-union.com
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
