export default function Contact() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <header style={{ 
        height: '40vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 5%',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div style={{ maxWidth: '800px', marginTop: '100px' }}>
          <h1 className="text-hero">Contact Us</h1>
        </div>
      </header>

      <section style={{ padding: '120px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Get in Touch</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px' }}>
              We're here to answer any questions you may have about our products, 
              distribution, or corporate partnerships.
            </p>
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontWeight: 'bold', color: 'var(--brand-primary)' }}>Phone</p>
              <p style={{ fontSize: '1.5rem' }}>+966 9200 22205</p>
            </div>
            <div>
              <p style={{ fontWeight: 'bold', color: 'var(--brand-primary)' }}>Email</p>
              <p style={{ fontSize: '1.5rem' }}>info@gulf-union.com</p>
            </div>
          </div>
          
          <div style={{ background: 'var(--bg-secondary)', padding: '60px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <input type="text" placeholder="Name" style={{ padding: '16px', background: 'transparent', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-primary)' }} />
              <input type="email" placeholder="Email" style={{ padding: '16px', background: 'transparent', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-primary)' }} />
              <textarea placeholder="Message" rows={5} style={{ padding: '16px', background: 'transparent', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-primary)' }} />
              <button style={{ background: 'var(--brand-primary)', color: '#fff', padding: '16px', borderRadius: '4px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
