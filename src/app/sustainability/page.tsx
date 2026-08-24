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
            <p className="body-text" style={{ marginBottom: '24px' }}>We’re actively working to minimize the environmental impact of our operations through smarter energy use, waste reduction, and responsible sourcing.</p>
            <ul style={{ paddingLeft: '20px' }} className="body-text">
              <li style={{ marginBottom: '12px' }}>Energy & greenhouse gas (GHG) management</li>
              <li style={{ marginBottom: '12px' }}>Water efficiency & conservation</li>
              <li style={{ marginBottom: '12px' }}>Waste reduction & recycling</li>
            </ul>
          </div>
          <div style={{ aspectRatio: '1/1', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop" alt="Environment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </section>

        <section style={{ marginBottom: '120px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', direction: 'rtl' }}>
          <div style={{ direction: 'ltr' }}>
            <span className="eyebrow">02</span>
            <h2 className="section-heading" style={{ marginBottom: '24px' }}>Our People</h2>
            <p className="body-text" style={{ marginBottom: '24px' }}>We put our people first, with a focus on safety, growth, and inclusion, closely aligning with the goals of Saudi Vision 2030.</p>
            <ul style={{ paddingLeft: '20px' }} className="body-text">
              <li style={{ marginBottom: '12px' }}>Employee development & training</li>
              <li style={{ marginBottom: '12px' }}>Health and safety protocols</li>
              <li style={{ marginBottom: '12px' }}>National talent empowerment</li>
            </ul>
          </div>
          <div style={{ aspectRatio: '1/1', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop" alt="People" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <span className="eyebrow">03</span>
            <h2 className="section-heading" style={{ marginBottom: '24px' }}>Our Community</h2>
            <p className="body-text">We value strong roots. Whether through local sourcing or supporting charitable causes, we aim to give back meaningfully to the communities that have supported our growth.</p>
          </div>
          <div style={{ aspectRatio: '1/1', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2000&auto=format&fit=crop" alt="Community" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </section>
      </div>
    </main>
  );
}
