export default function Careers() {
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
          <span className="eyebrow">CAREERS</span>
          <h1 className="hero-heading">BUILD WHAT'S NEXT.</h1>
          <p className="body-large" style={{ marginTop: '24px', maxWidth: '600px' }}>
            Join a team of 1,300+ professionals dedicated to quality, innovation, and growth.
          </p>
        </div>
      </header>
      
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div style={{ aspectRatio: '4/5', background: 'var(--bg-tertiary)', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <span className="eyebrow">LIFE AT GULF UNION</span>
            <h2 className="section-heading" style={{ marginBottom: '24px' }}>Growth and Opportunity</h2>
            <p className="body-text" style={{ marginBottom: '40px' }}>
              We believe our people are our greatest asset. At Gulf Union, we foster an environment of continuous learning, professional development, and empowerment.
            </p>
            <a href="/contact" className="cta-link">VIEW OPPORTUNITIES</a>
          </div>
        </div>
      </section>
    </main>
  );
}
