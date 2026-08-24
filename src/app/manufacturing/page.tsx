import PlantSelector from "@/components/PlantSelector";

export default function Manufacturing() {
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
          <span className="eyebrow">FACILITIES</span>
          <h1 className="hero-heading">MANUFACTURING<br/>EXCELLENCE</h1>
        </div>
      </header>

      <PlantSelector />
    </main>
  );
}
