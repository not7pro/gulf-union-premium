import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import BrandsGallery from "@/components/BrandsGallery";
import Timeline from "@/components/Timeline";
import PlantSelector from "@/components/PlantSelector";

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Editorial Intro */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow" style={{ marginBottom: '24px' }}>OUR STORY</span>
          <h2 className="section-heading" style={{ marginBottom: '32px' }}>A JOURNEY THAT STARTED IN 1995.</h2>
          <p className="body-large">
            Gulf Union Foods Co. was established with a vision to bring world-class quality 
            to the Saudi beverage market. Today, our juices, nectars, and drinks are 
            enjoyed by families across 42+ markets globally, driven by our commitment 
            to innovation and manufacturing excellence.
          </p>
        </div>
      </section>

      <StatsSection />
      
      <div style={{ padding: '120px 5%', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <span className="eyebrow" style={{ marginBottom: '24px' }}>OUR PORTFOLIO</span>
        <h2 className="section-heading">CRAFTING TASTE FOR EVERY GENERATION.</h2>
      </div>
      
      <BrandsGallery />

      <Timeline />

      <PlantSelector />
      
      {/* CTA Footer */}
      <section className="section" style={{ textAlign: 'center', background: 'var(--bg-secondary)' }}>
        <h2 className="section-heading" style={{ marginBottom: '24px' }}>READY TO EXPLORE MORE?</h2>
        <a href="/brands" className="cta-link">VIEW ALL BRANDS</a>
      </section>
    </main>
  );
}
