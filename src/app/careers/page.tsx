export default function Careers() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      <header style={{ 
        height: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 5%',
        backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.3))' }} />
        <div style={{ maxWidth: '800px', marginTop: '100px', position: 'relative', zIndex: 2 }}>
          <h1 className="text-hero" style={{ color: '#fff' }}>Build What's Next.</h1>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.8)', marginTop: '24px' }}>
            Join a team of 1,300+ professionals dedicated to quality and innovation.
          </p>
        </div>
      </header>
    </div>
  );
}
