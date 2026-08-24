export default function Contact() {
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
          <span className="eyebrow">GET IN TOUCH</span>
          <h1 className="hero-heading">CONTACT US</h1>
        </div>
      </header>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          <div>
            <h2 className="section-heading" style={{ marginBottom: '24px' }}>Let's Talk.</h2>
            <p className="body-large" style={{ marginBottom: '60px' }}>
              We're here to answer any questions you may have about our products, 
              distribution, or corporate partnerships.
            </p>
            
            <div style={{ marginBottom: '40px' }}>
              <span className="eyebrow">HEADQUARTERS</span>
              <p className="body-text" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>Riyadh, Saudi Arabia</p>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <span className="eyebrow">PHONE</span>
              <p className="body-text" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>+966 9200 22205</p>
            </div>
            
            <div>
              <span className="eyebrow">EMAIL</span>
              <p className="body-text" style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>info@gulf-union.com</p>
            </div>
          </div>
          
          <div style={{ background: 'var(--bg-secondary)', padding: '60px', border: '1px solid var(--border-color)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <label className="eyebrow">NAME</label>
                <input type="text" style={{ width: '100%', padding: '16px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none', fontSize: '1.1rem' }} />
              </div>
              <div>
                <label className="eyebrow">EMAIL</label>
                <input type="email" style={{ width: '100%', padding: '16px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none', fontSize: '1.1rem' }} />
              </div>
              <div>
                <label className="eyebrow">MESSAGE</label>
                <textarea rows={4} style={{ width: '100%', padding: '16px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none', fontSize: '1.1rem', resize: 'vertical' }} />
              </div>
              <button style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '16px 32px', border: 'none', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', alignSelf: 'flex-start', marginTop: '16px' }}>
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
