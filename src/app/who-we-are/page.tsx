import Timeline from "../../components/Timeline";

export default function WhoWeAre() {
  return (
    <>
      <header style={{ 
        height: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 5%',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div style={{ maxWidth: '800px', marginTop: '100px' }}>
          <h1 className="text-hero">A Legacy of Quality.</h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginTop: '24px' }}>
            Founded in 1995, Gulf Union Foods Co. has grown into one of the region's 
            most trusted beverage manufacturers.
          </p>
        </div>
      </header>
      
      <Timeline />
    </>
  );
}
