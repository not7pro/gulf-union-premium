export default function GlobalPresence() {
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

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <div style={{ 
            aspectRatio: '16/9', 
            background: 'var(--bg-tertiary)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            position: 'relative'
          }}>
            {/* Minimalist SVG Map Placeholder */}
            <p className="eyebrow">[ Custom SVG Map Visualization ]</p>
            <div style={{ position: 'absolute', width: '8px', height: '8px', background: 'var(--brand-accent)', borderRadius: '50%', top: '40%', left: '60%' }}></div>
            <div style={{ position: 'absolute', width: '8px', height: '8px', background: 'var(--brand-accent)', borderRadius: '50%', top: '35%', left: '50%' }}></div>
            <div style={{ position: 'absolute', width: '8px', height: '8px', background: 'var(--brand-accent)', borderRadius: '50%', top: '45%', left: '70%' }}></div>
          </div>
        </div>
      </section>
    </main>
  );
}
