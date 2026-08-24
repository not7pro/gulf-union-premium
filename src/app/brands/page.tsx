import BrandsGallery from "@/components/BrandsGallery";

export default function Brands() {
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
          <span className="eyebrow">OUR PORTFOLIO</span>
          <h1 className="hero-heading">DISCOVER OUR BRANDS</h1>
        </div>
      </header>

      <BrandsGallery />
    </main>
  );
}
