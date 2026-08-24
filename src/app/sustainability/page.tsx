export default function Sustainability() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingBottom: '120px' }}>
      <header style={{ 
        height: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 5%',
        backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.3))' }} />
        <div style={{ maxWidth: '800px', marginTop: '100px', position: 'relative', zIndex: 2 }}>
          <h1 className="text-hero" style={{ color: '#fff' }}>GROWING RESPONSIBLY, TOGETHER.</h1>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '120px auto 0', padding: '0 5%' }}>
        <section style={{ marginBottom: '80px', padding: '60px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
          <h2 className="text-section-title" style={{ marginBottom: '24px', color: 'var(--brand-primary)' }}>Our Planet</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>We’re actively working to minimize the environmental impact of our operations through smarter energy use, waste reduction, and responsible sourcing.</p>
          <ul style={{ marginTop: '24px', paddingLeft: '20px', fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: '2' }}>
            <li>Energy & greenhouse gas (GHG) management</li>
            <li>Water efficiency & conservation</li>
            <li>Waste reduction & recycling</li>
          </ul>
        </section>

        <section style={{ marginBottom: '80px', padding: '60px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
          <h2 className="text-section-title" style={{ marginBottom: '24px', color: 'var(--brand-primary)' }}>Our People</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>We put our people first, with a focus on safety, growth, and inclusion.</p>
          <ul style={{ marginTop: '24px', paddingLeft: '20px', fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: '2' }}>
            <li>Employee development & training</li>
            <li>Health and safety protocols</li>
            <li>National talent empowerment (Vision 2030)</li>
          </ul>
        </section>

        <section style={{ padding: '60px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
          <h2 className="text-section-title" style={{ marginBottom: '24px', color: 'var(--brand-primary)' }}>Our Community</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>We value strong roots. Whether through local sourcing or supporting charitable causes, we aim to give back meaningfully.</p>
        </section>
      </div>
    </div>
  );
}
