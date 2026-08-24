import PlantSelector from "../../components/PlantSelector";

export default function Manufacturing() {
  return (
    <>
      <header style={{ 
        height: '40vh', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 5%',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div style={{ maxWidth: '800px', marginTop: '100px' }}>
          <h1 className="text-hero" style={{ fontSize: '4rem' }}>Precision Manufacturing.</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginTop: '24px' }}>
            Explore our state-of-the-art facilities that power a 500-million-liter 
            annual production capacity across 4 dedicated plants.
          </p>
        </div>
      </header>
      
      <PlantSelector />
    </>
  );
}
