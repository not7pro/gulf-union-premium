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
          
          <div style={{ marginBottom: '80px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', borderBottom: '1px solid var(--border-color)', paddingBottom: '80px' }}>
            <div style={{ aspectRatio: '16/9', background: 'var(--bg-tertiary)', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000&auto=format&fit=crop" alt="News" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="eyebrow" style={{ color: 'var(--brand-primary)' }}>COMPANY</span>
              <h2 className="section-heading" style={{ marginBottom: '16px' }}>Gulf Union Announces New Market Expansion</h2>
              <p className="body-text" style={{ marginBottom: '24px' }}>Read about our latest distribution agreements and international growth strategy moving into 2024.</p>
              <a href="#" className="cta-link">READ ARTICLE</a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            <div>
              <div style={{ aspectRatio: '3/2', background: 'var(--bg-tertiary)', marginBottom: '24px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1500&auto=format&fit=crop" alt="Brand" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="eyebrow" style={{ color: 'var(--brand-accent)' }}>BRANDS</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Original® Launches New Flavor Profile</h3>
              <p className="body-text">A new premium addition to the Original lineup focusing on tropical blends.</p>
            </div>
            
            <div>
              <div style={{ aspectRatio: '3/2', background: 'var(--bg-tertiary)', marginBottom: '24px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1500&auto=format&fit=crop" alt="Sustainability" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="eyebrow" style={{ color: 'var(--text-muted)' }}>SUSTAINABILITY</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Water Conservation Milestone Reached</h3>
              <p className="body-text">Plant 2 achieves 30% reduction in water usage through new filtration systems.</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
