export default function Newsroom() {
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
          <h1 className="text-hero">Newsroom</h1>
        </div>
      </header>

      <section style={{ padding: '120px 5%' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <div style={{ padding: '40px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
            <p style={{ color: 'var(--brand-primary)', fontWeight: 'bold', marginBottom: '16px' }}>COMPANY</p>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Gulf Union Announces New Market Expansion</h3>
            <p style={{ color: 'var(--text-muted)' }}>Read about our latest distribution agreements...</p>
          </div>
          <div style={{ padding: '40px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
            <p style={{ color: 'var(--brand-primary)', fontWeight: 'bold', marginBottom: '16px' }}>BRANDS</p>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Original® Launches New Flavor Profile</h3>
            <p style={{ color: 'var(--text-muted)' }}>A new premium addition to the Original lineup...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
