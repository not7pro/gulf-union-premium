import Timeline from "@/components/Timeline";

export default function WhoWeAre() {
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
          <span className="eyebrow">COMPANY HISTORY</span>
          <h1 className="hero-heading">OUR STORY</h1>
          <p className="body-large" style={{ marginTop: '24px', maxWidth: '700px' }}>
            From our founding in 1995 to becoming a leader in the regional beverage industry, trace the milestones that define Gulf Union Foods.
          </p>
        </div>
      </header>

      <Timeline />
    </main>
  );
}
