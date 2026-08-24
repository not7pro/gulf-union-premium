export default function GlobalPresence() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
      <header style={{ 
        height: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 5%',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ maxWidth: '800px', marginTop: '100px' }}>
          <h1 className="text-hero">From the Gulf<br/>to the World.</h1>
          <p style={{ fontSize: '1.5rem', color: '#888', marginTop: '24px' }}>
            Enjoyed in over 40+ markets and 42+ countries globally.
          </p>
        </div>
      </header>

      <section style={{ padding: '120px 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', aspectRatio: '16/9', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '1.5rem', color: '#888' }}>[ Interactive Global Map Visualization ]</p>
        </div>
      </section>
    </div>
  );
}
